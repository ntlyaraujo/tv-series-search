/* import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Show } from "core/types";

interface IShowContext {
  setShowDetails: Dispatch<SetStateAction<{}>>;
  showDetails: Show;
}

type Props = {
  children?: React.ReactNode;
};

export const ShowContext = createContext<IShowContext | null>(null);

export const ShowProvider = (props: Props) => {
   
  const [showDetails, setShowDetails] = useState();
  const value:IShowContext = {showDetails, setShowDetails };

  return (
    <ShowContext.Provider value={value}>{props.children}</ShowContext.Provider>
  );
};
 */
export {}