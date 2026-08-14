const site = "https://www.forgen.app";

export default function sitemap() {
  return [
    { url: site, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${site}/privacy`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.8 },
    { url: `${site}/terms`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.8 },
    { url: `${site}/download`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
  ];
}
