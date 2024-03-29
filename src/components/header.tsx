"use client";
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [order, setOrder] = useState<Array<number>>(
    Array.from({ length: 10 }, (_, i) => i + 1)
  );
  const rotateOrder = () => {
    let temp = [...order];
    temp.push(temp.shift() as number);
    setOrder(temp);
  };
  return (
    <div className="flex flex-row gap-x-8 h-36 items-end">
      <div className="h-fit w-24 relative">
        {Array.from({ length: 12 }).map((_, index) => (
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
  );
};

export default Header;
