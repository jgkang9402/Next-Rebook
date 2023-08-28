export interface tabType {
  menuTitle: string;
  menuType: string;
}
interface MenuTabProps {
  tabList: tabType[];
  currentMenu: string;
  handleCurrentMenu: (menu: string) => void;
}
const MenuTab = ({ tabList, currentMenu, handleCurrentMenu }: MenuTabProps) => {
  return (
    <div className="bg-white">
      <ul className="flex">
        {tabList.map((item: tabType) => {
          return (
            <li key={item.menuType} className="w-full flex-1 block">
              <button
                onClick={() => handleCurrentMenu(item.menuType)}
                className={`w-full py-4 px-6 block hover:text-primary hover:border-primary focus:outline-none ${
                  currentMenu === item.menuType
                    ? "text-primary border-primary"
                    : "text-gray-600"
                } border-b-2 font-medium`}
              >
                {item.menuTitle}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuTab;
