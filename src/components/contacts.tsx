import React from "react";
import Link from "next/link";

const Contacts = () => {
  return (
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
  );
};

export default Contacts;
