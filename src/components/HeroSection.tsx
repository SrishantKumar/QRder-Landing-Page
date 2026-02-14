import { motion } from 'framer-motion';
import { QrCode, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#F8F6F1] via-[#F8F6F1] to-[#e8f5e9] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-[#16A34A]/5 via-transparent to-transparent opacity-60"></div>

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md"
            >
              <div className="w-2 h-2 bg-[#16A34A] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-[#064E3B]">Restaurant Technology Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-[#0F172A] leading-tight"
            >
              Run Your Restaurant{' '}
              <span className="text-[#16A34A]">Smarter</span> with QRder
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              A modern QR-based ordering system that increases speed, reduces mistakes,
              and helps your restaurant serve more customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="https://wa.me/message/Q7JRYMCCZIB2N1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-[#16A34A] text-white rounded-xl font-semibold shadow-lg shadow-[#16A34A]/30 hover:shadow-xl hover:shadow-[#16A34A]/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free 14-Day Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="https://wa.me/message/Q7JRYMCCZIB2N1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-[#16A34A] rounded-xl font-semibold border-2 border-[#16A34A] hover:bg-[#16A34A] hover:text-white transition-all duration-300"
              >
                Book a Demo
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-[#16A34A] to-[#064E3B] rounded-[3rem] blur-3xl opacity-20"></div>

                <div className="relative bg-white rounded-[3rem] p-4 shadow-2xl">
                  <div className="bg-gradient-to-br from-[#16A34A] to-[#064E3B] rounded-[2.5rem] p-6 aspect-[9/16]">
                    <div className="flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <QrCode className="w-8 h-8 text-white" />
                          <span className="text-white font-bold text-lg">QRder</span>
                        </div>
                        <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                          Table 12
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-3 space-y-2 overflow-hidden">
                        {/* Burger Item */}
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="bg-white rounded-xl p-3 shadow-lg"
                        >
                          <div className="flex gap-3">
                            <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg overflow-hidden flex-shrink-0">
                              <img
                                src="/images/burger.png"
                                alt="Burger"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-800 text-sm mb-1 truncate">Classic Burger</h4>
                              <p className="text-xs text-gray-500 mb-2 line-clamp-1">Juicy beef patty with cheese</p>
                              <div className="flex items-center justify-between">
                                <span className="text-[#16A34A] font-bold text-sm">₹299</span>
                                <button className="px-3 py-1 bg-[#16A34A] text-white rounded-md text-xs font-medium">
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Pasta Item */}
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="bg-white rounded-xl p-3 shadow-lg"
                        >
                          <div className="flex gap-3">
                            <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-lg overflow-hidden flex-shrink-0">
                              <img
                                src="/images/pasta.png"
                                alt="Pasta"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-800 text-sm mb-1 truncate">Creamy Alfredo</h4>
                              <p className="text-xs text-gray-500 mb-2 line-clamp-1">Pasta with grilled chicken</p>
                              <div className="flex items-center justify-between">
                                <span className="text-[#16A34A] font-bold text-sm">₹349</span>
                                <button className="px-3 py-1 bg-[#16A34A] text-white rounded-md text-xs font-medium">
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Pizza Item */}
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="bg-white rounded-xl p-3 shadow-lg"
                        >
                          <div className="flex gap-3">
                            <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-50 rounded-lg overflow-hidden flex-shrink-0">
                              <img
                                src="/images/pizza.png"
                                alt="Pizza"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-800 text-sm mb-1 truncate">Margherita Pizza</h4>
                              <p className="text-xs text-gray-500 mb-2 line-clamp-1">Fresh mozzarella & basil</p>
                              <div className="flex items-center justify-between">
                                <span className="text-[#16A34A] font-bold text-sm">₹399</span>
                                <button className="px-3 py-1 bg-[#16A34A] text-white rounded-md text-xs font-medium">
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* View Cart Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="mt-4 w-full py-3 bg-white text-[#16A34A] rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2"
                      >
                        View Cart
                        <span className="px-2 py-0.5 bg-[#16A34A] text-white rounded-full text-xs">3</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
