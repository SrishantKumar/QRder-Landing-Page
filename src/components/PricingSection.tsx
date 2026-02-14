import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: 'Bronze',
      description: 'Perfect for small cafes',
      features: [
        'QR-based ordering',
        'Real-time order management',
        'Kitchen & waiter coordination',
        'Menu management',
        'Special instructions',
        'Call waiter system',
      ],
      highlighted: false,
    },
    {
      name: 'Silver',
      description: 'Best for growing restaurants',
      features: [
        'Everything in Bronze',
        'Advanced analytics dashboard',
        'Customer insights',
        'Sales reports',
        'Peak hour analysis',
        'Revenue tracking',
      ],
      highlighted: true,
    },
    {
      name: 'Gold',
      description: 'Complete restaurant suite',
      features: [
        'Everything in Silver',
        'Social media management',
        'Automated marketing',
        'Customer engagement',
        'Review management',
        'Priority support',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F8F6F1] rounded-full mb-6">
            <span className="text-[#16A34A] font-semibold">14-Day Free Trial</span>
            <span className="text-gray-600">— No Commitment</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your restaurant's needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${plan.highlighted
                ? 'ring-2 ring-[#16A34A] scale-105'
                : 'border border-gray-100'
                }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#16A34A] to-[#064E3B] text-white text-sm font-semibold rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  Recommended
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#16A34A]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#16A34A]" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="https://wa.me/message/Q7JRYMCCZIB2N1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${plan.highlighted
                  ? 'bg-[#16A34A] text-white shadow-lg shadow-[#16A34A]/30 hover:shadow-xl'
                  : 'bg-[#F8F6F1] text-[#16A34A] hover:bg-[#16A34A] hover:text-white'
                  }`}
              >
                Start Free Trial
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mt-12"
        >
          All plans include full customer support and regular updates
        </motion.p>
      </div>
    </section>
  );
}
