import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#064E3B] via-[#16A34A] to-[#064E3B] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yLTJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDJ2Mmgydi0yaC0yem0yLTJ2Mmgydi0yaC0yem0yLTJ2Mmgydi0yaC0yem0wIDJ2Mmgydi0yaC0yem0wIDJ2Mmgydi0yaC0yem0yLTJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0tMi0ydjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Modernize Your Restaurant?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join hundreds of restaurants already using QRder to serve faster,
            reduce errors, and increase revenue
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/message/Q7JRYMCCZIB2N1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-white text-[#16A34A] rounded-xl font-semibold shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="https://wa.me/message/Q7JRYMCCZIB2N1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent text-white rounded-xl font-semibold border-2 border-white hover:bg-white hover:text-[#16A34A] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 flex items-center justify-center gap-8 text-white/80 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xs">✓</span>
              </div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xs">✓</span>
              </div>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xs">✓</span>
              </div>
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
}
