import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";
import site from "@/content/site.json";
export const metadata:Metadata={title:"Datenschutz | Systemtechnik Zwirner",description:"Datenschutzhinweise von Systemtechnik Zwirner.",alternates:{canonical:"/datenschutz"}};
// WICHTIG: Diese Struktur ist keine Rechtsberatung. Vor Veröffentlichung an Hosting, Formular und tatsächlich eingesetzte Dienste anpassen und prüfen lassen.
export default function Datenschutz(){const p=site.privacy;return <LegalLayout kicker="DATENSCHUTZ" title="Datenschutzerklärung"><p className="legal-lead">{p.intro}</p><h2>1. Verantwortliche Stelle</h2><p className="placeholder" style={{whiteSpace:"pre-line"}}>{p.controller}</p><h2>2. Hosting und Server-Logfiles</h2><p className="placeholder">{p.hosting}</p><h2>3. Kontaktaufnahme</h2><p>{p.contactText}</p><p className="placeholder">{p.contactDetails}</p><h2>4. Cookies und externe Dienste</h2><p>{p.cookiesText}</p><p className="placeholder">{p.cookiesDetails}</p><h2>5. Ihre Rechte</h2><p className="placeholder">{p.rights}</p><h2>6. Aktualität</h2><p className="placeholder">{p.updated}</p></LegalLayout>}

