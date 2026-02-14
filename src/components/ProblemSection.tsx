import { motion } from 'framer-motion';
import { Clock, AlertCircle, Users, FileText, BarChart3 } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: 'Slow Service',
      description: 'Long wait times frustrate customers.',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: AlertCircle,
      title: 'Order Mistakes',
      description: 'Miscommunication leads to waste.',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Users,
      title: 'Staff Overload',
      description: 'Burnout from juggling too many tasks.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: FileText,
      title: 'Outdated Menus',
      description: 'Expensive reprints for every price change.',
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      icon: BarChart3,
      title: 'No Data',
      description: 'Flying blind without business insights.',
      color: 'bg-purple-100 text-purple-600',
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
          <div className="inline-block px-4 py-1.5 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-6">
            The Problem
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Is Your Restaurant Stuck in the Past?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Traditional operations are costing you revenue every single day.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className={`w-20 h-20 ${problem.color} rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                <problem.icon className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2 leading-tight">
                {problem.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
