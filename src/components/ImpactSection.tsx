import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap, Target, Smile, DollarSign } from 'lucide-react';

export default function ImpactSection() {
  const impacts = [
    {
      icon: Zap,
      metric: '40%',
      label: 'Faster Table Turnover',
      description: 'Serve more customers per shift',
    },
    {
      icon: Users,
      metric: '3x',
      label: 'More Customers Served',
      description: 'Increase daily capacity',
    },
    {
      icon: Target,
      metric: '60%',
      label: 'Reduced Staff Workload',
      description: 'Less stress, better service',
    },
    {
      icon: TrendingUp,
      metric: '90%',
      label: 'Fewer Order Mistakes',
      description: 'Accuracy builds trust',
    },
    {
      icon: Smile,
      metric: '95%',
      label: 'Customer Satisfaction',
      description: 'Happy customers return',
    },
    {
      icon: DollarSign,
      metric: '+35%',
      label: 'Revenue Growth',
      description: 'Maximize profit potential',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Built to Increase Your Revenue
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real measurable impact on your bottom line and operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-gradient-to-br from-[#F8F6F1] to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#16A34A] to-[#064E3B] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <impact.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#16A34A]">
                  {impact.metric}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                {impact.label}
              </h3>
              <p className="text-gray-600">
                {impact.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
