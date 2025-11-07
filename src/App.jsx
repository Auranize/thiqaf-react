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
    // Fixed WhatsApp URL
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
    <div className={`min-h-screen bg-stone-50/50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Subtle Gradient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/20 via-transparent to-stone-50/20"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-100/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-100/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-stone-100/50' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                ثقاف Thiqaf
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              <a href="#services" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium py-2 border-b-2 border-transparent hover:border-emerald-700">
                {t.nav.services}
              </a>
              <a href="#about" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium py-2 border-b-2 border-transparent hover:border-emerald-700">
                {t.nav.about}
              </a>
              <a href="#contact" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium py-2 border-b-2 border-transparent hover:border-emerald-700">
                {t.nav.contact}
              </a>
              <button
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                className="flex items-center gap-2 px-4 py-2 bg-stone-100/50 hover:bg-stone-200/50 rounded-xl transition-all duration-300 border border-stone-200/50"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language === 'ar' ? 'English' : 'عربي'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-stone-100/50 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-6">
              <div className="flex flex-col gap-4 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-stone-100/50">
                <a href="#services" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors py-2">{t.nav.services}</a>
                <a href="#about" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors py-2">{t.nav.about}</a>
                <a href="#contact" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors py-2">{t.nav.contact}</a>
                <button
                  onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                  className="flex items-center gap-2 px-4 py-2 bg-stone-100/50 hover:bg-stone-200/50 rounded-xl w-fit self-start"
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
      <section className="relative pt-40 pb-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50/80 rounded-full mb-10 backdrop-blur-sm border border-emerald-100/50">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span className="text-sm font-semibold text-emerald-800 tracking-wide">{t.hero.badge}</span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-none tracking-tight">
              <span className="block">{t.hero.title}</span>
              <span className="block bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                {t.hero.titleGradient}
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-16 leading-relaxed max-w-3xl mx-auto opacity-90">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleStartProject}
                className="group px-10 py-5 bg-emerald-700 text-white rounded-2xl hover:bg-emerald-800 transition-all duration-300 flex items-center justify-center gap-3 text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>{t.hero.cta}</span>
                <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </button>
              <button className="px-10 py-5 bg-white/80 text-slate-700 rounded-2xl hover:bg-white transition-all duration-300 border border-stone-200 text-lg font-semibold backdrop-blur-sm">
                {t.hero.secondary}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-32 px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              {t.pricing.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.pricing.subtitle}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.pricing.plans.map((plan, index) => (
              <div
                key={index}
                className="group bg-white/80 p-8 rounded-3xl border border-stone-100/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-200/50 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">{plan.clientType}</h3>
                  <DollarSign className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />
                </div>
                <ul className="space-y-3 mb-8 text-sm text-slate-600">
                  {plan.deliverables.split(isRTL ? '، ' : ', ').map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-stone-200/50">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-emerald-700 tracking-tight">{plan.usdPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              {t.services.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* E-commerce Card */}
            <div className="group bg-white/80 p-10 rounded-3xl border border-stone-100/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                {t.services.ecommerce.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t.services.ecommerce.desc}
              </p>
            </div>

            {/* Social Media Card */}
            <div className="group bg-white/80 p-10 rounded-3xl border border-stone-100/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                {t.services.social.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t.services.social.desc}
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.features.map((feature, index) => (
              <div key={index} className="group bg-white/80 p-6 rounded-2xl flex items-center gap-4 border border-stone-100/50 transition-all duration-300 hover:shadow-md hover:bg-white backdrop-blur-sm">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-slate-700 font-semibold leading-relaxed group-hover:text-emerald-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            {t.cta.title}
          </h2>
          <p className="text-xl text-emerald-100 mb-12">
            {t.cta.subtitle}
          </p>
          <button 
            onClick={handleStartProject}
            className="group px-12 py-5 bg-white text-emerald-700 rounded-2xl hover:bg-stone-50 transition-all duration-300 text-lg font-semibold inline-flex items-center gap-3 shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5"
          >
            {t.cta.button}
            <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-900/95 text-white py-16 px-6 lg:px-8 backdrop-blur-sm border-t border-stone-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">
                  ثقاف Thiqaf
                </span>
              </div>
              <p className="text-slate-400 text-base">{t.footer.tagline}</p>
            </div>
            <div className="text-slate-400 text-base text-center md:text-right space-y-2">
              <p className="font-medium">© 2025 Thiqaf Agency</p>
              <p>{t.footer.rights}</p>
              <p className="flex items-center justify-center md:justify-end gap-2">
                <span>📱</span>
                {t.footer.phone}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}