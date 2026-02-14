import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      image: '/images/scan-qr.png',
      label: 'Scan Code',
      description: 'Customer scans QR code at their table'
    },
    {
      image: '/images/browse-menu.png',
      label: 'Browse Menu',
      description: 'View full menu with photos & prices'
    },
    {
      image: '/images/order-food.png',
      label: 'Place Order',
      description: 'Add items and customize your order'
    },
    {
      image: '/images/kitchen-printer.png',
      label: 'Kitchen Receives',
      description: 'Order prints directly in kitchen'
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#F8F6F1]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
            <span className="text-[#16A34A] font-semibold">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            How QRder Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From scan to serve in four simple steps
          </p>
        </motion.div>

        {/* Desktop Flow */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Illustration Card */}
                  <motion.div
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="aspect-square bg-gradient-to-br from-[#F8F6F1] to-white rounded-xl flex items-center justify-center mb-4 p-6">
                      <img
                        src={step.image}
                        alt={step.label}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-[#16A34A] text-white rounded-full font-bold text-sm mb-3">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                        {step.label}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        <ArrowRight className="w-8 h-8 text-[#16A34A]" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Flow */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#F8F6F1] to-white rounded-xl flex items-center justify-center p-3">
                      <img
                        src={step.image}
                        alt={step.label}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center justify-center w-7 h-7 bg-[#16A34A] text-white rounded-full font-bold text-sm mb-2">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-1">
                      {step.label}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow down for mobile */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-3">
                  <ArrowRight className="w-6 h-6 text-[#16A34A] rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
