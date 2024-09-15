"use client";

import Image from "next/image";
import { Typography } from "./typography";
import { Button } from "../ui/button";
import { useState } from "react";

export const WorkExperience = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <div id="left" className="flex gap-4 flex-col items-start w-full md:w-auto">
        {WorkExperienceItem.map((item) => (
          <Button
            variant="ghost"
            key={item.company}
            className={`flex gap-1 items-center w-full justify-start ${selectedItem === item.id ? "bg-accent" : ""}`}
            onClick={() => {
              setSelectedItem(item.id);
            }}
          >
            <div className="flex gap-2 items-center py-2">
              <Image src={item.icon} alt={item.company} width={24} height={24} className="rounded-full py-4" />
              <Typography variant="p" size="sm">
                {item.company}
              </Typography>
            </div>
          </Button>
        ))}
      </div>
      <div id="right" className="w-full">
        <div>
          <Typography variant="h3" size="sm">
            {WorkExperienceItem[selectedItem - 1].title} @ {WorkExperienceItem[selectedItem - 1].company}
          </Typography>
          <Typography variant="p" size="sm">
            {WorkExperienceItem[selectedItem - 1].description}
          </Typography>
          <Typography variant="p" size="sm">
            {WorkExperienceItem[selectedItem - 1].date}
          </Typography>
          <Typography variant="ul" size="sm">
            {WorkExperienceItem[selectedItem - 1].details.map((detail, index) => (
              <Typography variant="li" size="sm" key={index}>
                {detail}
              </Typography>
            ))}
          </Typography>
        </div>
      </div>
    </div>
  );
};

const WorkExperienceItem = [
  {
    id: 1,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/36px-Google_%22G%22_logo.svg.png",
    title: "Software Engineer",
    company: "Google",
    location: "San Francisco, CA",
    date: "Jan 2022 - Present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    id: 2,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/36px-Google_%22G%22_logo.svg.png",
    title: "Software Engineer",
    company: "Netflix",
    location: "San Francisco, CA",
    date: "Jan 2022 - Present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    id: 3,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/36px-Google_%22G%22_logo.svg.png",
    title: "Software Engineer",
    company: "Amazon",
    location: "San Francisco, CA",
    date: "Jan 2022 - Present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    details: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
  },
];
