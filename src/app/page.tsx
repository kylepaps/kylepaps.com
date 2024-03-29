"use client";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [order, setOrder] = useState<Array<number>>([1, 2, 3, 4, 5, 6]);
  const rotateOrder = () => {
    let temp = [...order];
    temp.push(temp.shift() as number);
    setOrder(temp);
  };
  return (
    <main className="flex items-center w-full align-middle justify-center">
      <div className="w-5/6 sm:w-3/4 md:w-2/3 lg:w-1/3 flex flex-col gap-y-16 py-16">
        <div className="flex flex-row gap-x-8 h-36 items-end">
          <div className="h-fit w-24 relative">
            {Array.from({ length: 6 }).map((_, index) => (
              <button key={index} onClick={() => rotateOrder()}>
                <Image
                  src={`/profile${index + 1}.JPG`}
                  alt="profile"
                  className={
                    order.indexOf(index + 1) === 0
                      ? "animate-to-front z-10 rounded-3xl absolute bottom-0 left-0"
                      : order.indexOf(index + 1) === 1
                      ? "animate-to-middle rounded-3xl absolute bottom-0 left-0 translate-x-2 translate-y-2 transform rotate-3 opacity-50"
                      : order.indexOf(index + 1) === order.length - 1
                      ? "animate-fade-out rounded-3xl z-0 absolute bottom-0 left-0 translate-x-2 translate-y-2 transform rotate-3 opacity-0"
                      : "hidden"
                  }
                  width={500}
                  height={500}
                  priority
                />
              </button>
            ))}
          </div>
          <div className="flex flex-col pb-8">
            <span className="scroll-m-20 text-lg tracking-tight">
              Kyle Papizewski
            </span>
            <span className="text-sm">Software Developer 🤠</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <span className="text-sm">About</span>
          <div className="flex flex-col gap-y-4">
            <span className="text-muted-foreground text-sm">
              I&#39;m a software developer located in Toronto. Currently working
              with MLSE as a Junior Backend Engineer, where I&#39;m able to
              build applications for the Toronto Maple Leafs, Toronto Raptors,
              and associated fans. Aside from software development, I enjoy
              running, golf, basketball, and travel. In 2023 I ran my first
              marathon. This year I&#39;m training for the Toronto Waterfront
              Marathon with a 3:45 goal.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <span className="text-sm">Work Experience</span>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-row justify-start">
              <div className="w-80 sm:w-96">
                <span className="text-muted-foreground text-sm">
                  Apr. 2023 - Present
                </span>
              </div>
              <div className="flex flex-col gap-y-1 w-full">
                <div className="flex flex-row gap-x-2">
                  <div className="text-sm">Junior Backend Engineer</div>
                  <Link
                    href={"https://www.mlsedigital.com/"}
                    className="flex items-center"
                  >
                    <ExternalLinkIcon className="flex self-center hover:text-muted-foreground" />
                  </Link>
                </div>
                <span className="text-muted-foreground text-xs">
                  Maple Leafs Sports & Entertainment Ltd.
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-start">
              <div className="w-80 sm:w-96">
                <span className="text-muted-foreground text-sm w-96 pr-4">
                  Jan. 2023 - Apr. 2023
                </span>
              </div>
              <div className="flex flex-col gap-y-1 w-full">
                <span className="text-sm">IT Support Technician</span>
                <span className="text-muted-foreground text-xs">
                  Maple Leafs Sports & Entertainment Ltd.
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-start">
              <div className="w-80 sm:w-96">
                <span className="text-muted-foreground text-sm w-96 pr-4">
                  Sept. 2022 - Dec. 2023
                </span>
              </div>
              <div className="flex flex-col gap-y-1 w-full">
                <span className="text-sm">IT Generalist Intern</span>
                <span className="text-muted-foreground text-xs">
                  Maple Leafs Sports & Entertainment Ltd.
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-start">
              <div className="w-80 sm:w-96">
                <span className="text-muted-foreground text-sm w-96 pr-4">
                  Jan. 2022 - June. 2022
                </span>
              </div>
              <div className="flex flex-col gap-y-1 w-full">
                <span className="text-sm">Technical Support Specialist</span>
                <span className="text-muted-foreground text-xs">
                  Wilfrid Laurier University
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <span className="text-sm">Projects</span>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-row justify-start">
              <div className="w-80 sm:w-96">
                <span className="text-muted-foreground text-sm">Ongoing</span>
              </div>
              <div className="flex flex-col gap-y-1 w-full">
                <div className="flex flex-row gap-x-2">
                  <span className="text-sm">Resume Wizard</span>
                  <Link
                    href={"https://www.resumewizard.app/"}
                    className="flex items-center"
                  >
                    <ExternalLinkIcon className="flex self-center hover:text-muted-foreground" />
                  </Link>
                </div>
                <span className="text-muted-foreground text-xs">
                  Web application for building your personal resume. Written in
                  TypeScript using Next.js
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <span className="text-sm">Education</span>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-row justify-start">
              <div className="w-80 sm:w-96">
                <span className="text-muted-foreground text-sm">
                  2018 - 2022
                </span>
              </div>
              <div className="flex flex-col gap-y-1 w-full">
                <span className="text-sm">BSc in Computer Science</span>
                <span className="text-muted-foreground text-xs">
                  Wilfrid Laurier University
                </span>
                <span className="text-muted-foreground text-xs">
                  Waterloo, ON
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <span className="text-sm">Contact</span>
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-row justify-start">
              <div className="w-80 sm:w-96">
                <span className="text-muted-foreground text-sm">LinkedIn</span>
              </div>
              <div className="flex flex-col w-full">
                <Link
                  href={"https://www.linkedin.com/in/kyle-papizewski/"}
                  className="text-sm hover:underline"
                >
                  Kyle Papizewski
                </Link>
              </div>
            </div>
            <div className="flex flex-row justify-start">
              <div className="w-80 sm:w-96">
                <span className="text-muted-foreground text-sm">Github</span>
              </div>
              <div className="flex flex-col w-full">
                <Link
                  href={"https://github.com/kylepaps"}
                  className="text-sm hover:underline"
                >
                  kylepaps
                </Link>
              </div>
            </div>
            <div className="flex flex-row justify-start">
              <div className="w-80 sm:w-96">
                <span className="text-muted-foreground text-sm">Email</span>
              </div>
              <div className="flex flex-col w-full">
                <span className="text-sm">kylepaps@outlook.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
