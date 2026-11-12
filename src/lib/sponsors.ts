// Confirmed sponsors, shown on the home page and the Sponsor page.
// Logo paths are relative to the site base (files live in public/sponsors/).

export type Sponsor = { name: string; url?: string; logo: string };

export type SponsorTier = {
  tier: 'platinum' | 'diamond' | 'gold' | 'silver' | 'startup';
  label: string;
  sponsors: Sponsor[];
};

// Add sponsors here as they are confirmed. Empty tiers are hidden.
export const SPONSOR_TIERS: SponsorTier[] = [
  { tier: 'platinum', label: 'Platinum Sponsors', sponsors: [] },
  { tier: 'diamond', label: 'Diamond Sponsors', sponsors: [] },
  { tier: 'gold', label: 'Gold Sponsors', sponsors: [] },
  { tier: 'silver', label: 'Silver Sponsors', sponsors: [] },
  { tier: 'startup', label: 'Academy/Startup Sponsors', sponsors: [] },
];

export const HAS_SPONSORS = SPONSOR_TIERS.some((t) => t.sponsors.length > 0);
