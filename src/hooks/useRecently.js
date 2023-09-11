import { useContext } from "react";
import { RecentlyContext } from "@/contexts/RecentlyContext";

const useRecently = () => {
  return useContext(RecentlyContext);
};

export default useRecently