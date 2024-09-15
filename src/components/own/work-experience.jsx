"use client";

import Image from "next/image";
import { Typography } from "./typography";
import { Button } from "../ui/button";
import { useState } from "react";
import web from "@/constants/web";

export const WorkExperience = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <div
        id="left"
        className="flex gap-4 flex-row items-start w-full md:w-[500px] md:flex-col overflow-x-auto overflow-y-hidden scrollbar-hide"
      >
        {web.workExperienceItem.map((item) => (
          <Button
            variant="ghost"
            key={item.company}
            className={`flex-shrink-0 flex gap-1 items-center justify-start ${
              selectedItem === item.id ? "bg-accent" : ""
            } md:w-full`}
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
        <Typography variant="h3" size="sm" className="mb-2">
          {web.workExperienceItem[selectedItem - 1].title} @ {web.workExperienceItem[selectedItem - 1].company}
        </Typography>
        <Typography variant="p" size="sm">
          {web.workExperienceItem[selectedItem - 1].description}
        </Typography>
        <Typography variant="p" size="sm">
          {web.workExperienceItem[selectedItem - 1].date}
        </Typography>
        <Typography variant="ul" size="sm">
          {web.workExperienceItem[selectedItem - 1].details.map((detail, index) => (
            <Typography variant="li" size="sm" key={index}>
              {detail}
            </Typography>
          ))}
        </Typography>
      </div>
    </div>
  );
};
