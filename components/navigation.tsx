"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "./logo";
import { content } from "@/app/config";
export function Navigation() {
  const n=content.navigation;
  const links = [[n.start,"/#start"],[n.services,"/#leistungen"],[n.projects,"/#projekte"],[n.about,"/#ueber-uns"],[n.contact,"/#kontakt"]];
  const [scrolled,setScrolled]=useState(false), [open,setOpen]=useState(false);
  useEffect(()=>{ const fn=()=>setScrolled(scrollY>20); fn(); addEventListener("scroll",fn,{passive:true}); return()=>removeEventListener("scroll",fn);},[]);
  useEffect(()=>{ document.body.style.overflow=open?"hidden":""; return()=>{document.body.style.overflow=""};},[open]);
  return <header className={`nav ${scrolled||open?"nav--solid":""}`}><div className="nav__inner"><Link href="/#start" aria-label={`${content.brand.name} – Start`}><Logo /></Link><nav className="nav__desktop" aria-label="Hauptnavigation">{links.map(([label,h])=><Link key={label} href={h}>{label}</Link>)}</nav><Link href="/#kontakt" className="button button--small nav__cta">{n.cta} <span>↗</span></Link><button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label={open?"Menü schließen":"Menü öffnen"}><span className={open?"open":""}/><span className={open?"open":""}/></button></div><AnimatePresence>{open&&<motion.div className="mobile-menu" initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}}><nav>{links.map(([label,h],i)=><motion.div key={label} initial={{opacity:0,x:-16}} animate={{opacity:1,x:0}} transition={{delay:i*.04}}><Link href={h} onClick={()=>setOpen(false)}><small>0{i+1}</small>{label}</Link></motion.div>)}</nav><p>Präzision in jedem System.</p></motion.div>}</AnimatePresence></header>;
}
