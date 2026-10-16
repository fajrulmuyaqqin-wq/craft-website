import type { Metadata } from "next";
import RevealManager from "@/components/reveal-manager";
import DownloadPage from "@/components/download/download-page";
import { BRAND_NAME } from "@/lib/branding";

export const metadata: Metadata = {
  title: `Download ${BRAND_NAME} — Windows and macOS`,
  description: `Download ${BRAND_NAME} for Windows and macOS. Start creating AI artwork today.`,
  alternates: { canonical: "/download" },
};

export default function Download() {
  return (
    <>
      <RevealManager />
      <DownloadPage />
    </>
  );
}
