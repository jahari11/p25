import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <div className="flex justify-center items-center py-10">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical flex flex-col justify-center">
        {timelineData.map((item, index) => (
          <motion.li
            key={index}
            className="flex-1 mb-24"  
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {index !== 0 && <hr className="border-white my-10" />}
            
            <div className={`timeline-${index % 2 === 0 ? "start md:text-end" : "end"} mb-14`}>
              <motion.time
                className="font-mono italic text-red-600 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
              >
                {item.step}
              </motion.time>
              <motion.div
                className="text-3xl md:text-6xl font-bold text-red-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
              >
                {item.title}
              </motion.div>
              <motion.p
                className="text-white text-2xl md:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.4 }}
              >
                {item.description}
              </motion.p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

const timelineData = [
  {
    step: "01",
    title: "ASSESS THE PROJECT",
    description:
      "We don’t do guesswork. We assess your project thoroughly, giving you precise costs and deadlines.",
  },
  {
    step: "02",
    title: "THE BRIEF",
    description:
      "Industry jargon? Not here. We get to the core of your industry and highlight what sets you apart.",
  },
  {
    step: "03",
    title: "BUDGET AND SCHEDULE",
    description:
      "We break down the costs and timeline upfront, giving you clear, predictable pricing—no surprises, just smart planning.",
  },
];

