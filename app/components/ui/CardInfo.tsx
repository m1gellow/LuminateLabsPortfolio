'use client';
import React from "react";
import Button from "./Button";
import { ArrowDownUp, Code, HandCoins, MonitorSmartphone, Users } from "lucide-react";
import {motion} from 'framer-motion'
import Link from "next/link";

type icon = "code" | "hand-coins" | "users" | "arrow-down-up" | "monitor-smartphone"


interface CardInfoProps {
  title: string;
  suptitle: string;
  button?: string;
  icon?: icon,
  iconSize?: string,
  iconColor?: string,
  href: string,
}



const CardInfo: React.FC<CardInfoProps> = ({
  title,
  suptitle,
  button,
  icon,
  iconSize,
  iconColor,
  href
}) => {

  return (
    <div >
      <motion.div
      transition={{
        duration: .5
      }}
      whileInView={{
        y: '0px'
      }}
      initial={{
        y: '30px'
      }}
      className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div>
          <div className=" bg-white flex items-center justify-center w-[100px] rounded h-[100px]">
            {icon === "code" ? (
                <Code size={iconSize} color={iconColor}/>
            ) : icon === "hand-coins" ? (
                <HandCoins  size={iconSize} color={iconColor}/>
            ) : icon === "users" ? (
                <Users  size={iconSize} color={iconColor}/>
            ) : icon === "arrow-down-up" ? (
                <ArrowDownUp  size={iconSize} color={iconColor}/>
            ) : icon === "monitor-smartphone" ? (
                <MonitorSmartphone  size={iconSize} color={iconColor}/>
            ) : null}
          </div>
        </div>
        <div className="z-40 flex-col">
          <h1 className="lg:text-[50px] text-[30px] text-white">{title}</h1>
          <p className="lg:text-[20px] text-[15px] text-gray-500">{suptitle}</p>
          {button &&  (
                
                  <Link href={`info/${href}`}>
                    <Button className="mt-5">{button}</Button>
                  </Link>
             
          ) }
      
        </div>
      </motion.div>
    </div>
  );
};

export default CardInfo;
