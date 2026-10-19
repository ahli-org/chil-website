// Central place for site-wide data. Edit values here and they update everywhere.

// Astro injects BASE_URL from `base` in astro.config.mjs. It always ends in "/".
const BASE: string = import.meta.env.BASE_URL;

export function url(path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `${BASE}${clean}/` : BASE;
}

/** Resolve a NAV/link target: absolute URLs pass through, site paths get the base. */
export function href(target: string): string {
  return /^(https?:|mailto:)/.test(target) ? target : url(target);
}

export function isExternal(target: string): boolean {
  return /^https?:/.test(target);
}

export function currentKey(pathname: string): string {
  return pathname.replace(BASE, '').replace(/^\/+|\/+$/g, '');
}

export const REVIEW_MODE = false;

export const SITE = {
  name: 'AHLI CHIL 2027',
  shortName: 'CHIL',
  year: '2027',
  edition: '8th Annual',
  tagline: 'Conference on Health, Inference, and Learning',
  // Presenting-sponsor line above the hero title; leave empty to hide it.
  presentedBy: '',
  description:
    'AHLI CHIL is designed to spark insight-driven discussions among clinicians and researchers, from industry and academia, in machine learning, health policy, causality, fairness, and other related areas.',
  dates: 'June 2027',
  location: 'Chicago, IL',
  // Venue not yet confirmed. Fill in name/building/address once it is.
  venue: {
    name: 'Venue to be announced',
    building: '',
    address: '',
  },
  email: 'chil@ahli.cc',
  // Registration is handled outside this static site. Point this at the live form.
  register: 'https://chil.ahli.cc/attend/register/',
  // Shows the Register button in the header. Off until 2027 registration opens.
  registrationOpen: false,
  newsletter: 'https://ahli.us21.list-manage.com/subscribe?u=04b29e704730e347c528bdca7&id=83738eac2b',
  youtube: 'https://www.youtube.com/@ahli_cc',
  bluesky: { handle: '@ahli-cc.bsky.social', url: 'https://bsky.app/profile/ahli-cc.bsky.social' },
  x: { handle: '@CHILconference', url: 'https://x.com/chilconference' },
};

// `path` is a site path ('' = home) or an absolute URL (opens in a new tab).
// Items without a path are dropdown-only headings, as on the WordPress menu.
// `hidden` drops an item from the header menu (its pages still build) — remove it to re-enable.
export type NavChild = { label: string; path: string };
export type NavItem = { label: string; path?: string; children?: NavChild[]; hidden?: boolean };

export const NAV: NavItem[] = [
  { label: 'Home', path: '' },
  {
    label: 'About',
    children: [
      { label: 'Organizers', path: 'organizers' },
      { label: 'Governing Board', path: 'https://ahli.cc' },
      { label: 'Past Events: 2025', path: 'https://chil.ahli.cc/2025/' },
      { label: 'Past Events: 2024 & Previous', path: 'https://chilold.ahli.cc/index.html' },
    ],
  },
  {
    label: 'Program',
    hidden: true, // until the 2027 program is confirmed
    children: [
      { label: 'Speakers', path: 'speakers' },
      { label: 'Research Roundtables', path: 'attend/research-roundtables' },
      { label: 'Poster Session', path: 'poster-session' },
      { label: 'Unconference', path: 'submit/unconference' },
    ],
  },
  {
    label: 'Attend',
    hidden: true, // until 2027 registration and venue are confirmed
    children: [
      { label: 'Register', path: SITE.register },
      { label: 'Schedule', path: 'attend/schedule' },
      { label: 'Plan Your Trip', path: 'attend/plan-your-trip' },
    ],
  },
  {
    label: 'Submit',
    path: 'submit',
    children: [
      { label: 'Call for Papers', path: 'submit/call-for-papers' },
      { label: 'Doctoral Symposium', path: 'submit/doctoral-symposium' },
    ],
  },
  { label: 'Sponsor', path: 'sponsor' },
  {
    label: 'Resources',
    children: [
      { label: 'Presenter Information', path: 'presenter-information' },
      { label: 'Community Guidelines', path: 'resources/community-guidelines' },
      { label: 'Code of Conduct', path: 'resources/code-of-conduct' },
      { label: 'Review Policy', path: 'resources/review-policy' },
    ],
  },
];

/** Section label for breadcrumbs / eyebrows, looked up from NAV. */
export function sectionFor(key: string): NavItem | undefined {
  return NAV.find((item) => item.children?.some((c) => c.path === key));
}
