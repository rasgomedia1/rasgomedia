import content from "../../content.json";
import { PrivacyPage, legalMetadata } from "../../components/LegalPages";

export const metadata = legalMetadata(content.privacidad, "/privacidad", "/privacy", "en");

export default function Page() {
  return <PrivacyPage data={content.privacidad} lang="es" />;
}
