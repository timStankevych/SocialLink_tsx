import React from 'react';
import {StoreType} from './redux/store';


const StoreContext = React.createContext({} as StoreType)

type PropsType = {
    store: StoreType
    children: React.ReactNode
}

export const Provider = (props: PropsType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
            </StoreContext.Provider>
    )
}

export default StoreContext