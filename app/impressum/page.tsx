import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";
import site from "@/content/site.json";
export const metadata:Metadata={title:"Impressum | Systemtechnik Zwirner",description:"Impressum von Systemtechnik Zwirner.",alternates:{canonical:"/impressum"}};
// WICHTIG: Sämtliche Platzhalter vor Veröffentlichung durch rechtlich geprüfte Angaben ersetzen.
export default function Impressum(){const i=site.imprint as Partial<Record<string,string>>;return <LegalLayout kicker="RECHTLICHES" title="Impressum"><h2>Angaben gemäß § 5 DDG</h2><p className="placeholder">{i.companyName}<br/>{i.ownerName}<br/>{i.street}<br/>{i.city}<br/>{i.country}</p><h2>Kontakt</h2><p className="placeholder">Telefon: {i.phone}<br/>E-Mail: {i.email}</p><h2>Umsatzsteuer-ID</h2><p className="placeholder">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz, sofern vorhanden:<br/>{i.vatId}</p><h2>Weitere Angaben</h2><p className="placeholder">{i.additionalInfo}</p><h2>Verantwortlich für den Inhalt</h2><p className="placeholder">{i.contentResponsible}<br/>{i.responsibleAddress}</p></LegalLayout>}

