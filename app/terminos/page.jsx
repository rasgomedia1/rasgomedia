import content from "../../content.json";
import { TermsPage, legalMetadata } from "../../components/LegalPages";

export const metadata = legalMetadata(content.terminos, "/terminos", "/terms", "en");

export default function Page() {
  return <TermsPage data={content.terminos} lang="es" />;
}
