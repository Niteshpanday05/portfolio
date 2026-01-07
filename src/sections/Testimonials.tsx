import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Jackson Rai",
    position: "Ecommerce Web App",
    text: "Having worked together, I can confidently say he is a skilled and professional developer. Very skilled and reliable developer. Highly professional developer. Our experience working together was really smooth",
    avatar: memojiAvatar1,
  },
  {
    name: "Surya Panday",
    position: "Sajilo Order",
    text: "We used to worked together, and he is great at what he does. Amazing work as always. Having worked with him, I can say he is a very dedicated and talented developer.",
    avatar: memojiAvatar2,
  },
  
  {
    name: "Ishab Acharya",
    position: "CEO at cloud factory",
    text: "Nitesh ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Nadia Cluaded",
    position: "CEo at Zaaou",
    text: "Nitesh ability to create positive environment is great. He collaborated with app developer to make our webapp fully working. We are thankfull for his contribution.",
    avatar: memojiAvatar3,
  },
 
 
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients say about me"
          description=" Trusted by clients. Proven by results."
        />
        <div className="mt-16 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 =my=4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>

                      <div className="">
                        <div className="font-sans">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
