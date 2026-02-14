import { motion } from 'framer-motion';
import { Smartphone, Clock, MessageSquare, Bell, ToggleLeft, Layout } from 'lucide-react';

export default function FeaturesSection() {
  const featuresLeft = [
    {
      icon: Smartphone,
      title: 'No App Download',
      description: 'Zero friction, instant browser access for scanning & ordering.',
    },
    {
      icon: Layout,
      title: 'Unified Admin',
      description: 'Control your kitchen, orders, and menu from one dashboard.',
    },
    {
      icon: ToggleLeft,
      title: 'Stock Control',
      description: 'Toggle menu items on/off instantly when you run out.',
    },
  ];

  const featuresRight = [
    {
      icon: Clock,
      title: 'Real-Time Updates',
      description: 'Instant order status changes synced across all devices.',
    },
    {
      icon: MessageSquare,
      title: 'Special Requests',
      description: 'Let customers add dietary notes & cooking instructions.',
    },
    {
      icon: Bell,
      title: 'Call Waiter',
      description: 'Guests can request assistance seamlessly from their phone.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#F8F6F1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything revolving around your success
          </p>
        </motion.div>

        {/* Desktop Connected Grid Layout */}
        <div className="hidden lg:grid grid-cols-3 gap-12 items-center relative">

          {/* Background Connection Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-dashed border-[#16A34A]/20 rounded-full -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-[#16A34A]/10 rounded-full -z-10" />

          {/* Left Column */}
          <div className="space-y-16">
            {featuresLeft.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-end text-right group"
              >
                <div className="flex items-center gap-4 mb-2 justify-end">
                  <h3 className="font-bold text-[#0F172A] text-xl">{feature.title}</h3>
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md border border-[#16A34A]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-[#16A34A]" />
                  </div>
                </div>
                <p className="text-gray-600 max-w-xs">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Center Hub */}
          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-72 h-72 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center z-20 border-8 border-white ring-1 ring-gray-100"
            >
              <div className="absolute inset-0 bg-green-50 rounded-full animate-pulse opacity-50"></div>
              <div className="relative z-10 flex flex-col items-center">
                <img src="/icon-green.png" alt="QRder Central Command" className="w-24 h-24 object-contain mb-4 drop-shadow-xl" />
                <h3 className="text-3xl font-bold text-[#0F172A]">QRder</h3>
                <span className="text-sm font-semibold text-[#16A34A] bg-[#16A34A]/10 px-3 py-1 rounded-full mt-2">
                  Central Command
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            {featuresRight.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-start text-left group"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md border border-[#16A34A]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-[#16A34A]" />
                  </div>
                  <h3 className="font-bold text-[#0F172A] text-xl">{feature.title}</h3>
                </div>
                <p className="text-gray-600 max-w-xs">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Grid Layout */}
        <div className="lg:hidden grid md:grid-cols-2 gap-6">
          {[...featuresLeft, ...featuresRight].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-[#16A34A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-[#16A34A]" />
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A] mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
