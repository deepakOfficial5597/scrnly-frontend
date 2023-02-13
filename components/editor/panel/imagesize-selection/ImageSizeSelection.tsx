import Button from "@/components/base/Button"
import useEditor from "@/shared/hooks/useEditor"
import { useState } from "react"

const ImageSizeSelection = () => {
    const { setMockup } = useEditor()
    const [selected, setSelected] = useState("SMALL")

    const changeSizeSelection = (size:string) => {
        setSelected(size)
        setMockup((previousMockup) => {
            const tmpSize = size === "SMALL" ? 25 : (size === "MEDIUM" ? 50 : 75)
            return {
            ...previousMockup,
            styles: {
                ...previousMockup.styles,
                height: tmpSize + "%",
                width: tmpSize + "%",
                objectFit: "cover",
                backgroundRepeat: "no-repeat"
            }
        }})
    }
    return <>
        <h1 className="mb-2 font-bold text-sm"> Image Size </h1>
        <div className="flex flex-row gap-4">
            <div onClick={() => changeSizeSelection("SMALL")}>
                <Button title="Small" active={selected == "SMALL"}/>
            </div>
            <div onClick={() => changeSizeSelection("MEDIIUM")}>
                <Button title="Medium" active={selected == "MEDIIUM"}/>
            </div>
            <div onClick={() => changeSizeSelection("LARGE")}>
                <Button title="Large" active={selected == "LARGE"} />
            </div>
        </div>
    </>
}

export default ImageSizeSelection