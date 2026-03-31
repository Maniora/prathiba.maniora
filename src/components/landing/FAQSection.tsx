import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Is the clarity call really free?", a: "Yes, 100%. No hidden charges. It's a simple conversation to understand your situation and see how I can help." },
  { q: "Who is this for?", a: "Students between 15–25 who feel confused about their career, and parents who want to support their child's journey." },
  { q: "What happens during a clarity call?", a: "We talk about where you are right now, what's confusing you, and I share my honest perspective. If we're a good fit, we discuss next steps." },
  { q: "Do you guarantee a specific career outcome?", a: "No one can guarantee that — and anyone who does isn't being honest. What I guarantee is genuine effort, honest advice, and a clear plan." },
  { q: "Can parents join the sessions?", a: "Absolutely! In fact, I encourage it. Career decisions are easier when the whole family is on the same page." },
  { q: "How are sessions conducted?", a: "Sessions happen online via video call or phone. I also offer in-person sessions based on availability and location." },
];

const FAQSection = () => (
  <section id="faq" className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Questions?</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2">Frequently Asked Questions</h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left text-foreground font-body font-medium hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground font-body">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
