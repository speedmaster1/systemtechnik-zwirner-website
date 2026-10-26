import Image from "next/image";
import { content } from "@/app/config";
export function Logo({ className = "" }: { className?: string }) { return <Image src={content.brand.logo} alt={content.brand.name} width={1536} height={922} priority className={`logo ${className}`} />; }
