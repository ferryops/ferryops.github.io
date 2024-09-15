import Link from "next/link";
import { Typography } from "./typography";
import web from "@/constants/web";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col md:w-[50vw] w-full items-center pb-24">
      <Typography variant="h5" size="md" className="tracking-wide">
        Ferry Ananda Febian
      </Typography>
      <div className="flex gap-4">
        {web.navigationItem.map((item) => (
          <Link key={item.name} href={item.href} className="hover:underline p-2">
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex gap-4">
        {web.socialMedia.map((item) => (
          <Link key={item.name} href={item.href} target="_blank" className="hover:underline p-2">
            {item.name === "Github" && <FaGithub />}
            {item.name === "Linkedin" && <FaLinkedin />}
            {item.name === "Instagram" && <FaInstagram />}
          </Link>
        ))}
      </div>
    </div>
  );
}
