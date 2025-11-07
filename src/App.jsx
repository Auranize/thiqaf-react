import React, { useState, useEffect } from 'react';
import { Globe, ShoppingCart, Share2, Sparkles, ArrowRight, Menu, X, Check } from 'lucide-react';

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
    // Replace with your actual WordPress site URL
    window.location.href = 'https://wa.me//+34610043975';
  };

  const content = {
    ar: {
      nav: {
        services: 'خدماتنا',
        about: 'من نحن',
        contact: 'تواصل معنا'
      },
      hero: {
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
    <div className={`min-h-screen bg-stone-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Subtle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-7 h-7 text-emerald-700" />
              <span className="text-xl font-semibold text-slate-800">
                ثقاف Thiqaf
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium">
                {t.nav.services}
              </a>
              <a href="#about" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium">
                {t.nav.about}
              </a>
              <a href="#contact" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium">
                {t.nav.contact}
              </a>
              <button
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                className="flex items-center gap-2 px-4 py-2 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language === 'ar' ? 'English' : 'عربي'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-6">
              <div className="flex flex-col gap-4 bg-white rounded-xl p-6 shadow-lg">
                <a href="#services" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors">{t.nav.services}</a>
                <a href="#about" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors">{t.nav.about}</a>
                <a href="#contact" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors">{t.nav.contact}</a>
                <button
                  onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                  className="flex items-center gap-2 px-4 py-2 bg-stone-100 rounded-lg w-fit"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{language === 'ar' ? 'English' : 'عربي'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span className="text-sm font-medium text-emerald-800">Digital Excellence</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              {t.hero.title}
              <br />
              <span className="text-emerald-700">
                {t.hero.titleGradient}
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleStartProject}
                className="px-8 py-4 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 text-base font-medium"
              >
                <span>{t.hero.cta}</span>
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 rounded-lg hover:bg-stone-50 transition-colors border border-stone-200 text-base font-medium">
                {t.hero.secondary}
              </button>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mt-24 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                {t.pricing.title}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {t.pricing.subtitle}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.pricing.plans.map((plan, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-stone-200 transition-all duration-300 hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{plan.clientType}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{plan.deliverables}</p>
                  <div className="pt-4 border-t border-stone-200">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-emerald-700">{plan.usdPrice}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              {t.services.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* E-commerce Card */}
            <div className="bg-stone-50 p-10 rounded-2xl border border-stone-200">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <ShoppingCart className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {t.services.ecommerce.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t.services.ecommerce.desc}
              </p>
            </div>

            {/* Social Media Card */}
            <div className="bg-stone-50 p-10 rounded-2xl border border-stone-200">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Share2 className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {t.services.social.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t.services.social.desc}
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.services.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl flex items-start gap-3 border border-stone-200">
                <div className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-emerald-700" />
                </div>
                <span className="text-slate-700 text-sm font-medium leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 lg:px-8 bg-emerald-700">
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t.cta.title}
          </h2>
          <p className="text-lg text-emerald-50 mb-10">
            {t.cta.subtitle}
          </p>
          <button 
            onClick={handleStartProject}
            className="px-10 py-4 bg-white text-emerald-700 rounded-lg hover:bg-stone-50 transition-colors text-base font-medium inline-flex items-center gap-2"
          >
            {t.cta.button}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-900 text-white py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-start">
              <div className="flex items-center gap-2.5 justify-center md:justify-start mb-2">
                <Sparkles className="w-6 h-6 text-emerald-400" />
                <span className="text-lg font-semibold text-white">
                  ثقاف Thiqaf
                </span>
              </div>
              <p className="text-slate-400 text-sm">{t.footer.tagline}</p>
            </div>
            <div className="text-slate-400 text-sm text-center md:text-end">
              <p className="mb-1">© 2025 Thiqaf Agency</p>
              <p>{t.footer.rights}</p>
              <p className="mt-2">{t.footer.phone}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}