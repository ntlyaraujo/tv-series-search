import { Show } from "core/types";
import { emptyShow } from "utils/constants";
import { createContext, useContext } from "react"

export type GlobalContent = {
  copy: Show
  setCopy:(c: Show) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
copy: emptyShow, // set a default value
setCopy: () => {},
})
export const useGlobalContext = () => useContext(MyGlobalContext)
/* interface IShowContext {
  showDetails: ShowDetails ;
  setShowDetails: React.Dispatch<React.SetStateAction<Show>>
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
