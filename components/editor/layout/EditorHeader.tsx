import Image from "next/image"
import Link from "next/link"

const EditorHeader = () => {
    return (
        <header className="flex justify-between items-center h-[50px] px-10">
            <div className="flex flex-row items-center gap-2">
                <Image src="/logo-light.svg" alt="Scrnly Logo Image" height={20} width={20}/>
                <h1 className="font-bold">Scrnly</h1>
            </div>
            <div className="flex">
                <Link href="how-to" className="text-sm mr-6"> How To ?</Link>
                <Link href="pricing" className="text-sm mr-8"> Pricing </Link>
                <Link href="signup" className="text-sm mr-2"> Singup /</Link>
                <Link href="login" className="text-sm mr-2"> Login</Link>
            </div>
        </header>
    )
}

export default EditorHeader