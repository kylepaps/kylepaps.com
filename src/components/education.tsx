import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <span className="text-sm">Education</span>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-row justify-start">
          <div className="w-80 sm:w-96">
            <span className="text-muted-foreground text-sm">2018 - 2022</span>
          </div>
          <div className="flex flex-col gap-y-1 w-full">
            <span className="text-sm">BSc in Computer Science</span>
            <span className="text-muted-foreground text-xs">
              Wilfrid Laurier University
            </span>
            <span className="text-muted-foreground text-xs">Waterloo, ON</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
