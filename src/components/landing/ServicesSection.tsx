import { motion } from "framer-motion";
import { Compass, Users, MessageCircle, BookOpen, Heart } from "lucide-react";

const services = [
  { icon: Compass, title: "Career Guidance", desc: "Find the right career path based on your strengths, interests, and personality — not someone else's expectations." },
  { icon: Heart, title: "Life Coaching", desc: "Build the mindset, discipline, and emotional strength you need to succeed in any path you choose." },
  { icon: BookOpen, title: "Soft Skills Coaching", desc: "Communication, confidence, leadership — the skills that textbooks don't teach but employers love." },
  { icon: MessageCircle, title: "1:1 Sessions", desc: "Personalised, private sessions tailored completely to your situation. Your goals, your pace." },
  { icon: Users, title: "Group Sessions", desc: "Learn alongside peers in small groups. Affordable, engaging, and powerful." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">What I Offer</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2">Services Built Around You</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto font-body">Every student is different. That's why my approach is always personalised.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-green-soft flex items-center justify-center mb-4">
              <s.icon className="text-accent" size={22} />
            </div>
            <h3 className="font-display text-lg text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
