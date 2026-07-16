import content from "../content.json";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-muted border-t border-border py-4 text-center text-xs text-muted-foreground">
      {content.site.copyright}
    </footer>
  );
}
