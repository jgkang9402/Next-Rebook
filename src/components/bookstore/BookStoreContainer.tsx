"use client";
import BookCard from "@/components/bookstore/BookCard";
import GridBox from "@/components/common/GridBox";
import MenuTab, { tabType } from "@/components/common/MenuTab";
import useGetAladinBooks from "@/hooks/reactquery/useGetAladinBooks";
import { AladinBookData } from "@/types/Aladin.types";
import { useState } from "react";
import Spinner from "../common/Spinner";

const menuList: tabType[] = [
  {
    menuTitle: "베스트셀러",
    menuType: "bestseller",
  },
  {
    menuTitle: "신규베스트",
    menuType: "itemnewspecial",
  },
  {
    menuTitle: "블로거추천",
    menuType: "blogbest",
  },
  {
    menuTitle: "개발도서",
    menuType: "itemeditorchoice",
  },
];

const BookStoreContainer = () => {
  const [currentMenu, setCurrentMenu] = useState("bestseller");
  const { data, isLoading } = useGetAladinBooks(currentMenu);

  const handleCurrentMenu = (menu: string) => setCurrentMenu(menu);

  return (
    <div className="flex flex-col space-y-4 h-full">
      <MenuTab
        tabList={menuList}
        currentMenu={currentMenu}
        handleCurrentMenu={handleCurrentMenu}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <GridBox>
          {data?.item?.map((item: AladinBookData) => (
            <BookCard
              key={item.title}
              imageSrc={item.cover}
              title={item.title}
              description={item.description}
            />
          ))}
        </GridBox>
      )}
    </div>
  );
};

export default BookStoreContainer;
