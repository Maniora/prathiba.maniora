import { motion } from "framer-motion";
import coachImg from "@/assets/coach-pratibha.jpg";

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img src={coachImg} alt="Pratibha — Career Guidance Coach" loading="lazy" width={640} height={800} className="w-full h-auto object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Meet Your Coach</span>
          <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-6">Hi, I'm Pratibha 👋</h2>
          <div className="space-y-4 text-muted-foreground font-body">
            <p>
              I'm a BTech graduate who spent years in the education space — working behind the scenes in a consultancy, helping students make better career choices.
            </p>
            <p>
              Over time, I realised something: most students don't need more information. They need someone who listens, understands, and helps them see what they can't see on their own.
            </p>
            <p>
              That's why I started coaching directly. I've guided <strong className="text-foreground">200+ students</strong> — helping them go from confused to confident, one conversation at a time.
            </p>
            <p>
              I don't promise miracles. But I do promise honesty, patience, and a genuine effort to help you find your path.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
