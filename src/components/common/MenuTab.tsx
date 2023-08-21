"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export interface tabType {
  labelName: string;
  pathType: string;
}

interface MenuTabProps {
  tabList: tabType[];
}
const MenuTab = ({ tabList }: MenuTabProps) => {
  const router = useRouter();
  const search = useSearchParams();

  return (
    <div className="bg-white">
      <ul className="flex">
        {tabList.map((item: tabType) => {
          return (
            <li key={item.pathType} className="w-full flex-1 block">
              <button
                onClick={() => router.push(`?curtab=${item.pathType}`)}
                className={`w-full py-4 px-6 block hover:text-primary hover:border-primary focus:outline-none ${
                  search.get("curtab") === item.pathType
                    ? "text-primary border-primary"
                    : "text-gray-600"
                } border-b-2 font-medium`}
              >
                {item.labelName}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuTab;
