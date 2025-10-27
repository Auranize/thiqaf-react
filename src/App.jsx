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
            usdPrice: '$1,500 – $3,000',
            inrPrice: '₹1.2 لكح – ₹2.5 لكح',
            monthlyInr: '₹25 ألف – ₹40 ألف',
            successRate: '70–85%'
          },
          {
            clientType: 'تاجر التجزئة متوسط الحجم',
            deliverables: 'إضافة بوابة دفع (Tap Payments / PayFort)، الشحن، التحليلات، SEO، عربي/إنجليزي',
            usdPrice: '$4,000 – $7,000',
            inrPrice: '₹3.3 لكح – ₹5.8 لكح',
            monthlyInr: '₹60 ألف – ₹1 لكح',
            successRate: '65–80%'
          },
          {
            clientType: 'المؤسسات / سلاسل العلامات التجارية',
            deliverables: 'متعدد البائعين، لوحة تحكم، تكاملات API، تقارير مخصصة',
            usdPrice: '$10,000 – $20,000',
            inrPrice: '',
            monthlyInr: '',
            successRate: ''
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
        tagline: 'نبني المستقبل الرقمي'
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
            clientType: 'Small Business / Startup',
            deliverables: 'Deploy your template, basic customization, logo + domain + hosting setup',
            usdPrice: '$1,500 – $3,000',
            inrPrice: '',
            monthlyInr: '',
            successRate: ''
          },
          {
            clientType: 'Mid-size Retailer',
            deliverables: 'Add payment gateway (Tap Payments / PayFort), shipping, analytics, SEO, Arabic/English',
            usdPrice: '$4,000 – $7,000',
            inrPrice: '',
            monthlyInr: '',
            successRate: ''
          },
          {
            clientType: 'Enterprise / Brand Chain',
            deliverables: 'Multi-vendor, dashboard, API integrations, custom reporting',
            usdPrice: '$10,000 – $20,000',
            inrPrice: '',
            monthlyInr: '',
            successRate: ''
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
        tagline: 'Building the Digital Future'
      }
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-200/50' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <Sparkles className="w-9 h-9 text-indigo-600 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-indigo-400 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                ثقاف Thiqaf
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-slate-700 hover:text-indigo-600 transition-all duration-300 font-medium relative group">
                {t.nav.services}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="text-slate-700 hover:text-indigo-600 transition-all duration-300 font-medium relative group">
                {t.nav.about}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-slate-700 hover:text-indigo-600 transition-all duration-300 font-medium relative group">
                {t.nav.contact}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <button
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-slate-100 to-slate-200 hover:from-indigo-50 hover:to-purple-50 rounded-xl transition-all duration-300 group border border-slate-200 hover:border-indigo-300"
              >
                <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span className="text-sm font-semibold">{language === 'ar' ? 'English' : 'عربي'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-6 animate-in fade-in slide-in-from-top-5 duration-300">
              <div className="flex flex-col gap-4 bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
                <a href="#services" className="text-slate-700 hover:text-indigo-600 font-medium transition-colors">{t.nav.services}</a>
                <a href="#about" className="text-slate-700 hover:text-indigo-600 font-medium transition-colors">{t.nav.about}</a>
                <a href="#contact" className="text-slate-700 hover:text-indigo-600 font-medium transition-colors">{t.nav.contact}</a>
                <button
                  onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-slate-100 to-slate-200 rounded-xl w-fit"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-semibold">{language === 'ar' ? 'English' : 'عربي'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100/80 backdrop-blur-sm rounded-full mb-8 animate-in fade-in slide-in-from-top-10 duration-700">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-900">Digital Excellence</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-900 mb-6 leading-tight animate-in fade-in slide-in-from-bottom-10 duration-700">
              {t.hero.title}
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                {t.hero.titleGradient}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
              <button className="group px-8 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 text-lg font-semibold relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">{t.hero.cta}</span>
                <ArrowRight className={`w-5 h-5 relative group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
              </button>
              <button className="px-8 py-5 bg-white text-slate-900 rounded-2xl hover:bg-slate-50 transition-all duration-300 border-2 border-slate-200 hover:border-indigo-300 text-lg font-semibold hover:shadow-xl">
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
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {t.pricing.subtitle}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
              {t.pricing.plans.map((plan, index) => (
                <div
                  key={index}
                  className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 hover:border-indigo-300 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{plan.clientType}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{plan.deliverables}</p>
                  <div className="space-y-3">
                    {plan.usdPrice && (
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-indigo-600" />
                        <span className="text-slate-700 font-medium">{`${t.pricing.usdPriceLabel || 'Price (USD)'}: ${plan.usdPrice}`}</span>
                      </div>
                    )}
                    {plan.inrPrice && (
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-indigo-600" />
                        <span className="text-slate-700 font-medium">{`${t.pricing.inrPriceLabel || 'Price (INR)'}: ${plan.inrPrice}`}</span>
                      </div>
                    )}
                    {plan.monthlyInr && (
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-indigo-600" />
                        <span className="text-slate-700 font-medium">{`${t.pricing.monthlyInrLabel || 'Monthly (INR)'}: ${plan.monthlyInr}`}</span>
                      </div>
                    )}
                    {plan.successRate && (
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-indigo-600" />
                        <span className="text-slate-700 font-medium">{`${t.pricing.successRateLabel || 'Success Rate'}: ${plan.successRate}`}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
              {t.services.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* E-commerce Card */}
            <div className="group relative bg-gradient-to-br from-white to-slate-50 p-10 rounded-3xl border border-slate-200 hover:border-indigo-300 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-indigo-500/50">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-5">
                  {t.services.ecommerce.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {t.services.ecommerce.desc}
                </p>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="group relative bg-gradient-to-br from-white to-slate-50 p-10 rounded-3xl border border-slate-200 hover:border-purple-300 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-purple-500/50">
                  <Share2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-5">
                  {t.services.social.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {t.services.social.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.services.features.map((feature, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm p-7 rounded-2xl flex items-start gap-4 border border-slate-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-slate-700 font-medium leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-95"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t.cta.title}
          </h2>
          <p className="text-xl sm:text-2xl text-indigo-100 mb-12 leading-relaxed">
            {t.cta.subtitle}
          </p>
          <button className="group px-12 py-6 bg-white text-slate-900 rounded-2xl hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 text-lg font-bold inline-flex items-center gap-3 shadow-2xl shadow-slate-900/30">
            {t.cta.button}
            <ArrowRight className={`w-6 h-6 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-start">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                <Sparkles className="w-8 h-8 text-indigo-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  ثقاف Thiqaf
                </span>
              </div>
              <p className="text-slate-400">{t.footer.tagline}</p>
            </div>
            <div className="text-slate-400 text-center md:text-end">
              <p className="mb-1">© 2025 Thiqaf Agency</p>
              <p>{t.footer.rights}</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}