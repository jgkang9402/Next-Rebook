"use client";
import BookCard from "@/components/bookstore/BookCard";
import GridBox from "@/components/common/GridBox";
import MenuTab, { tabType } from "@/components/common/MenuTab";
import useGetAladinBooks from "@/hooks/reactquery/useGetAladinBooks";
import { AladinBookData } from "@/types/Aladin.types";
import { useState } from "react";
import Spinner from "../common/Spinner";
import useIntersectionObserver from "@/hooks/common/useIntersectionObserver";
import { useRouter, useSearchParams } from "next/navigation";

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
  const router = useRouter();
  const params = useSearchParams();
  const [currentMenu, setCurrentMenu] = useState(
    params.get("currentMenu") ? params.get("currentMenu") : "bestseller"
  );
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetAladinBooks(currentMenu);
  const { targetRef } = useIntersectionObserver(handleVisibility);

  const handleCurrentMenu = (menu: string) => {
    setCurrentMenu(menu);
    router.replace(`?currentMenu=${menu}`);
  };

  function handleVisibility(isVisible: boolean) {
    if (isVisible && hasNextPage && !isFetchingNextPage) fetchNextPage();
  }

  return (
    <div className="flex flex-col space-y-4 h-full">
      <MenuTab
        tabList={menuList}
        currentMenu={currentMenu ? currentMenu : "bestseller"}
        handleCurrentMenu={handleCurrentMenu}
      />
      {isLoading ? (
        <Spinner spinnerBoxHeight="h-[60vh]" />
      ) : (
        <GridBox>
          {data?.pages
            .flatMap((page) => page.item)
            .map((item: AladinBookData) => (
              <BookCard
                key={item.title}
                imageSrc={item.cover}
                title={item.title}
                description={item.description}
                isbn={item.isbn}
                isbn13={item.isbn13}
              />
            ))}
        </GridBox>
      )}
      <div ref={targetRef}>{isFetchingNextPage && <Spinner />}</div>
    </div>
  );
};

export default BookStoreContainer;
