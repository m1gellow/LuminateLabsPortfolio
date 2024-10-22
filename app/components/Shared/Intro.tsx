'use client'
import React from 'react'
import {motion, useScroll, useTransform} from 'framer-motion';
import {useMediaQuery} from 'react-responsive';

interface IntroProps{
    children: React.ReactNode;
}


const Intro: React.FC<IntroProps> = ({children}) => {

    const isMobile = useMediaQuery({query: '(max-width: 768px)'})

    const {scrollYProgress} = useScroll({
        offset: ['start start', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh'])

  return (
    <div className='h-screen overflow-hidden -z-10'>
        {!isMobile ? (
              <motion.div style={{y}} className='h-full relative'>
            {children}
        </motion.div>
        ) : (<div>{children}</div>)}
    </div>
  )
}

export default Intro