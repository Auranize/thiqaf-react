import { Sparkles } from "lucide-react";

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="flex flex-col md:flex-row justify-between items-center">

        <div className="brand">
          <div className="logo">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span>ثقاف Thiqaf</span>
          <p>{t.footer.tagline}</p>
        </div>

        <div className="legal">
          <p>© 2025 Thiqaf Agency</p>
          <p>{t.footer.rights}</p>
          <p>{t.footer.phone}</p>
        </div>

      </div>
    </footer>
  );
}
