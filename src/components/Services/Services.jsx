import ServiceCard from "./ServiceCard";
import FeaturesGrid from "./FeaturesGrid";

export default function Services({ t }) {
  return (
    <section id="services" className="services-section">
      <div className="section-header">
        <h2>{t.services.title}</h2>
        <p>{t.services.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <ServiceCard icon="shop" title={t.services.ecommerce.title} desc={t.services.ecommerce.desc} />
        <ServiceCard icon="share" title={t.services.social.title} desc={t.services.social.desc} />
      </div>

      <FeaturesGrid features={t.services.features} />
    </section>
  );
}
