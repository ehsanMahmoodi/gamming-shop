import { createContext, useState } from "react";

export const PublicContext = createContext({
  openCollapsedMenu: false,
  setOpenCollapsedMenu: () => {},
  openCollapsedSearchBox: false,
  setOpenCollapsedSearchBox: () => {},
});
export const PublicCtx = ({ children }) => {
  const [openCollapsedMenu, setOpenCollapsedMenu] = useState(false);
  const [openCollapsedSearchBox, setOpenCollapsedSearchBox] = useState(false);
  return (
    <PublicContext.Provider
      value={{
        openCollapsedMenu,
        setOpenCollapsedMenu,
        openCollapsedSearchBox,
        setOpenCollapsedSearchBox,
      }}
    >
      {children}
    </PublicContext.Provider>
  );
};
