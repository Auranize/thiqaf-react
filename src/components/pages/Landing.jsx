import React, { useState, useEffect } from 'react';
import { content } from "../content/content";

import Navbar from "../navigation/Navbar";
import Hero from "../Hero/Hero";
import Pricing from "../Pricing/Pricing";
import Services from "../Services/Services";
import CTASection from "../CTA/CTASection";
import Footer from "../Footer/Footer";

export default function Landing() {
  const [language, setLanguage] = useState("ar");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = content[language];
  const isRTL = language === "ar";

  const handleStartProject = () => {
    window.location.href = "https://wa.me/+34610043975";
  };

  return (
    <div className={isRTL ? "rtl" : "ltr"} dir={isRTL ? "rtl" : "ltr"}>

      <Navbar
        t={t}
        language={language}
        setLanguage={setLanguage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrolled={scrolled}
      />

      <Hero t={t} isRTL={isRTL} handleStartProject={handleStartProject} />

      <Pricing t={t} isRTL={isRTL} />

      <Services t={t} />

      <CTASection t={t} isRTL={isRTL} handleStartProject={handleStartProject} />

      <Footer t={t} />

    </div>
  );
}
