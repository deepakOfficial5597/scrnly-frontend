import { signIn } from "next-auth/react"
const Login = () => {
    return (
        <div className="w-screen h-screen bg-primary-default flex justify-center items-center">
            <div className="w-[500px] h-[500px] flex flex-col bg-white items-center p-4 gap-4">
                <h1 className="text-3xl font-bold"> Login to <span className="text-primary-default">Scrnly</span> </h1>
                <button className="text-xl bg-primary-default text-text-secondary px-4 py-2" onClick={() => signIn("github")}> Login Using Github </button>
            </div>
        </div>
    )
}

export default Login