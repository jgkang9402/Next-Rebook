import { ReactNode } from "react";

const GridBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {children}
    </div>
  );
};

export default GridBox;
