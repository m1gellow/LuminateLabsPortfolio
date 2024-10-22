'use client'
import React from 'react'
import {motion, useScroll, useTransform} from 'framer-motion';

interface IntroProps{
    children: React.ReactNode;
}


const Intro: React.FC<IntroProps> = ({children}) => {

    const {scrollYProgress} = useScroll({
        offset: ['start start', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh'])

  return (
    <div className='h-screen overflow-hidden -z-10'>
        <motion.div style={{y}} className='h-full relative'>
            {children}
        </motion.div>
    </div>
  )
}

export default Intro