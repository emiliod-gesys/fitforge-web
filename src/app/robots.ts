const site = "https://www.forgen.app";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site}/sitemap.xml`,
    host: site,
  };
}
