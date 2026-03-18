//svg
import svg from './upload-icon.svg'


export const X = ({ height }) => {
    return (
        <svg width="17" height={height ? height + "" : "16"} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12L12.5 4M4.5 4L12.5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}


export const UploadIcon = ({ height }) => {
    return (
        <img src={svg} alt="" />
    )
}

export const PlusIcon = ({ height }) => {
    return (
        <svg width="16" height={height ? height : "17"} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group 3">
                <line id="Line 2" x1="7.72705" y1="0.999834" x2="7.70024" y2="15.9998" stroke="#F05801" stroke-width="2" />
                <line id="Line 3" x1="15.5121" y1="9.21289" x2="0.512153" y2="9.18608" stroke="#F05801" stroke-width="2" />
            </g>
        </svg>
    )
}
