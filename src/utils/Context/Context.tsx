import { createContext, ReactNode, useContext, useReducer } from "react";
const initialState = {dropDown:false, select: 0}

//types
export type State = typeof initialState 
export type ActionType = 'toggle' | 'selected';
export type Dispatch =(action:ActionType)=> void 
const context = createContext<{state:State, dispatch:Dispatch }|undefined>(undefined)

const dropDownReducer = (state:State, action:ActionType)=>{
    switch (action) {
        case 'toggle':            
        return {
            ...state, dropDown: !state.dropDown
        }
        case 'selected':
            return {
                ...state, selected: state.select + 1
            }
    }
}

const ContextProvider =({children}:{children:ReactNode})=>{
    const [state, dispatch] = useReducer(dropDownReducer, initialState)

    return <context.Provider value={{state, dispatch}}>
            {children}
    </context.Provider>
}
export default ContextProvider

// hooks
export const useContent = ()=>{
    let newcontext = useContext(context)
    if(!newcontext) throw Error ('Use content must be used inside content Provider')
    return newcontext
}