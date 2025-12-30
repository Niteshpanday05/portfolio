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
import smileMemoji from '@/assets/images/memoji-smile.png';

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
    title:'Painting',
    emoji:'🎨'
  },
   {
    title:'Camera',
    emoji:'📷'
  },
   {
    title:'Footbal',
    emoji:'⚽'
  },
   {
    title:'Reading',
    emoji:'📖'
  },
  {
    title:'Watching',
    emoji:'🎬'
  },
  {
    title:'Learning',
    emoji:'🏫'
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimse Into My World"
        description="Learn more about who i am, what I do, and what inspires me"
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspectives</p>
          </div>
          <Image src={bookImage} alt="Book Cover" />
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>Toolbox</h3>
            <p>
              Explore the technologies and tools I use to create digital
              experience
            </p>
          </div>
          <div>
            {toolboxItems.map((item) => (
              <div key={item.title}>
                <TechIcon component={item.iconType} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>Beyond the code</h3>
            <p>Explore my interest and hobbies beyond the digital worl</p>
          </div>
        </Card>
        <Card>
          <Image src={mapImage} alt="map" />
          <Image src={smileMemoji} alt="smiling memoji" />
        </Card>
      </div>
    </div>
  );
};
