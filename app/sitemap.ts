import type { MetadataRoute } from "next";

const SITE = "https://sponsormap.site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/use-cases", "/demo", "/platform", "/pricing", "/request-demo", "/privacy", "/terms"].map((p) => ({ url: `${SITE}${p}` }));
}
