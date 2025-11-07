import React, { useState, useEffect } from 'react';
import { Globe, ShoppingCart, Share2, Sparkles, ArrowRight, Menu, X, Check, DollarSign } from 'lucide-react';

export default function Landing() {
  const [language, setLanguage] = useState('ar');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartProject = () => {
    window.location.href = 'https://wa.me/+34610043975';
  };

  const content = {
    ar: {
      nav: {
        services: 'خدماتنا',
        about: 'من نحن',
        contact: 'تواصل معنا'
      },
      hero: {
        badge: 'التميز الرقمي',
        title: 'نحول أفكارك الرقمية',
        titleGradient: 'إلى واقع ملموس',
        subtitle: 'وكالة ثقاف المتخصصة في التجارة الإلكترونية وإدارة وسائل التواصل الاجتماعي',
        cta: 'ابدأ مشروعك الآن',
        secondary: 'استكشف خدماتنا'
      },
      services: {
        title: 'خدماتنا',
        subtitle: 'حلول شاملة ومبتكرة لنمو أعمالك الرقمية',
        ecommerce: {
          title: 'التجارة الإلكترونية',
          desc: 'نبني متاجر إلكترونية احترافية تزيد من مبيعاتك وتوفر تجربة تسوق استثنائية لعملائك'
        },
        social: {
          title: 'إدارة وسائل التواصل',
          desc: 'نصمم ونطبق استراتيجيات محتوى مبتكرة تبني علاقة قوية مع جمهورك وتزيد من تفاعلهم'
        },
        features: [
          'تصميم متجاوب لجميع الأجهزة',
          'تحسين محركات البحث SEO',
          'تحليلات ومقاييس الأداء',
          'دعم فني متواصل 24/7'
        ]
      },
      pricing: {
        title: 'خطط التسعير',
        subtitle: 'حلول مخصصة تناسب احتياجات عملك',
        plans: [
          {
            clientType: 'الأعمال الصغيرة / الشركات الناشئة',
            deliverables: 'نشر القالب، التخصيص الأساسي، الشعار + الدومين + إعداد الاستضافة',
            usdPrice: '$1,500 – $3,000'
          },
          {
            clientType: 'تاجر التجزئة متوسط الحجم',
            deliverables: 'إضافة بوابة دفع (Tap Payments / PayFort)، الشحن، التحليلات، SEO، عربي/إنجليزي',
            usdPrice: '$4,000 – $7,000'
          },
          {
            clientType: 'المؤسسات / سلاسل العلامات التجارية',
            deliverables: 'متعدد البائعين، لوحة تحكم، تكاملات API، تقارير مخصصة',
            usdPrice: '$10,000 – $20,000'
          }
        ]
      },
      cta: {
        title: 'جاهز لتنمية أعمالك؟',
        subtitle: 'دعنا نساعدك في بناء حضور رقمي قوي ومؤثر',
        button: 'ابدأ الآن'
      },
      footer: {
        rights: 'جميع الحقوق محفوظة',
        tagline: 'نبني المستقبل الرقمي',
        phone: 'تواصل معنا على +34 610 04 39 75'
      }
    },
    en: {
      nav: {
        services: 'Services',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        badge: 'Digital Excellence',
        title: 'Transform Your Digital Vision',
        titleGradient: 'Into Reality',
        subtitle: 'Thiqaf Agency - Specialized in E-commerce & Social Media Management',
        cta: 'Start Your Project',
        secondary: 'Explore Services'
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive and innovative solutions for your digital growth',
        ecommerce: {
          title: 'E-Commerce Solutions',
          desc: 'We build professional online stores that boost your sales and provide exceptional shopping experiences'
        },
        social: {
          title: 'Social Media Management',
          desc: 'We design and implement innovative content strategies that build strong relationships with your audience'
        },
        features: [
          'Responsive design for all devices',
          'SEO optimization',
          'Analytics & performance metrics',
          '24/7 technical support'
        ]
      },
      pricing: {
        title: 'Pricing Plans',
        subtitle: 'Tailored solutions to meet your business needs',
        plans: [
          {
            clientType: 'Starter E-Commerce',
            deliverables: 'Custom E-commerce Website Design, Domain & Hosting Setup, Product Upload (up to 150 products), Website Publishing & Launch, Free Maintenance (1 month), FREE QR Code linking to store website (print-ready)',
            usdPrice: '$650'
          },
          {
            clientType: 'Growth E-Commerce',
            deliverables: 'Everything in Starter Plan PLUS, Advanced UI/UX Design (conversion-focused layout), Basic SEO Setup (meta tags, keywords, indexing), Free Maintenance (2 months), SSL Certificate (secure checkout), FREE QR Code linking to store website (print-ready)',
            usdPrice: '$780'
          },
          {
            clientType: 'Social Media Management',
            deliverables: 'Full Social Media Account Management (Instagram, Facebook, TikTok, etc.), Content Moderation & Community Engagement, 20 Custom Post Designs per Month (professionally branded), Captions & Hashtags Creation, Monthly Performance & Growth Report, FREE QR Code linking to social profiles or website (print-ready)',
            usdPrice: '$10,000 – $20,000'
          }
        ]
      },
      cta: {
        title: 'Ready to Grow Your Business?',
        subtitle: 'Let us help you build a strong and impactful digital presence',
        button: 'Get Started'
      },
      footer: {
        rights: 'All rights reserved',
        tagline: 'Building the Digital Future',
        phone: 'Contact us at +34 610 04 39 75'
      }
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-amber-50/80 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Rich Gradient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-amber-50/50 to-stone-100/30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-amber-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-amber-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-white/95 backdrop-blur-2xl shadow-lg border-b border-amber-100/50' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-amber-500 rounded-xl flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight hidden sm:block">
                ثقاف Thiqaf
              </span>
              <span className="text-xl font-bold text-slate-900 tracking-tight sm:hidden">
                Thiqaf
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-slate-700 hover:text-emerald-700 transition-all duration-300 font-semibold py-2 border-b-2 border-transparent hover:border-emerald-600 text-base relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-600 after:transition-all after:duration-300 hover:after:w-full">
                {t.nav.services}
              </a>
              <a href="#about" className="text-slate-700 hover:text-emerald-700 transition-all duration-300 font-semibold py-2 border-b-2 border-transparent hover:border-emerald-600 text-base relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-600 after:transition-all after:duration-300 hover:after:w-full">
                {t.nav.about}
              </a>
              <a href="#contact" className="text-slate-700 hover:text-emerald-700 transition-all duration-300 font-semibold py-2 border-b-2 border-transparent hover:border-emerald-600 text-base relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-600 after:transition-all after:duration-300 hover:after:w-full">
                {t.nav.contact}
              </a>
              <button
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-50/80 to-emerald-50/80 hover:from-amber-100/80 hover:to-emerald-100/80 rounded-xl transition-all duration-500 border border-amber-200/50 shadow-sm hover:shadow-md text-sm font-semibold"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'ar' ? 'English' : 'عربي'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-amber-100/50 transition-all duration-300 shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
            </button>
          </div>

          {/* Mobile Menu - Improved Slide-in */}
          {mobileMenuOpen && (
            <div className="md:hidden overflow-hidden transition-all duration-500 ease-in-out">
              <div className="bg-white/95 backdrop-blur-2xl rounded-2xl p-6 shadow-xl border border-amber-100/50 mt-4 mx-2 animate-in slide-in-from-top-4 duration-300">
                <div className="flex flex-col gap-4">
                  <a href="#services" className="text-slate-700 hover:text-emerald-700 font-semibold transition-colors py-2 text-base border-b border-amber-100/50 last:border-b-0">{t.nav.services}</a>
                  <a href="#about" className="text-slate-700 hover:text-emerald-700 font-semibold transition-colors py-2 text-base border-b border-amber-100/50 last:border-b-0">{t.nav.about}</a>
                  <a href="#contact" className="text-slate-700 hover:text-emerald-700 font-semibold transition-colors py-2 text-base border-b border-amber-100/50 last:border-b-0">{t.nav.contact}</a>
                  <button
                    onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                    className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-50/80 to-emerald-50/80 hover:from-amber-100/80 hover:to-emerald-100/80 rounded-xl w-full text-left transition-all duration-300 border border-amber-200/50 shadow-sm hover:shadow-md font-semibold"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{language === 'ar' ? 'English' : 'عربي'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Enhanced with more whitespace and premium typography */}
      <section className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-50/90 to-emerald-50/90 rounded-full mb-12 backdrop-blur-md border border-amber-200/60 shadow-lg">
              <Sparkles className="w-5 h-5 text-emerald-700" />
              <span className="text-base font-semibold text-slate-800 tracking-wide">{t.hero.badge}</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
              <span className="block text-amber-900/90">{t.hero.title}</span>
              <span className="block bg-gradient-to-r from-emerald-600 via-emerald-700 to-amber-500 bg-clip-text text-transparent">
                {t.hero.titleGradient}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 mb-20 leading-relaxed max-w-4xl mx-auto opacity-95 font-light">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col xs:flex-row gap-6 justify-center items-center">
              <button 
                onClick={handleStartProject}
                className="group relative px-12 py-6 bg-gradient-to-r from-emerald-600 to-amber-500 text-white rounded-3xl hover:from-emerald-700 hover:to-amber-600 transition-all duration-500 flex items-center justify-center gap-3 text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              >
                <span>{t.hero.cta}</span>
                <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-2 ${isRTL ? 'rotate-180 group-hover:-translate-x-2' : ''}`} />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </button>
              <button className="px-12 py-6 bg-white/90 text-slate-700 rounded-3xl hover:bg-white transition-all duration-300 border-2 border-amber-200/60 text-lg font-bold backdrop-blur-md shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                {t.hero.secondary}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Premium Cards with better spacing */}
      <section id="pricing" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/70 to-amber-50/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              {t.pricing.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t.pricing.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.pricing.plans.map((plan, index) => (
              <div
                key={index}
                className="group relative bg-white/90 p-8 lg:p-10 rounded-3xl border border-amber-100/60 transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 hover:border-emerald-200/60 backdrop-blur-md overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-amber-400/20 rounded-bl-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative flex items-start justify-between mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 pr-4">{plan.clientType}</h3>
                  <DollarSign className="w-7 h-7 text-amber-500 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                </div>
                <ul className="space-y-4 mb-10 text-base text-slate-600 leading-relaxed">
                  {plan.deliverables.split(isRTL ? '، ' : ', ').map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-8 border-t border-amber-200/50">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent tracking-tight">
                      {plan.usdPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced Cards */}
      <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              {t.services.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
            {/* E-commerce Card */}
            <div className="group bg-white/90 p-8 lg:p-12 rounded-3xl border border-amber-100/60 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-200/60 backdrop-blur-md overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-amber-400/10 rounded-bl-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-amber-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-lg">
                <ShoppingCart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6 relative z-10">
                {t.services.ecommerce.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed relative z-10">
                {t.services.ecommerce.desc}
              </p>
            </div>

            {/* Social Media Card */}
            <div className="group bg-white/90 p-8 lg:p-12 rounded-3xl border border-amber-100/60 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-200/60 backdrop-blur-md overflow-hidden relative">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-amber-400/10 rounded-br-full translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-amber-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-lg">
                <Share2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6 relative z-10">
                {t.services.social.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed relative z-10">
                {t.services.social.desc}
              </p>
            </div>
          </div>

          {/* Features Grid - Premium Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.features.map((feature, index) => (
              <div key={index} className="group bg-white/90 p-6 lg:p-8 rounded-2xl flex items-center gap-4 border border-amber-100/60 transition-all duration-500 hover:shadow-lg hover:bg-white hover:border-emerald-200/60 backdrop-blur-md hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <span className="text-slate-700 font-semibold leading-relaxed group-hover:text-emerald-700 transition-colors duration-300 text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Rich Gradient */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-800 via-emerald-900 to-amber-800">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            {t.cta.title}
          </h2>
          <p className="text-xl sm:text-2xl text-amber-100/90 mb-12 leading-relaxed font-light">
            {t.cta.subtitle}
          </p>
          <button 
            onClick={handleStartProject}
            className="group relative px-16 py-6 bg-white text-emerald-900 rounded-3xl hover:bg-amber-50 transition-all duration-500 text-lg font-bold inline-flex items-center gap-3 shadow-2xl hover:shadow-white/30 hover:-translate-y-1 overflow-hidden"
          >
            {t.cta.button}
            <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-2 ${isRTL ? 'rotate-180 group-hover:-translate-x-2' : ''}`} />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-200/50 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
          </button>
        </div>
      </section>

      {/* Footer - Polished, No Emojis */}
      <footer className="relative bg-gradient-to-r from-slate-900 to-emerald-900/50 text-white py-20 px-4 sm:px-6 lg:px-8 backdrop-blur-md border-t border-amber-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-amber-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">
                  ثقاف Thiqaf
                </span>
              </div>
              <p className="text-amber-200/80 text-base font-light">{t.footer.tagline}</p>
            </div>
            <div className="text-amber-200/70 text-base text-center md:text-right space-y-3">
              <p className="font-semibold text-white">© 2025 Thiqaf Agency</p>
              <p className="font-light">{t.footer.rights}</p>
              <p className="flex items-center justify-center md:justify-end gap-2 font-medium">
                {t.footer.phone}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}