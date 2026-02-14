import { motion } from 'framer-motion';
import { Users, MonitorSmartphone, ChefHat, UserCheck, ArrowRight } from 'lucide-react';

export default function WorkflowSection() {
  const roles = [
    {
      icon: Users,
      role: 'Customer',
      color: 'from-blue-500 to-blue-600',
      actions: ['Scans QR code', 'Browses menu', 'Places order', 'Adds special notes'],
    },
    {
      icon: MonitorSmartphone,
      role: 'Admin',
      color: 'from-[#16A34A] to-[#064E3B]',
      actions: ['Receives order', 'Accepts/Rejects', 'Manages menu', 'Controls availability'],
    },
    {
      icon: ChefHat,
      role: 'Kitchen',
      color: 'from-orange-500 to-orange-600',
      actions: ['Views accepted orders', 'Updates cooking status', 'Marks ready', 'Real-time sync'],
    },
    {
      icon: UserCheck,
      role: 'Waiter',
      color: 'from-purple-500 to-purple-600',
      actions: ['Sees ready orders', 'Delivers food', 'Marks served', 'Handles requests'],
    },
  ];

  return (
    <section className="py-24 bg-[#F8F6F1]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Seamless Coordination Across Your Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every role has the right tools to work efficiently together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${role.color} rounded-xl flex items-center justify-center`}>
                  <role.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A]">{role.role}</h3>
              </div>
              <ul className="space-y-3">
                {role.actions.map((action, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#16A34A] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{action}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-[#0F172A] mb-6 text-center">
            Order Flow
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold"
            >
              Customer Orders
            </motion.div>
            <ArrowRight className="w-6 h-6 text-gray-400" />
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-gradient-to-r from-[#16A34A] to-[#064E3B] text-white rounded-xl font-semibold"
            >
              Admin Accepts
            </motion.div>
            <ArrowRight className="w-6 h-6 text-gray-400" />
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold"
            >
              Kitchen Cooks
            </motion.div>
            <ArrowRight className="w-6 h-6 text-gray-400" />
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-semibold"
            >
              Waiter Serves
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
