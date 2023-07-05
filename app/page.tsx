import Image from "next/image";
import me from "../assets/me.jpeg";

import { Heading } from "./Heading";
import { Projects } from "./Projects";
import { Experiences } from "./Experiences";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 w-[1200px] m-auto gap-8">
      {/* about me */}
      <div className="w-[600px]">
        <Image src={me} alt={""} className="rounded-full" />
        <Heading text="Hey, I'm Steven!" />
        {
          "Welcome to my website! I'm currently a second-year Computer Engineering student at the University of British Columbia. I'm looking for Fall 2023 internship opportunities! Feel free to reach out through email (stoven@student.ubc.ca) or "
        }
        <a href="https://www.linkedin.com/in/stevenyuxuanshao/" target="_blank">
          LinkedIn
        </a>{" "}
        to chat!
      </div>

      {/* experiences */}
      <div>
        <Heading text={"Experiences"} />
        <Experiences />
      </div>

      {/* projects */}
      <div>
        <Heading text="Projects" />
        <Projects />
      </div>
    </main>
  );
}
