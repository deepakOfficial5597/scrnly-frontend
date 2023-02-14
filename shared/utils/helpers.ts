import { BACKGROUND_CONFIG, GRADIENT_CONFIG, IMAGE_POSITION_CONFIG, MOCKUP_CONFIG, SIZE_CONFIG } from "../constants/config";
import { GradientConfig, MockupConfig, MockupHeaderTypes } from "../types/shared.types";

export function getDefaultGradient():GradientConfig{
    return GRADIENT_CONFIG[0];
}

export function getDefaultMockup():MockupConfig{
    return MOCKUP_CONFIG[0];
}

export function getDefaultBackgroundType():string{
    return BACKGROUND_CONFIG.GRADIENT;
}

export function getDefaultImagePosition():string{
    return IMAGE_POSITION_CONFIG.CENTER_CENTER;
}
export function getDefaultBorderRadius():string{
    return "8";
}
export function getDefaultBoxShadow():number{
    return 0;
}
export function getDefaultImageSize():string{
    return "SMALL";
}
export function getDefaultCanvasSize():string{
    return SIZE_CONFIG[0];
}
export function getDefaultImagePositioningStyles():any{
    return {
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)" 
    }
}
export function getPositionStyles(value:string){ return {}}
export function getMockupBorderRadiusStyles(mockupHeader:MockupHeaderTypes,borderRadius:string = "8px"):any{
    if(mockupHeader === MockupHeaderTypes.NO_FRAME)
        return {
            borderRadius
        }
    return {
        borderRadius: "none",
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius
    }
}

export function getCanvasSizeStyles(size:string){
    switch(size){
        case("1:1"):
            return {
                height: "570px",
                width: "570px"
            }
        case("16:9"):
            return {
                height: "450px",
                width: "800px"
            }
        case("Twitter Post"):
            return {
                height: "300px",
                width: "600px"
            }
        case("Instagram Post"):
            return {
                height: "570px",
                width: "400px"
            }
        default:
            return {
                height: "570px",
                width: "570px"
            }
    }
}
