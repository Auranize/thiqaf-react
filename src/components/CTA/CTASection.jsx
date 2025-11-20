import { ArrowRight } from "lucide-react";

export default function CTASection({ t, isRTL, handleStartProject }) {
  return (
    <section className="cta-section">
      <h2>{t.cta.title}</h2>
      <p>{t.cta.subtitle}</p>

      <button onClick={handleStartProject} className="cta-main-btn">
        {t.cta.button}
        <ArrowRight className={`arrow ${isRTL ? "rtl" : ""}`} />
      </button>
    </section>
  );
}
