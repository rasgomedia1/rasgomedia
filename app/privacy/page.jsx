import content from "../../content.json";
import { PrivacyPage, legalMetadata } from "../../components/LegalPages";

export const metadata = legalMetadata(content.privacy, "/privacy", "/privacidad", "es");

export default function Page() {
  return <PrivacyPage data={content.privacy} lang="en" />;
}
