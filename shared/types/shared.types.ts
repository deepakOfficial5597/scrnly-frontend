export interface Canvas {
    styles?: any,
    classNames?: string
}
export interface Mockup {
    styles?: any,
    classNames?: string,
    type: MockupHeaderTypes,
    imageUrl: string
}
export interface Panel {
    background: string
}
export interface GradientConfig {
    title: string,
    gradient: string
}
export interface MockupConfig {
    title: string,
    imagePath: string,
    type: MockupHeaderTypes
}
export enum MockupHeaderTypes {
    NO_FRAME = "No frame",
    MACKBOOK_DARK = "Macbook dark",
    MACKBOOK_LIGHT = "Macbook light",
    WINDOWS_DARK = "Window dark",
    WINDOWS_LIGHT = "Window light"
}