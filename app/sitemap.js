import content from "../content.json";

export default function sitemap() {
  const base = content.site.url;
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/catalogo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
