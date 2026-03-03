import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12"
  >
    <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-agro mb-3">
      {title}
    </h2>
    {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
  </motion.div>
);

export default SectionHeader;
