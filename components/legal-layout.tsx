import Link from "next/link";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
export function LegalLayout({kicker,title,children}:{kicker:string;title:string;children:React.ReactNode}){return <><Navigation/><main className="legal"><header className="legal__hero"><div className="container"><p className="eyebrow"><span/> {kicker}</p><h1>{title}</h1><p>Transparenz und klare Informationen.</p></div></header><article className="container legal__content">{children}<aside><strong>Hinweis vor Veröffentlichung</strong><p>Die markierten Platzhalter müssen durch die tatsächlichen, rechtlich geprüften Angaben ersetzt werden.</p></aside><Link href="/" className="text-link">← Zurück zur Startseite</Link></article></main><Footer/></>}
