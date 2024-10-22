
import React from 'react'
import { WordRotate } from '../ui/WordRotate'
import Button from '../ui/Button'
import Intro from './Intro';
import DotPattern from '../ui/DotPattern';
import { cn } from '@/app/lib/utils';
import TitleAnimated from '../ui/TitleAnimated';
import ParticleCard from './ParticleCard';
import Link from 'next/link';
import VideContent from '../ui/VideContent';

const Header = () => {
  return (
    <div>
         <Intro>
        <div>
          <VideContent/>
        </div>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
          )}
        />
        <div className="h-screen gap-4 flex flex-col justify-center items-center">
          <div className="lg:flex-row text-center flex flex-col  items-center justify-center gap-3">
            <TitleAnimated
              className="sm:text-[40px]  lg:text-[50px] font-bold tracking-[-0.02em] text-white"
              words="Мы создаем"
            />
            <span>
              <WordRotate
                className="text-[40px]  lg:text-[50px] font-bold text-purple-600 dark:text-purple-600"
                words={["Адаптивные", "Привлекательные", "Удобные", "Быстрые"]}
              />
            </span>
            <TitleAnimated
              className="sm:text-[40px]   lg:text-[50px] font-bold tracking-[-0.02em] text-white "
              words="web-блоги для вас!"
            />
          </div>

          <TitleAnimated
            className="text-[30px] font-bold tracking-[-0.02em] text-black dark:text-gray-500"
            words="Станьте владельцем собственного блога за пару кликов"
          />
          <div>
            <Link href={'/me'}>
              <Button>Начать!</Button>
            </Link>
          
          </div>
        </div>
      </Intro>
      <div>
        <ParticleCard/>
      </div>
    </div>
  )
}

export default Header