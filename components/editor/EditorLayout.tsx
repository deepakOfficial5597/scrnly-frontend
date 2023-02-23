import useEditor from "@/shared/hooks/useEditor"
import BrandingBanner from "./layout/BrandingBanner"
import EditorHeader from "./layout/EditorHeader"
import EditorPanel from "./layout/EditorPanel"
import EditorMockup from "./mockup/EditorMockup"

const EditorLayout = () => {
    const { canvas, mockup, panel } = useEditor()
    return (
        <div className="h-screen w-screen flex flex-col">
            <EditorHeader />
            <main className="flex-1 flex flex-row gap-2 bg-background-secondary p-2">
                <div className="flex-1 flex items-center justify-center bg-white rounded-md p-2"  id="scrnly-canvas-parent" style={{"background":"url('/grid.jpeg')"}}>
                    <div className={`rounded-md relative ${canvas.classNames} transition-all ease-linear`} style={canvas.styles}  id="scrnly-canvas">
                        <div className={`absolute shadow-current ${mockup.classNames}`} style={mockup.styles}>
                            <EditorMockup />
                        </div>
                        {
                            panel.branding && <BrandingBanner />
                        }
                    </div>
                </div>
                <div className="w-[450px] bg-background-primary rounded-md">
                    <EditorPanel />
                </div>
            </main>
        </div>
    )
}

export default EditorLayout