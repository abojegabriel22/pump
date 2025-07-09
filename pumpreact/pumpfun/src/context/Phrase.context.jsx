
import {createContext, useReducer, useContext, Children} from "react"
import axios from "axios"

const API = import.meta.env.VITE_API_URL
console.log("backend api", API)
const PhraseContext = createContext()

const initialState = {
  loading: false,
  error: null,
  success: null
}

const reducer = (state, action) => {
  switch(action.type){
    case "SUBMIT_START":
      return {...state, loading: true, error: null, success: null}
    
    case "SUBMIT_SUCCESS":
      return {...state, loading: false, success: action.payload}

    case "SUBMIT_ERROR":
      return {...state, loading: false, error: action.payload}

      default:
        return state
  }
}

export const PhraseProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const savePhrase = async (pumpfunPhrases) => {
    dispatch({type: "SUBMIT_START"})
    try{
      const res = await axios.post(`${API}/pumphrase`, {pumpfunPhrases})
      dispatch({type: "SUBMIT_SUCCESS", payload: res.data})
    } catch(err){
      dispatch({type: "SUBMIT_ERROR", payload: err.response?.data?.error || "something went wrong"})
    }
  }
  return (
    <PhraseContext.Provider value={{...state, savePhrase}}>
      {children}
    </PhraseContext.Provider>
  )
}
export const usePhrase = () => useContext(PhraseContext)