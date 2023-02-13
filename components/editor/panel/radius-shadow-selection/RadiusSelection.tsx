import useEditor from "@/shared/hooks/useEditor"
import { getDefaultBorderRadius, getMockupBorderRadiusStyles } from "@/shared/utils/helpers"
import { useState } from "react"

const RadiusSelection = () => {

    const { mockup, setMockup } = useEditor()
    const [radius,setRadius] = useState(getDefaultBorderRadius())

    const changeRadius = (value:string) => {
        setRadius(value)
        setMockup((previousMockup) => {
            return {
            ...previousMockup,
            styles: { ...previousMockup.styles , ...getMockupBorderRadiusStyles(mockup.type, value+"px")}
        }})
    }

    return <>
        <input type="range" className="range accent-primary-default" value={radius} max={100} onChange={(e) => changeRadius(e.target.value)}/>
    </>
}

export default RadiusSelection