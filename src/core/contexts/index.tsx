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