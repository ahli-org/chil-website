// Confirmed sponsors, shown on the home page and the Sponsor page.
// Logo paths are relative to the site base (files live in public/sponsors/).

export type Sponsor = { name: string; url?: string; logo: string };

export type SponsorTier = {
  tier: 'diamond' | 'gold' | 'silver' | 'bronze';
  label: string;
  sponsors: Sponsor[];
};

// Add sponsors here as they are confirmed. An empty tier shows a placeholder.
export const SPONSOR_TIERS: SponsorTier[] = [
  { tier: 'diamond', label: 'Diamond Sponsors', sponsors: [] },
  { tier: 'silver', label: 'Silver Sponsors', sponsors: [] },
  { tier: 'bronze', label: 'Bronze Sponsors', sponsors: [] },
];
