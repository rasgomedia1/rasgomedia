import content from "../content.json";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/privacidad", "/privacy", "/terminos", "/terms"],
    },
    sitemap: `${content.site.url}/sitemap.xml`,
  };
}
