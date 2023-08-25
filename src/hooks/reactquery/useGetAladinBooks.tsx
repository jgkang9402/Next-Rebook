import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface AladinBooksParams {
  queryType: string;
}

const getAladinBooks = async ({ queryType }: AladinBooksParams) => {
  const params = {
    ttbkey: process.env.NEXT_PUBLIC_ALADIN_KEY,
    QueryType: queryType || "bestseller",
    MaxResults: 20,
    start: 1,
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
  const { data, isLoading, error } = useQuery(
    ["aladinBooks", queryType],
    () => getAladinBooks({ queryType }),
    {
      refetchOnWindowFocus: false,
      staleTime: 300000,
    }
  );
  return { data, isLoading, error };
};

export default useGetAladinBooks;
