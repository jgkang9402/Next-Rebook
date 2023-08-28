import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface AladinBooksParams {
  bookId: string;
}

const getAladinBookDetail = async ({ bookId }: AladinBooksParams) => {
  const params = {
    ttbkey: process.env.NEXT_PUBLIC_ALADIN_KEY,
    output: "js",
    ItemId: bookId,
    Version: 20131101,
    OptResult: "ratingInfo,Toc,Story,cardReviewImgList",
    Cover: "Big",
  };

  const res = await axios.get("/ttb/api/ItemLookUp.aspx", {
    params,
  });
  return res.data;
};

const useGetAladinBookDetail = (bookId: string) => {
  const { data, isLoading, error } = useQuery(
    ["aladinBookDetail", bookId],
    () => getAladinBookDetail({ bookId }),
    {
      refetchOnWindowFocus: false,
    }
  );
  return { data, isLoading, error };
};

export default useGetAladinBookDetail;
