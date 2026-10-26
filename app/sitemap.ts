import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://www.systemtechnik-zwirner.de"; return ["", "/impressum", "/datenschutz"].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path ? "yearly" : "monthly", priority: path ? 0.3 : 1 })); }
