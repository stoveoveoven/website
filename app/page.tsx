import Image from "next/image";

import { Heading } from "./Heading";
import { Projects } from "./Projects";
import { Experiences } from "./Experiences";
import { Link } from "./Link";
import aboutData from "../data/about.json";

export default function Home() {
  const about = JSON.parse(JSON.stringify(aboutData));

  const renderAboutLinks = () => {
    return (
      <div className="flex gap-5">
        <Link
          href={"https://www.linkedin.com/in/stevenyuxuanshao/"}
          text={"LinkedIn"}
        />
        <Link href={"/resume.pdf"} text={"Resume"} />
        <Link href={"https://github.com/stoveoveoven"} text={"Github"} />
      </div>
    );
  };

  const renderAboutDescription = () => {
    return (
      <ul className="list-inside text-xl">
        <li className="before:content-['💻'] before:pr-4">
          Computer Science{" "}
          <a
            href="https://www.ubc.ca/"
            className="font-bold underline"
            target="_blank"
          >
            @UBC
          </a>
        </li>
        <li className="before:content-['🛶'] before:pr-4">
          Competitive Dragonboat with{" "}
          <a
            href="https://www.instagram.com/juicedragonboat/"
            target="_blank"
            className="font-bold underline"
          >
            @juicedragonboat
          </a>
        </li>
        <li className="before:content-['📝'] before:pr-4">
          Open for Aug 2026 opportunities!
        </li>
      </ul>
    );
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center w-full max-w-[700px] xl:max-w-[1200px] mx-auto gap-[100px] font-mono text-gray-500 px-16"
    >
      {/* about me */}
      <div className="flex w-full max-w-[600px] xl:max-w-[1200px] pt-16 items-center justify-center">
        <div className="flex flex-col gap-10">
          <div className="w-full max-w-[600px] self-center aspect-square relative">
            <Image
              src={"/me.png"}
              alt={""}
              className="rounded-full mb-5 justify-center shadow-2xl object-cover"
              fill
            />
          </div>
          <div className="flex flex-col gap-4">
            <Heading text="👋 Hey, I'm Steven!" />
            {renderAboutDescription()}
            {renderAboutLinks()}
          </div>
        </div>
      </div>
      {/* experiences */}
      <div className="w-full max-w-[600px] xl:max-w-[1200px]">
        <Heading text={"Experience"} />
        <Experiences />
      </div>
      {/* projects */}
      <div className="w-full max-w-[600px] xl:max-w-[1200px]">
        <Heading text="Projects" />
        <Projects />
      </div>
    </main>
  );
}
