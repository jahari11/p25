"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function Card() {
  const services = [
    {
      title: "Web Development",
      description:
        "In today's digital landscape, a strong online presence is essential. We specialize in crafting fast, responsive, and user-friendly websites that reflect your brand's identity and business goals.",
      image:
        "https://i.imgur.com/A3qZmHa.png",
    },
    {
      title: "Market Analysis",
      description:
        "Informed decisions are key to successful business strategies. Our market analysis equips you with insights into trends, customer behavior, and competition to drive data-driven decisions.",
      image:
        "https://i.imgur.com/ExYnOg7.png",
    },
    {
      title: "Business Automation",
      description:
        "Are repetitive tasks slowing you down? Our automation solutions streamline operations, eliminate inefficiencies, and free up valuable time so you can focus on growth.",
      image:
        "https://i.imgur.com/y3IOAAW.png",
    },
    {
      title: "Digital Marketing",
      description:
        "Online visibility is crucial for success. Our digital marketing strategies, including SEO, content marketing, and PPC, are designed to increase reach and engagement.",
      image:
        "https://i.imgur.com/SU43eju.png",
    },
  ];

  return (
    <div className="flex flex-col items-center lg:flex-row  gap-8 p-8">
      <div className="w-full lg:w-1/3 space-y-6">
        <h2 className=" text-3xl md:text-6xl font-bold text-red-600 dark:text-white">
          Master Growth & Digital Success
        </h2>
        <p className="text-white dark:text-neutral-300">
          We provide cutting-edge solutions for businesses, helping them
          optimize their digital presence, automate operations, and enhance
          market insights.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-2/3">
        {services.slice(0, 4).map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ amount: 0.5 }}
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:bg-black border border-gray-200 dark:border-white/[0.2] rounded-xl p-6 shadow-md">
                <CardItem translateZ="50" className="text-2xl font-semibold text-red-600 dark:text-white">
                  {service.title}
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-black text-md mt-2 dark:text-neutral-300">
                  {service.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={service.image}
                    height={400}
                    width={400}
                    className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={service.title}
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
