import Link from "next/link";
import { content, siteConfig } from "@/app/config";
import { Logo } from "./logo";
import { ArrowIcon } from "./arrow-icon";
export function Footer(){const n=content.navigation;return <footer><div className="container"><div className="footer__top"><Link href="/#start"><Logo/></Link><p>{content.footer.claimLine1}<br/>{content.footer.claimLine2}</p></div><div className="footer__links"><div><b>Navigation</b><Link href="/#leistungen">{n.services}</Link><Link href="/#projekte">{n.projects}</Link><Link href="/#ueber-uns">{n.about}</Link><Link href="/#kontakt">{n.contact}</Link></div><div><b>Rechtliches</b><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></div><div><b>Standort</b><span>{siteConfig.region}</span></div></div><div className="footer__bottom"><span>© {new Date().getFullYear()} {content.brand.name}</span><a href="#start">Nach oben<ArrowIcon direction="up"/></a></div></div></footer>}
