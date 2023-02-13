import { HiCheckCircle } from "react-icons/hi"
const SolidColorSelector = ({active = false}:SolidColorSelectorProps) => {
    return <>
        <div className="relative flex-1 hover:border-2 hover:border-primary-default rounded-md bg-orange-400">
            {
                active && (
                    <span className="absolute top-1 left-1">
                        <HiCheckCircle className="text-primary-default"/>
                    </span> 
                )   
            }
        </div>
    </>
}

type SolidColorSelectorProps = {
    active: boolean
}

export default SolidColorSelector