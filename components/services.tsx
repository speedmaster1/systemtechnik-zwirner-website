import { content, services } from "@/app/config";
import { Reveal } from "./reveal";
export function Services() {
  const s = content.servicesSection;
  return (
    <section id="leistungen" className="section services">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow"><span /> {s.eyebrow}</p>
              <h2>{s.titleLine1}<br />{s.titleLine2}</h2>
            </div>
            <p>{s.intro}</p>
          </div>
        </Reveal>
        <div className="service-grid">
          {services.map((item, i) => (
            <Reveal key={item.number} delay={i % 3 * .08}>
              <article className="service-card">
                <div className="service-card__top"><span>{item.number}</span><i aria-hidden="true">↗</i></div>
                <div className="service-card__mark" aria-hidden="true"><b /><b /><b /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.details?.length > 0 && (
                  <details className="service-details">
                    <summary>{s.detailsLabel}<span className="sr-only">: {item.title}</span></summary>
                    <ul>{item.details.map((detail, index) => <li key={index}>{detail}</li>)}</ul>
                  </details>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
