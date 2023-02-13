import Button from "@/components/base/Button"
import useEditor from "@/shared/hooks/useEditor"
import { useState } from "react"
import { SIZE_CONFIG } from "@/shared/constants/config"
import { getCanvasSizeStyles, getDefaultCanvasSize } from "@/shared/utils/helpers"

const CanvasSizeSelection = () => {
    
    const {setCanvas} = useEditor()
    const [selected, setSelected] = useState(getDefaultCanvasSize())

    const changeSizeSelection = (size:string) => {
        setSelected(size)
        setCanvas((previousCanvas) => {
            return {
            ...previousCanvas, styles: { ...previousCanvas.styles, ...getCanvasSizeStyles(size) }
            }
        })
    }
    return <>
        <h1 className="mb-2 font-bold text-sm"> Canvas Size </h1>
        <div className="flex flex-row gap-4">
            {
                SIZE_CONFIG.map((individual_size,sizeIndex)=>{
                    return (
                        <div onClick={() => changeSizeSelection(individual_size)}>
                            <Button title={individual_size} active={selected == individual_size}/>
                        </div>
                    )
                })
            }
        </div>
    </>
}

export default CanvasSizeSelection