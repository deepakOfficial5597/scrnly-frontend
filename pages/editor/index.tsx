import Head from "next/head"
import EditorLayout from "@/components/editor/EditorLayout"
import EditorContextProvider from "@/shared/context/EditorContext"

const editor = () => {
    return (
        <EditorContextProvider>
            <Head>

            </Head>
            <EditorLayout />
        </EditorContextProvider>
    )
}

export default editor