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
    Cover: "Big",
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

// import axios from "axios";
// import { useInfiniteQuery } from "@tanstack/react-query";

// interface AladinBooksParams {
//   queryType: string;
//   start: number;
// }

// const getAladinBooks = async ({ queryType, start = 1 }: AladinBooksParams) => {
//   const params = {
//     ttbkey: process.env.NEXT_PUBLIC_ALADIN_KEY,
//     // QueryType: "blogbest",
//     QueryType: queryType || "bestseller",
//     MaxResults: 20,
//     start,
//     SearchTarget: "Book",
//     output: "js",
//     Version: 20131101,
//     CategoryId: 0,
//   };

//   if (params.QueryType === "itemeditorchoice") {
//     params.CategoryId = 7396;
//   }

//   const res = await axios.get("/ttb/api/ItemList.aspx", {
//     params,
//   });
//   return res.data;
// };

// const useGetAladinBooks = (queryType: string) => {
//   const {
//     data,
//     isLoading,
//     error,
//     fetchNextPage,
//     hasNextPage,
//     isFetchingNextPage,
//   } = useInfiniteQuery(
//     ["aladinBooks", queryType],
//     ({ pageParam = 1 }) => getAladinBooks({ queryType, start: pageParam }),
//     {
//       getNextPageParam: (lastPage, allPages) => {
//         // 이 부분에 로직을 추가하여 다음 페이지 번호를 반환하거나,
//         // 더 이상 데이터가 없는 경우 undefined를 반환합니다.
//         // 예를 들어, lastPage에서 데이터 개수가 MaxResults보다 작으면 undefined 반환

//         // lastPage에서 데이터 개수가 20보다 작은 경우 (즉, MaxResults보다 작은 경우)
//         // 더 이상 불러올 페이지가 없다고 판단하고 undefined를 반환
//         // Math.ceil(response.data.totalResults/20)
//         const totalpages = Math.ceil(
//           lastPage.totalResults / lastPage.itemsPerPage
//         );
//         if (allPages.length >= totalpages) return undefined;
//         if (lastPage.startIndex >= totalpages) return undefined;

//         // if (lastPage.length < 20) return undefined;

//         // 그렇지 않으면 다음 페이지 번호를 반환.
//         // 이 예제에서는 간단히 지금까지 로드된 페이지 수에 1을 더하는 방식으로 다음 페이지 번호를 결정.
//         return allPages.length + 1; // 현재까지 로드된 페이지 수 + 1
//       },
//       refetchOnWindowFocus: false,
//       // staleTime: 5000,
//       staleTime: 300000,
//     }
//   );
//   return {
//     data,
//     isLoading,
//     error,
//     fetchNextPage,
//     hasNextPage,
//     isFetchingNextPage,
//   };
// };

// export default useGetAladinBooks;
