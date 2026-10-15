// @ts-check
import { defineConfig } from 'astro/config';

/** @type {string} */
const BASE = '/';

function remarkBaseUrl() {
  const prefix = BASE === '/' ? '' : BASE.replace(/\/$/, '');
  return (tree) => {
    if (!prefix) return;
    const visit = (node) => {
      if (
        (node.type === 'link' || node.type === 'image' || node.type === 'definition') &&
        typeof node.url === 'string'
      ) {
        const u = node.url;
        if (u.startsWith('/') && !u.startsWith('//') && !u.startsWith(prefix + '/')) {
          node.url = prefix + u;
        }
      }
      // Raw HTML in markdown (e.g. <img src="/images/...">) isn't parsed into
      // link/image nodes, so prefix root-relative src/href attributes directly.
      if (node.type === 'html' && typeof node.value === 'string') {
        node.value = node.value.replace(
          /(\s(?:src|href)=["'])\/(?!\/)/g,
          (m, attr, offset, str) =>
            str.startsWith(prefix + '/', offset + attr.length) ? m : `${attr}${prefix}/`
        );
      }
      if (Array.isArray(node.children)) node.children.forEach(visit);
    };
    visit(tree);
  };
}

export default defineConfig({
  output: 'static',
  // Served at https://chil.ahli.cc (public/CNAME). To test under a GitHub Pages
  // project path instead, set site to the github.io origin and BASE to '/<repo>/'.
  site: 'https://chil.ahli.cc',
  base: BASE,
  markdown: {
    remarkPlugins: [remarkBaseUrl],
  },
});
