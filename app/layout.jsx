import "./globals.css";
import content from "../content.json";
import SiteHeader from "../components/SiteHeader";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  metadataBase: new URL(content.site.url),
  title: {
    default: content.home.meta.title,
    template: "%s",
  },
  description: content.home.meta.description,
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    type: "website",
    url: content.site.url,
    title: content.home.meta.ogTitle,
    description: content.home.meta.ogDescription,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="min-h-screen bg-background flex flex-col">
          <SiteHeader />
          <SiteNav />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
