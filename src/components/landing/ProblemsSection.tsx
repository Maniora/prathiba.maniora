import { motion } from "framer-motion";
import { HelpCircle, Compass, Smartphone, Target } from "lucide-react";

const problems = [
  { icon: HelpCircle, title: "Career Confusion", desc: '"Should I do engineering? MBA? Something else?" The options feel endless and overwhelming.' },
  { icon: Compass, title: "No Clear Direction", desc: "Everyone has an opinion. But nobody helps you figure out what YOU actually want." },
  { icon: Smartphone, title: "Too Many Distractions", desc: "Social media, peer pressure, overthinking — it's hard to focus when everything is pulling you away." },
  { icon: Target, title: "Fear of Wrong Choice", desc: '"What if I pick the wrong career?" That fear keeps you stuck and doing nothing.' },
];

const ProblemsSection = () => (
  <section id="problems" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Sound familiar?</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2">You're Not Alone in Feeling Lost</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto font-body">
          Most students go through this. The problem isn't you — it's the lack of the right guidance at the right time.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-card transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-orange-light flex items-center justify-center mb-4">
              <p.icon className="text-primary" size={22} />
            </div>
            <h3 className="font-display text-lg text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground font-body">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemsSection;
