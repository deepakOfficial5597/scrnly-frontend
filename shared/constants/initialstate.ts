import EditorState from "../types/editor.state"
import { Canvas, Mockup, MockupHeaderTypes, Panel } from "../types/shared.types"
import { getCanvasSizeStyles, getDefaultBackgroundType, getDefaultBoxShadow, getDefaultCanvasSize, getDefaultGradient, getDefaultImagePosition, getDefaultImagePositioningStyles, getDefaultImageSize, getDefaultMockup } from "../utils/helpers"
import { SHADOW_CONFIG } from "./config"

export const CANVAS_INITIAL_STATE:Canvas = {
    styles: {
        background: getDefaultGradient().gradient,
        ...getCanvasSizeStyles(getDefaultCanvasSize())
    },
    classNames: ""
}
export const MOCKUP_INITIAL_STATE:Mockup = {
    styles: {
        height: "50%",
        width: "50%",
        borderRadius: "8px",
        ...getDefaultImagePositioningStyles()
    },
    classNames:SHADOW_CONFIG[getDefaultBoxShadow()],
    type: MockupHeaderTypes.NO_FRAME,
    imageUrl: "https://th.bing.com/th/id/OIP.QJjN2LrOLtSwHKVUKUzSPAHaEK?pid=ImgDet&rs=1"
}
export const PANEL_INITIAL_STATE:Panel = {
    backgroundType: getDefaultBackgroundType(),
    backgroundValue: getDefaultGradient().title,
    branding: true,
    canvasSize: getDefaultCanvasSize(),
    imagePosition: getDefaultImagePosition(),
    imageSize: getDefaultImageSize(),
    mockup: getDefaultMockup().title
}
export const EDITOR_CONTEXT_INITIAL_STATE:EditorState = {
    canvas : CANVAS_INITIAL_STATE,
    mockup: MOCKUP_INITIAL_STATE,
    panel: PANEL_INITIAL_STATE,
    setCanvas: () => {},
    setMockup: () => {},
    setPanel: () => {}
}