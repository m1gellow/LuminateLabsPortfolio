import { Eye } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { IMyWorksData } from "@/app/lib/interfaces";
import { ulrFor } from "@/app/lib/sanity";
import Button from "../ui/Button";

interface ProjectCardProps extends IMyWorksData{
  views: string
}


const ProjectCard: React.FC<ProjectCardProps> = ({
  projectimage,
  projectlink,
  projectname,
  currentSlug,
  views,
}) => {
  return (
    <div className="py-10 flex items-center justify-center">
      <div className="flex gap-3 flex-col ">
        <div className="w-full h-full bg-white/20">
          <Image
            src={ulrFor(projectimage).url()}
            width={350}
            height={350}
            alt="img"
            className="rounded"
            loading="lazy"
          />
        </div>
        <div className="flex justify-between">
          <Link href={`/myWorks/${currentSlug}`} >
            <h2 className="text-[20px] text-white">{projectname}</h2>
          </Link>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <Eye color="gray" size={"20px"} />
              <p className="text-purple-500">{views}</p>
            </div>
          </div>
        </div>{" "}
        <div className="inline-flex gap-4">
          <Link href={projectlink} >
            <Button>Посетить</Button>
          </Link>
          <Link href={`/myWorks/${currentSlug}`} >
            <Button>Читать</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
