import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

interface AladinBooksParams {
  queryType: string;
  start: number;
}

const getAladinBooks = async ({ queryType, start = 1 }: AladinBooksParams) => {
  const params = {
    ttbkey: process.env.NEXT_PUBLIC_ALADIN_KEY,
    QueryType: queryType || "bestseller",
    MaxResults: 20,
    start,
    SearchTarget: "Book",
    output: "js",
    Version: 20131101,
    CategoryId: 0,
  };

  if (params.QueryType === "itemeditorchoice") {
    params.CategoryId = 7396;
  }

  const res = await axios.get("/ttb/api/ItemList.aspx", {
    params,
  });
  return res.data;
};

const useGetAladinBooks = (queryType: string) => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["aladinBooks", queryType],
    ({ pageParam = 1 }) => getAladinBooks({ queryType, start: pageParam }),
    {
      getNextPageParam: (lastPage, allPages) => {
        const totalpages = Math.ceil(
          lastPage.totalResults / lastPage.itemsPerPage
        );
        if (allPages.length >= totalpages) return undefined;
        return allPages.length + 1;
      },
      refetchOnWindowFocus: false,
      staleTime: 300000,
    }
  );
  return {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useGetAladinBooks;
