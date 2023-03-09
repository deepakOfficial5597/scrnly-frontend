import { useRouter } from 'next/router'
import { useEffect } from 'react'

import EditorLayout from "@/components/editor/EditorLayout"
import EditorContextProvider from "@/shared/context/EditorContext"
import { useSession } from 'next-auth/react';
const editor = () => {
    const router = useRouter()
    const { data: session, status } = useSession()

    const initiateDefaultEditor = () => {}
    const initiateSavedEditor = (id:string) => {}
    useEffect(()=>{
        // if(!router.query){
        //     initiateDefaultEditor()
        // }else{
        //     console.log(status)
        //     if(session && status === "authenticated"){
        //         router.query.eid ? initiateSavedEditor(router.query.eid as string) : initiateDefaultEditor()
        //     }else{
        //         router.push('/login')
        //     }
        // }
    },[])

    return (
        <EditorContextProvider>
            <EditorLayout />
        </EditorContextProvider>
    )
}

export default editor