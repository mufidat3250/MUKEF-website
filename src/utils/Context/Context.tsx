// import { createContext, ReactNode, useContext, useReducer } from "react";

// const initialState = {
//   tableDropdown: true,
// };
// export type State = typeof initialState;
// export type actiontype = "show";
// export type Dispatch = (acttion: actiontype) => void;
// const context = createContext<{ state: State; dispatch: Dispatch } | undefined>(
//   undefined
// );

// const dropdownReducer = (state: State, action: actiontype) => {
//   switch (action) {
//     case "show":
//       return {
//         dropDown: !state.tableDropdown,
//       };
//   }
// };

// export const CounterProvider = ({ children }: { children: ReactNode }) => {
//     const [state, dispatch] = useReducer(dropdownReducer,'')
//     return <context.Provider value={{state,dispatch}}>
//         {children}
//     </context.Provider>
// };
import { createContext, ReactNode, useContext, useReducer } from "react";
const initialState = {dropDown:false}

//types
export type State = typeof initialState 
export type ActionType = 'show'
export type Dispatch =(action:ActionType)=> void 
const context = createContext<{state:State, dispatch:Dispatch }|undefined>(undefined)

const dropDownReducer = (state:State, action:ActionType)=>{
    switch (action) {
        case 'show':            
        return {
            dropDown: !state.dropDown 
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