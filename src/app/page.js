import ListRepo from "@/components/own/list-repo";
import Navigation from "@/components/own/navigation";
import { Typography } from "@/components/own/typography";
import { WorkExperience } from "@/components/own/work-experience";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Navigation />
      <div className="flex flex-col w-full gap-24">
        <div className="flex flex-col w-full gap-12">
          <Typography variant="h2" size="md" className="md:max-w-3xl tracking-wide">
            I am a software engineer that rarely writes code.
          </Typography>
          <Typography variant="p" size="sm" className="md:max-w-3xl leading-relaxed tracking-wide">
            Meet Manu Arora, the self-proclaimed code wizard who can turn caffeine into beautiful websites. His passion for
            building clean and functional designs is only rivaled by his passion for finding the perfect GIF to express his
            excitement.
          </Typography>
        </div>
        <div className="flex flex-col w-full gap-12">
          <Typography variant="h2" size="md" className="md:max-w-3xl tracking-wide">
            Work Experience
          </Typography>
          <Typography variant="p" size="sm" className="md:max-w-3xl leading-relaxed tracking-wide">
            I have worked with a variety of technologies and frameworks, including React, Next.js, Tailwind CSS, and MongoDB.
          </Typography>
          <WorkExperience />
        </div>
      </div>
      <ListRepo />
    </div>
  );
}
