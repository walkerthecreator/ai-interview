import { create } from "zustand"

type BearsType = {
    bears : number ,
    killBears : () => void ,
    addBears : () => void 
}

export const useBears = create<BearsType>(( set ) => ({
    bears : 0 ,
    killBears : () => set( state => ({ bears : state.bears - 1 }) ) ,
    addBears : () => set( state => ({ bears : state.bears + 1}) )
}))
