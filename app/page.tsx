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
          3rd Year Computer Science{" "}
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
            href="https://www.instagram.com/ubc.current/"
            target="_blank"
            className="font-bold underline"
          >
            @UBC Current
          </a>
        </li>
        <li className="before:content-['📝'] before:pr-4">
          Open for fall 2023 internship opportunities!
        </li>
      </ul>
    );
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-24 w-[700px] xl:w-[1200px] m-auto gap-[100px] 
                 font-mono text-gray-500"
    >
      {/* about me */}
      <div className="flex flex-col w-[600px] xl:w-[1200px] gap-3">
        <div className="w-[600px] self-center h-[600px] relative">
          <Image
            src={"/me.jpeg"}
            alt={""}
            className="rounded-full mb-5 justify-center shadow-2xl"
            fill
          />
        </div>
        <Heading text="👋 Hey, I'm Steven!" />
        {renderAboutDescription()}
        {renderAboutLinks()}
      </div>
      {/* experiences */}
      <div className="w-[600px] xl:w-[1200px]">
        <Heading text={"Experience"} />
        <Experiences />
      </div>
      {/* projects */}
      <div className="w-[600px] xl:w-[1200px]">
        <Heading text="Projects" />
        <Projects />
      </div>
    </main>
  );
}
