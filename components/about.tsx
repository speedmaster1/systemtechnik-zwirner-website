import { Reveal } from "./reveal";
import { content } from "@/app/config";
export function About(){const a=content.about;return <section id="ueber-uns" className="section about"><div className="container about__grid"><Reveal><p className="eyebrow"><span/> {a.eyebrow}</p><h2>{a.titleLine1}<br/><em>{a.titleLine2}<br/>{a.titleLine3}</em></h2></Reveal><Reveal className="about__copy" delay={.1}><p className="lead">{a.lead}</p><p>{a.text}</p><div className="principles">{a.principles.map((p,i)=><div key={p}><b>{String(i+1).padStart(2,"0")}</b><span>{p}</span></div>)}</div></Reveal></div></section>}
