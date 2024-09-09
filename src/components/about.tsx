import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <span className="text-sm">About</span>
      <div className="flex flex-col gap-y-4">
        <span className="text-muted-foreground text-sm">
          Hello! I&#39;m a software developer located in Toronto. I&#39;m
          currently working with MLSE as a Junior Backend Engineer, where
          I&#39;ve been able to build applications for the Toronto Maple Leafs,
          Toronto Raptors, and associated fans.
        </span>
      </div>
    </div>
  );
};

export default About;
