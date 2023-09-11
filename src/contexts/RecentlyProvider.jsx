import { useState, useCallback } from "react";
import { RecentlyContext } from "@/contexts/RecentlyContext";

const RecentlyContextProvider = ({ children }) => {
  const [links, setlinks] = useState([]);

  const addRecent = useCallback(({ title, url, items }) => {
    setlinks((state) => {
      const newState = [...state];
      const index = newState.findIndex((link) => link.url === url);

      if (index === -1) {
        newState.unshift({ title, url, items });
      } else if (index !== 0) {
        newState.unshift(newState.splice(index, 1)[0]);
      }
      if (newState.length > 5) {
        newState.length = 5
      }
      return newState;
    })
  }, []);

  const value = {
    addRecent,
    links
  }

  return <RecentlyContext.Provider value={value}>{children}</RecentlyContext.Provider>;
};

export default RecentlyContextProvider;