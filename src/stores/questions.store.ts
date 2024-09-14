import { create } from "zustand"

type UserDataType = {
    question : string ,
    answer : string
}

type StoreType = {
    userData : UserDataType [] | [] ,
    addQuestion : (question : question ) => void ,
    removeQuestion : () => void 
}

export type question = {
    question : string  ,
    answer : string ,
}

export const useQuestions = create<StoreType>((set) => ({
    userData : [] ,
    addQuestion : ( question ) => set( state => ({ userData : [...state.userData , question  ] })) ,
    removeQuestion : () => set( state => ({ userData : [] }))
}))




