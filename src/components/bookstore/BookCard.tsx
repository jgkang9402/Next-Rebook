import Image from "next/image";
import React from "react";
import { truncateText } from "../../../utils/commonUtils";
import { AladinBookData } from "@/types/Aladin.types";
import Link from "next/link";

interface BookCardProps {
  imageSrc: AladinBookData["cover"];
  title: AladinBookData["title"];
  description?: AladinBookData["description"];
  isbn: AladinBookData["isbn"];
  isbn13?: AladinBookData["isbn13"];
}

const BookCard = ({
  imageSrc,
  title,
  description,
  isbn,
  isbn13,
}: BookCardProps) => {
  return (
    <div className="border border-primary py-1">
      <div className="relative w-[200px] h-[300px] overflow-hidden mx-auto cursor-pointer rounded-xl">
        <Link href={`/bookstore/${isbn13 ? isbn13 : isbn}`}>
          <Image
            src={imageSrc}
            alt={title}
            width="200"
            height="300"
            sizes="100vw"
            className="h-full"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-80 transition-opacity duration-300 ease-in-out">
            <div className="p-4 h-full flex flex-col justify-center items-center">
              <h2 className="text-white font-bold mb-2">
                {truncateText(title, 60)}
              </h2>
              <hr className="border-t border-white w-full my-2" />
              {description && (
                <p className="text-white text-sm">
                  {truncateText(description, 100)}
                </p>
              )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
