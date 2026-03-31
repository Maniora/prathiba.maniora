import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Ananya, 19", role: "Engineering Student", text: "I was so confused about whether to continue engineering or switch. Pratibha helped me see my options clearly. Now I actually look forward to my career." },
  { name: "Ravi's Mother", role: "Parent", text: "As a parent, I was worried about my son's future. Pratibha spoke to both of us and made the whole process stress-free. I'm grateful." },
  { name: "Karan, 22", role: "Recent Graduate", text: "I had zero clarity after graduation. After just 2 sessions, I had a proper plan. Pratibha doesn't just advise — she listens." },
  { name: "Sneha, 17", role: "Class 12 Student", text: "Everyone was telling me different things. Pratibha was the first person who asked me what I wanted. That changed everything." },
];

const TestimonialsSection = () => (
  <section className="py-20" style={{ background: "var(--gradient-section)" }}>
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Real Stories</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2">What Students & Parents Say</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background border border-border rounded-xl p-6"
          >
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground font-body mb-4">"{t.text}"</p>
            <div>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
