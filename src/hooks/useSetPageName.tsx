import { useLayoutEffect } from "react";

const useSetPageName = (name: string) => {
  useLayoutEffect(() => {
    document.title = name;
  }, [name]);
};

export default useSetPageName;
