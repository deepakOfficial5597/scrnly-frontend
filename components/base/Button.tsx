const Button = ({ title, active = false }:ButtonProps) => {
    return (
        <button className={`px-3 py-1.5 sm:text-xs md:text-sm rounded-md border ${active ? 'border-primary-default hover:border-primary-default text-primary-default' : 'border-primary-accent hover:border-primary-accent text-primary-accent'}`}> { title } </button>
    )
}

type ButtonProps = {
    title: string,
    active:boolean
}

export default Button