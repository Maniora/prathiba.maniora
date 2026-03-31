import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Problems", href: "#problems" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-display text-2xl text-foreground">
          Pratibha<span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="default" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Book Free Call</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="default" className="w-full" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Book Free Call</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
