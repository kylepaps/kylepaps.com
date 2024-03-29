import React from "react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Work = () => {
  return (
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
  );
};

export default Work;
