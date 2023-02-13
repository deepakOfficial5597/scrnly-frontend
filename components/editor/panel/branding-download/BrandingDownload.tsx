import BrandingButton from "./BrandingButton"
import * as htmlToImage from 'html-to-image';
import {saveAs} from 'file-saver';

const BrandingDownload = () => {

    const downloadCanvas = () =>{
        var node:HTMLElement = document.getElementById('scrnly-canvas')!;
        htmlToImage.toBlob(node)
        .then(function (blob:any) {
            saveAs(blob,"scrnly-canvas.png")
        });
    }

    return <>
        <div className="flex flex-row items-center justify-between">
            <div className="flex-1">
                <BrandingButton />
            </div>
            <div className="flex flex-row items-center">
                <button className="bg-indigo-900 rounded-md text-white px-3 text-xs h-[32px]" onClick={downloadCanvas}>Download</button>
            </div>
        </div>
    </>
}

export default BrandingDownload