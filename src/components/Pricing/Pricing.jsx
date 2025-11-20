import PricingCard from "./PricingCard";

export default function Pricing({ t, isRTL }) {
  return (
    <section id="pricing" className="pricing-section">
      <div className="section-header">
        <h2>{t.pricing.title}</h2>
        <p>{t.pricing.subtitle}</p>
      </div>

      <div className="grid-layout">
        {t.pricing.plans.map((plan, i) => (
          <PricingCard key={i} plan={plan} isRTL={isRTL} />
        ))}
      </div>
    </section>
  );
}
