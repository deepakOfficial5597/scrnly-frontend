import useEditor from "@/shared/hooks/useEditor"
import { getMockupBorderRadiusStyles } from "@/shared/utils/helpers"
import MockupHeader from "./MockupHeader"

const EditorMockup = () => {
    const {mockup} = useEditor()
    return (
        <div className="w-full h-full flex flex-col">
            <MockupHeader />
            <div className={`flex-1 bg-no-repeat bg-cover bg-center shadow-current ${mockup.classNames}`}
            style={{ background : `url(${mockup.imageUrl})`, ...getMockupBorderRadiusStyles(mockup.type, mockup?.styles?.borderRadius) }}
            ></div>
        </div>
        
    )
}

export default EditorMockup