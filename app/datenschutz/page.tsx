import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";
import site from "@/content/site.json";
export const metadata:Metadata={title:"Datenschutz | Systemtechnik Zwirner",description:"Datenschutzhinweise von Systemtechnik Zwirner.",alternates:{canonical:"/datenschutz"}};
export default function Datenschutz(){const p=site.privacy as Partial<Record<string,string>>;return <LegalLayout kicker="DATENSCHUTZ" title="Datenschutzerklärung" showNotice={false}><h2>Verantwortliche Stelle</h2><p className="placeholder" style={{whiteSpace:"pre-line"}}>{p.controller}</p></LegalLayout>}
