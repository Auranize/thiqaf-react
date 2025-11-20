import { Globe, Menu, X, Sparkles } from "lucide-react";

export default function Navbar({ t, language, setLanguage, mobileMenuOpen, setMobileMenuOpen, scrolled }) {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 
      ${scrolled ? 'bg-white/95 backdrop-blur-2xl shadow-lg border-b border-amber-100/50' : 'bg-transparent'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-amber-500 rounded-xl flex items-center justify-center shadow-md">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900 tracking-tight hidden sm:block">ثقاف Thiqaf</span>
            <span className="text-xl font-bold text-slate-900 tracking-tight sm:hidden">Thiqaf</span>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="nav-link">{t.nav.services}</a>
            <a href="#about" className="nav-link">{t.nav.about}</a>
            <a href="#contact" className="nav-link">{t.nav.contact}</a>

            <button
              onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
              className="lang-btn">
              <Globe className="w-4 h-4" />
              <span>{language === "ar" ? "English" : "عربي"}</span>
            </button>
          </div>

          {/* Mobile Btn */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>
    </nav>
  );
}
