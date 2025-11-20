import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero({ t, isRTL, handleStartProject }) {
  return (
    <section className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-5xl mx-auto">
        
        <div className="inline-flex items-center gap-3 px-6 py-3 badge">
          <Sparkles className="w-5 h-5 text-emerald-700" />
          <span>{t.hero.badge}</span>
        </div>

        <h1 className="hero-title">
          <span className="block">{t.hero.title}</span>
          <span className="gradient-title">{t.hero.titleGradient}</span>
        </h1>

        <p className="hero-subtitle">{t.hero.subtitle}</p>

        <div className="cta-buttons">
          <button onClick={handleStartProject} className="primary-cta">
            {t.hero.cta}
            <ArrowRight className={`arrow ${isRTL ? "rtl" : ""}`} />
          </button>

          <button className="secondary-cta">
            {t.hero.secondary}
          </button>
        </div>
      </div>
    </section>
  );
}
