import { useEffect } from 'react'

import EditorLayout from "@/components/editor/EditorLayout"
import EditorContextProvider from "@/shared/context/EditorContext"
const editor = () => {

    return (
        <EditorContextProvider>
            <EditorLayout />
        </EditorContextProvider>
    )
}

export default editor