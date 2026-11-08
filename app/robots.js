import content from "../content.json";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/privacidad", "/terminos"],
    },
    sitemap: `${content.site.url}/sitemap.xml`,
  };
}
