import { WHATSAPP_LINK } from "@/lib/constants";

const Footer = () => (
  <footer className="py-10 bg-[hsl(220,30%,15%)] border-t border-border">
    <div className="container mx-auto px-4 text-center">
      <p className="font-display text-3xl font-bold text-white mb-2">
        Pratibha<span className="text-accent">.</span>
      </p>
      <p className="text-sm text-white/60 font-body mb-4">Career Guidance · Life Coaching · Soft Skills</p>
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline font-body">
        Chat on WhatsApp →
      </a>
      <p className="text-xs text-white/40 mt-6 font-body">© {new Date().getFullYear()} Pratibha. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
