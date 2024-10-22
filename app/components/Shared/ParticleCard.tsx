import Particles from "../ui/Particles";
import CardInfo from "../ui/CardInfo";

import { InfoData } from "@/app/lib/interfaces"
import { domAnimation, LazyMotion } from "framer-motion";
import { getData } from "@/app/lib/serverActions";

export const revalidate = 30;


const ParticleCard = async () => {
  const data: InfoData[] = await getData();

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative flex lg:h-screen w-full flex-col  items-center  overflow-hidden rounded-lg  bg-background md:shadow-xl">
        <div>
          <h1 className="sm:text-[40px] text-[40px]  lg:text-[50px] font-bold tracking-[-0.02em] pt-5 text-black dark:text-white">
            Почему Выбирают нас?
          </h1>
        </div>
        <div className="lg:w-full lg:h-full flex flex-col items-center justify-center gap-[20px] lg:gap-24 container ">
          {data.map((info: InfoData, idx) => (
            <div key={idx} className="z-30">
              <CardInfo
                title={info.title}
                button="Читать"
                icon="users"
                iconSize="50px"
                iconColor="black"
                href={info.currentSlug}
                suptitle={info.smallDescription}
              />
            </div>
          ))}
        </div>
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          refresh
        />
      </div>
    </LazyMotion>
  );
};

export default ParticleCard;
