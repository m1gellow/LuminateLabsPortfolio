"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import Particles from "../components/ui/Particles";

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-10 h-screen justify-center items-center container">
      <div className="z-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.h1
            initial={{ y: "20px", opacity: 0 }}
            whileInView={{ y: "0px", opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-white font-bold proce proce-slate lg:text-[60px] md:text-[35px] sm:text-[25px] text-[20px]"
          >
            Luminate Labs
          </motion.h1>
          <motion.div
            initial={{ y: "20px", opacity: 0 }}
            whileInView={{ y: "0px", opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-white lg:text-[35px] md:text-[35px] sm:text-[25px] text-[20px]">
              Мы стави фокус на создания веб приложений под ключ. Основная
              концепция - это проектировние и создания адаптивных веб блогов для
              вас!
            </h2>
          </motion.div>
        </div>
      </div>
      <div>
        <div className="border-b w-screen opacity-20"></div>
      </div>
      <div className="z-20">
        <motion.h1
          initial={{ y: "20px", opacity: 0 }}
          whileInView={{ y: "0px", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-white proce proce-slate font-bold lg:text-[60px] md:text-[35px] sm:text-[25px] text-[20px]"
        >
          Контакт с нами
        </motion.h1>
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-white text-[20px]">
                <Button>Мы в Telegram</Button>
            </h2>

        </div>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        refresh
      />
    </div>
  );
};

export default AboutPage;
