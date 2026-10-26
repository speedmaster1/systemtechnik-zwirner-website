import siteContent from "@/content/site.json";

export const content = siteContent;
export const siteConfig = { ...siteContent.brand, url: "https://www.systemtechnik-zwirner.de" };
export const services = siteContent.services;
export const projects = siteContent.projects;
