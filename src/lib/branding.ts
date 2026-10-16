// Centralized White-Label & Production Branding Configuration.
// Override any setting via NEXT_PUBLIC_* environment variables in production.

export const BRAND_NAME =
  process.env.NEXT_PUBLIC_BRAND_NAME ?? "Craft Suite";

export const BRAND_SHORT_NAME =
  process.env.NEXT_PUBLIC_BRAND_SHORT_NAME ?? "Craft";

// Character 0 is rendered as the geometric Craft Prism SVG glyph in HeroMasthead;
// characters 1..n are rendered as display typography ("CRAFT").
export const BRAND_HERO_WORDMARK =
  process.env.NEXT_PUBLIC_BRAND_WORDMARK ?? "CCRAFT";

export const BRAND_TAGLINE =
  process.env.NEXT_PUBLIC_BRAND_TAGLINE ??
  "Controllable AI & Native Creative Tools for Artists";

export const BRAND_DESCRIPTION =
  process.env.NEXT_PUBLIC_BRAND_DESCRIPTION ??
  `${BRAND_NAME} is the open-source creative studio and native desktop suite for generating AI video, images, vector graphics, and digital design — built for artists who want real control.`;

export const GITHUB_ORG_NAME =
  process.env.NEXT_PUBLIC_GITHUB_ORG ?? "fajrulmuyaqqin-wq";

export const GITHUB_ORG_URL = `https://github.com/${GITHUB_ORG_NAME}`;

export const DEFAULT_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const DEFAULT_WEBAPP_URL =
  process.env.NEXT_PUBLIC_WEBAPP_URL ?? "http://localhost:3000/";

export const DEFAULT_API_HOST =
  process.env.NEXT_PUBLIC_API_HOST ?? "http://localhost:12345";

export const DEFAULT_SUPPORT_EMAIL =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@craftsuite.dev";
