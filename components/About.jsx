"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
const targetRef = useRef(null);
const { scrollYProgress } = useScroll({
target: targetRef,
offset: ["start end", "end start"],
});

const titleY = useTransform(scrollYProgress, [0, 1], [-100, 0]);
const contentOpacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
const contentY = useTransform(scrollYProgress, [0, 1], [50, 0]);

return (
<div ref={targetRef} className="flex flex-col items-center justify-center">
<motion.div
className=" space-y-10"
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: false, amount: 0.5 }}
>
<motion.p
className="text-white text-xl md:text-6xl font-extrabold uppercase"
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.2 }}
viewport={{ once: false, amount: 0.5 }}
>
At <span className="text-red-600">Phoenix Project</span>, we are passionate about empowering businesses with cutting-edge digital solutions. Our expertise spans web development, business automation, market analysis, and digital marketing, ensuring that we help brands establish a strong online presence, streamline operations, and drive measurable growth.
</motion.p>
<motion.p
className="text-white text-xl md:text-6xl font-extrabold uppercase"
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.4 }}
viewport={{ once: false, amount: 0.5 }}
>
We believe in innovation, efficiency, and results. Whether you're a startup looking to build your first website or an established business aiming to optimize workflows and reach new audiences, our team is dedicated to delivering solutions tailored to your unique needs.
</motion.p>
<motion.p
className="text-red-600 text-sm md:text-6xl text-center font-extrabold uppercase"
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.6 }}
viewport={{ once: false, amount: 0.5 }}
>
At Phoenix Project, we don’t just offer services—we build long-term partnerships to help your business thrive in the digital world.
</motion.p>
</motion.div>
</div>
);
}