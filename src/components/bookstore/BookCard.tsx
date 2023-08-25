import Image from "next/image";
import React from "react";
import { truncateText } from "../../../utils/commonUtils";
import { AladinBookData } from "@/types/Aladin.types";

interface BookCardProps {
  imageSrc: AladinBookData["cover"];
  title: AladinBookData["title"];
  description?: AladinBookData["description"];
}

const BookCard = ({ imageSrc, title, description }: BookCardProps) => {
  return (
    <div className="border border-primary py-1">
      <div className="relative w-[200px] h-[300px] overflow-hidden mx-auto cursor-pointer rounded-xl">
        <Image
          src={imageSrc}
          alt={title}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300 ease-in-out">
          <div className="p-4 h-full flex flex-col justify-center items-center">
            <h2 className="text-white font-bold mb-2">{title}</h2>
            <hr className="border-t border-white w-full my-2" />
            {description && (
              <p className="text-white text-sm">
                {truncateText(description, 100)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
