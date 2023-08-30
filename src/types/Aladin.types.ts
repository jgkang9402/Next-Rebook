export interface AladinBookData {
  adult: boolean;
  author: string;
  categoryId: number;
  categoryName: string;
  cover: string;
  customerReviewRank: number;
  description: string;
  fixedPrice: boolean;
  isbn: string;
  isbn13: string;
  itemId: number;
  link: string;
  mallType: string;
  mileage: number;
  priceSales: number;
  priceStandard: number;
  pubDate: string;
  publisher: string;
  salesPoint: number;
  stockStatus: string;
  subInfo: object;
  title: string;
}

export interface AladinBookDetailData {
  title: string;
  link: string;
  author: string;
  pubDate: string;
  description: string;
  isbn: string;
  isbn13: string;
  itemId: number;
  priceSales: number;
  priceStandard: number;
  mallType: string;
  stockStatus: string;
  mileage: number;
  cover: string;
  categoryId: number;
  categoryName: string;
  publisher: string;
  salesPoint: number;
  adult: boolean;
  fixedPrice: boolean;
  customerReviewRank: number;
  subInfo: {
    cardReviewImgList?: string[];
    itemPage: number;
    originalTitle: string;
    subTitle: string;
    toc?: string;
    story?: string;
    ratingInfo: {
      ratingScore: number;
      ratingCount: number;
      commentReviewCount: number;
      myReviewCount: number;
    };
  };
}
