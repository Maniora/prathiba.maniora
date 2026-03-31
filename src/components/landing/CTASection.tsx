import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const CTASection = () => (
  <section className="py-20 relative overflow-hidden">
    <div className="absolute inset-0 gradient-warm opacity-95" />
    <div className="container mx-auto px-4 relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <MessageCircle className="mx-auto mb-4 text-primary-foreground/80" size={40} />
        <h2 className="text-3xl md:text-4xl font-display text-primary-foreground mb-4">
          Your Future Deserves a Conversation
        </h2>
        <p className="text-primary-foreground/80 font-body text-lg max-w-xl mx-auto mb-8">
          One call can change everything. Let's talk about your career, your dreams, and how to make them real. No pressure. No judgement. Just clarity.
        </p>
        <Button
          size="xl"
          className="bg-background text-foreground hover:bg-background/90 rounded-full font-semibold text-lg shadow-elevated"
          asChild
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            Book Free Clarity Call <ArrowRight size={18} />
          </a>
        </Button>
        <p className="text-primary-foreground/60 text-sm mt-4 font-body">
          💬 Opens WhatsApp · Takes 30 seconds · Zero cost
        </p>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
