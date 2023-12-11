import { useState } from "react"
import styled from "styled-components"

const PIconBtn = styled.div`
    ${({theme}) => theme.iconBtns.primary}
    position: fixed;
    bottom: calc(${({theme})=>theme.height.navbar} + 0.75rem);
    right: 0.75rem;
`

type PlusBtnProps = {
    setAddDataModal: any;
}

export default function PlusBtn({setAddDataModal}:PlusBtnProps){
    return(
        <PIconBtn data-disabled={false} onClick={()=>setAddDataModal(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12.2617C4 11.9167 4.1237 11.6204 4.37109 11.373C4.61849 11.1257 4.91471 11.002 5.25977 11.002H11.0117V5.25977C11.0117 4.91471 11.1322 4.61849 11.373 4.37109C11.6139 4.1237 11.9102 4 12.2617 4C12.6068 4 12.903 4.1237 13.1504 4.37109C13.3978 4.61849 13.5215 4.91471 13.5215 5.25977V11.002H19.2734C19.612 11.002 19.9049 11.1257 20.1523 11.373C20.3997 11.6204 20.5234 11.9167 20.5234 12.2617C20.5234 12.6133 20.3997 12.9128 20.1523 13.1602C19.9049 13.401 19.612 13.5215 19.2734 13.5215H13.5215V19.2734C13.5215 19.612 13.3978 19.9049 13.1504 20.1523C12.903 20.3997 12.6068 20.5234 12.2617 20.5234C11.9102 20.5234 11.6139 20.3997 11.373 20.1523C11.1322 19.9049 11.0117 19.612 11.0117 19.2734V13.5215H5.25977C4.91471 13.5215 4.61849 13.401 4.37109 13.1602C4.1237 12.9128 4 12.6133 4 12.2617Z"
                fill="#777777"/>
            </svg>
        </PIconBtn>
    )
}