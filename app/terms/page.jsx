import content from "../../content.json";
import { TermsPage, legalMetadata } from "../../components/LegalPages";

export const metadata = legalMetadata(content.terms, "/terms", "/terminos", "es");

export default function Page() {
  return <TermsPage data={content.terms} lang="en" />;
}
