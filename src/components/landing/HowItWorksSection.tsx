import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Rocket } from "lucide-react";

const steps = [
  { icon: MessageSquare, step: "01", title: "Book a Free Call", desc: "Send a WhatsApp message. We'll set up a quick, free call to understand where you are right now." },
  { icon: Lightbulb, step: "02", title: "Get Your Clarity Plan", desc: "Together, we'll explore your strengths, interests, and create a roadmap that makes sense for you." },
  { icon: Rocket, step: "03", title: "Start Your Journey", desc: "With a clear plan and ongoing support, you'll move forward with confidence — not confusion." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20" style={{ background: "var(--gradient-section)" }}>
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Simple Process</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2">How It Works</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto font-body">Getting started is easier than you think. Just 3 simple steps.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full gradient-warm flex items-center justify-center mx-auto mb-4 shadow-soft">
              <s.icon className="text-primary-foreground" size={28} />
            </div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Step {s.step}</span>
            <h3 className="font-display text-xl text-foreground mt-2 mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
