import { useThreads } from "@liveblocks/react";
import { useMemo } from "react";


// Returns the highest z-index of all threads
export const useMaxZIndex = () => {
  // get all threads
  const { threads } = useThreads();

  // calculate the max z-index
  return useMemo(() => {
    let max = 0;
    if(!threads) return ;
    for (const thread of threads) {
      // @ts-ignore
      if (thread.metadata.zIndex > max) {
        // @ts-ignore
        max = thread.metadata.zIndex;
      }
    }
    return max;
  }, [threads]);
};
