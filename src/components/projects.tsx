import React from "react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <span className="text-sm">Projects</span>
      <div className="flex flex-row justify-start">
        <div className="w-80 sm:w-96">
          <span className="text-muted-foreground text-sm">In Progress</span>
        </div>
        <div className="flex flex-col gap-y-1 w-full">
          <div className="flex flex-row gap-x-2">
            <span className="text-sm">Rollout</span>
            <Link
              href={"https://www.rollout.fyi/"}
              className="flex items-center"
            >
              <ExternalLinkIcon className="flex self-center hover:text-muted-foreground" />
            </Link>
          </div>
          <span className="text-muted-foreground text-xs">
            A marketing application created for SaaS companies to enhance
            product visibility and build SEO backlinks. It includes a curated
            list of over 120 directories, communities, and review sites.
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-row justify-start">
          <div className="w-80 sm:w-96">
            <span className="text-muted-foreground text-sm">Paused</span>
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
              A web application designed for creating personalized resumes. It
              offers six customizable templates, allowing you to adjust
              sections, fonts, spacing, and margins to suit your preferences.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
