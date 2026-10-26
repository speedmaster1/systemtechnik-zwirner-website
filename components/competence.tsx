"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { content } from "@/app/config";
export function Competence(){const ref=useRef<HTMLElement>(null);const {scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});const x1=useTransform(scrollYProgress,[0,1],["-4%","4%"]),x2=useTransform(scrollYProgress,[0,1],["4%","-4%"]),c=content.competence;return <section ref={ref} className="competence"><div className="container"><p className="eyebrow"><span/> {c.eyebrow}</p><h2>{c.statement} <em>{c.highlight}</em></h2></div><div className="word-flow" aria-label={`${c.wordsLine1}, ${c.wordsLine2}`}><motion.p style={{x:x1}}>{c.wordsLine1}</motion.p><motion.p className="outline" style={{x:x2}}>{c.wordsLine2}</motion.p></div></section>}
