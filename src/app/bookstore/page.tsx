import MenuTab, { tabType } from "@/components/common/MenuTab";

const BookStorePage = () => {
  const menuList: tabType[] = [
    {
      labelName: "베스트셀러",
      pathType: "bestseller",
    },
    {
      labelName: "신규베스트",
      pathType: "itemnewspecial",
    },
    {
      labelName: "블로거추천",
      pathType: "blogbest",
    },
    {
      labelName: "개발도서",
      pathType: "itemeditorchoice",
    },
  ];
  return (
    <div>
      <MenuTab tabList={menuList} />
    </div>
  );
};

export default BookStorePage;
