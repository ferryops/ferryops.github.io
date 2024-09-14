import Navigation from "@/components/navigation";
import { Typography } from "@/components/Typography";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Navigation />
      <div className="flex flex-col w-full gap-2">
        <Typography variant="h2" size="md" className="md:max-w-3xl">
          I'm a software engineer that rarely writes code.
        </Typography>
        <Typography variant="p" size="sm" className="md:max-w-3xl">
          Meet Manu Arora, the self-proclaimed code wizard who can turn caffeine into beautiful websites. His passion for building
          clean and functional designs is only rivaled by his passion for finding the perfect GIF to express his excitement.
        </Typography>
      </div>
    </div>
  );
}
