import { motion } from 'framer-motion';
import { Zap, TrendingUp, Users } from 'lucide-react';

export default function TrustBar() {
  const metrics = [
    { icon: Zap, label: 'Serve faster' },
    { icon: TrendingUp, label: 'Reduce errors' },
    { icon: Users, label: 'Increase revenue' },
  ];

  return (
    <section className="bg-white py-12 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-lg text-gray-600 font-medium">
            Designed for modern restaurants and cafes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#16A34A] to-[#064E3B] rounded-lg flex items-center justify-center">
                <metric.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-[#0F172A]">{metric.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
