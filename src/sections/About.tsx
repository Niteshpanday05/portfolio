import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import ReactIcon from "@/assets/icons/react.svg";
import CssIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "HTML",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
  },
  {
    title: "Camera",
    emoji: "📷",
  },
  {
    title: "Footbal",
    emoji: "⚽",
  },
  {
    title: "Reading",
    emoji: "📖",
  },
  {
    title: "Music",
    emoji: "🎬",
  },
  {
    title: "Hiking",
    emoji: "🥾",
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimse Into My World"
          description="Learn more about who i am, what I do, and what inspires me"
        />
        <div className="mt-20 ">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description=" Explore the books shaping my perspectives"
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book Cover" className="" />
            </div>
          </Card>
          <Card className="h-[320px]">
            <CardHeader
              title=" MyToolbox"
              description=" Explore the technologies and tools I use to create digital
                experience"
                className="px-6 pt-6"
            />
           <ToolboxItems items = {toolboxItems} className="mt-6"/>
           <ToolboxItems items = {toolboxItems} className="mt-6"/>
          </Card>
          <Card>
            <CardHeader 
              title="Beyond the code"
              description=" Explore my interest and hobbies beyond the digital worl"
              
            />

            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileMemoji} alt="smiling memoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
