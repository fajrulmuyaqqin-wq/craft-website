// Cross-app link configuration, ported from the Vite site's config/links.ts.
// The marketing site links out to the webapp for all product features.

import {
  DEFAULT_SITE_URL,
  DEFAULT_SUPPORT_EMAIL,
  DEFAULT_WEBAPP_URL,
  GITHUB_ORG_URL,
} from "./branding";

// Canonical origin for metadata, sitemaps and share links.
export const SITE_URL = DEFAULT_SITE_URL;

/** Absolute URL for a site path; already-absolute URLs (media CDN) pass through. */
export function siteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const WEBAPP_URL = DEFAULT_WEBAPP_URL;

// Marketing media lives in this app's public/ directory so production and
// deploy previews each serve their own assets. Override only for a media CDN.
export const MEDIA_BASE = process.env.NEXT_PUBLIC_MEDIA_BASE ?? "";

export function webappUrl(path: string): string {
  return `${WEBAPP_URL}${path.replace(/^\//, "")}`;
}

export function mediaUrl(path: string): string {
  return `${MEDIA_BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

// Showcase clips are served from the configured CDN (with CORS headers for WebGL video textures).
const CDN_MEDIA_BASE =
  process.env.NEXT_PUBLIC_CDN_MEDIA_BASE ?? "https://cdn-w.storyteller.ai";

export function cdnMediaUrl(path: string): string {
  return `${CDN_MEDIA_BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

export const SOCIAL_LINKS = {
  DISCORD: process.env.NEXT_PUBLIC_DISCORD_URL ?? `${GITHUB_ORG_URL}/artcraft/discussions`,
  YOUTUBE: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? GITHUB_ORG_URL,
  TIKTOK: process.env.NEXT_PUBLIC_TIKTOK_URL ?? GITHUB_ORG_URL,
  GITHUB: `${GITHUB_ORG_URL}/artcraft`,
  INSTAGRAM: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? GITHUB_ORG_URL,
  LINKEDIN: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? GITHUB_ORG_URL,
  REDDIT: process.env.NEXT_PUBLIC_REDDIT_URL ?? GITHUB_ORG_URL,
} as const;

export const SUPPORT_EMAIL = DEFAULT_SUPPORT_EMAIL;
