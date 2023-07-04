import Image from "next/image";
import me from "../assets/me.jpeg";

import { Experience } from "./Experience";
import jobs from "../data/jobs.json";
import { Experiences } from "@/types/types";

export default function Home() {
  const experiences: Experiences = JSON.parse(JSON.stringify(jobs));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* about me */}
      <div>
        <Image src={me} alt={""} />
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
        <div className="p-10 text-blue-400">Experiences</div>
        {experiences.companies.map((experience) => {
          return (
            <Experience
              company={experience.company}
              startDate={experience.startDate}
              endDate={experience.endDate}
              jobTitle={experience.jobTitle}
              description={experience.description}
              key={experience.company}
            />
          );
        })}
      </div>

      {/* projects */}

      <div>
        <a
          id="bestbuy"
          href="https://github.com/stoveoveoven/scalping"
          target="_blank"
        >
          <h2>Best Buy Autocheckout</h2>
          <p>(broken)</p>
        </a>
        <a
          id="icbc"
          href="https://github.com/stoveoveoven/scraping-icbc"
          target="_blank"
        >
          <h2>EZ ICBC N test booking</h2>
          <p>(broken)</p>
        </a>
        <a id="website" href="https://stoveoveoven.github.io/" target="_blank">
          <h2>Website</h2>
          <p>Youre looking at it</p>
        </a>
        <a
          id="verilog"
          href="https://github.com/stoveoveoven/circuit-design-with-verilog"
          target="_blank"
        >
          <h2>Circuit Design with Verilog</h2>
          <p>(school)</p>
        </a>
        <a
          id="mp1"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <h2>Document Analysis tool</h2>
          <p>(school)</p>
        </a>
        <a
          id="mp2"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <h2>Email Analysis with Graphs</h2>
          <p>(school)</p>
        </a>
        <a
          id="mp3"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <h2>Wikipedia Mediator</h2>
          <p>(school)</p>
        </a>
        <a
          id="WIP"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <h2>WIP</h2>
          <p>WIP</p>
        </a>
      </div>
    </main>
  );
}
