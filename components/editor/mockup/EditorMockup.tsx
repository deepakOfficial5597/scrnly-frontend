import useEditor from "@/shared/hooks/useEditor"
import { getMockupBorderRadiusStyles } from "@/shared/utils/helpers"
import MockupHeader from "./MockupHeader"

const EditorMockup = () => {
    const {mockup} = useEditor()
    return (
        <div className="relative w-full h-full flex flex-col">
            <MockupHeader />
            <div className={`flex-1 shadow-current ${mockup.classNames}`}
            style={{ background : `url(${mockup.imageUrl})`, ...getMockupBorderRadiusStyles(mockup.type, mockup?.styles?.borderRadius),backgroundRepeat:"no-repeat",backgroundOrigin:"border-box",overflow:"hidden",backgroundPosition:"center",backgroundSize:"cover" }}
            ></div>
            
        </div>
        
    )
}

export default EditorMockup