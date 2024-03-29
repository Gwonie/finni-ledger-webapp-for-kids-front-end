import CheckingButton from "components/CheckingButton"
import styled from "styled-components"
import {useState} from "react"
import FormTop from "../FormTop"
import TypingInput from "../TypingInput"
import { CheckBtns } from "model/model"

const HelpingQ = styled.div`
    /* background-color: blanchedalmond; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    path{
        fill: ${({theme}) => theme.colors.neutral.n100};
    }
    p{
        color: ${({theme}) => theme.colors.neutral.n100};
        ${({theme}) => theme.fonts.body14m}
    }
    margin-bottom: 0.5rem;
`
const HelpingA = styled.div`
    background-color: ${({theme}) => theme.colors.neutral.n15};
    border-radius: 0.5rem;
    opacity: 0.8;
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    p{
        color: ${({theme}) => theme.colors.neutral.n60};
        ${({theme}) => theme.fonts.body14r}
    }
`

const buttonArr: CheckBtns = [{id: 1, text: "매일", active: false},
        {id: 2, text: "일주일에 한 번", active: false},
        {id: 3, text: "2주에 한 번", active: false},
        {id: 4, text: "한 달에 한 번", active: false}];

export default function ReceivingCycle(){

    const [notTyping, setNotTyping] = useState<boolean>(true)

    return(
        <>
            <FormTop type={"ledger"} step={"first"} text={"용돈 주기"} title={"용돈 언제마다 받아요?"} detail={undefined}/>
            {notTyping?
            (<>
                <CheckingButton nextPage={"/allowanceInfo/amount"} buttonArr={buttonArr} setNotTyping={setNotTyping}/>
                <HelpingQ>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9956 20.9911C16.9167 20.9911 20.9911 16.9079 20.9911 11.9956C20.9911 7.07447 16.9079 3 11.9868 3C7.07447 3 3 7.07447 3 11.9956C3 16.9079 7.08329 20.9911 11.9956 20.9911ZM11.9956 19.4919C7.83292 19.4919 4.50809 16.1583 4.50809 11.9956C4.50809 7.83292 7.8241 4.49927 11.9868 4.49927C16.1495 4.49927 19.4919 7.83292 19.4919 11.9956C19.4919 16.1583 16.1583 19.4919 11.9956 19.4919Z" fill="#777777"/>
                        <path d="M11.8104 13.8211C12.2515 13.8211 12.5248 13.5389 12.5248 13.195C12.5248 13.1597 12.5248 13.1156 12.5248 13.0891C12.5248 12.5953 12.807 12.2778 13.4244 11.8721C14.2799 11.3077 14.8884 10.7962 14.8884 9.73785C14.8884 8.27386 13.5831 7.48013 12.0839 7.48013C10.567 7.48013 9.57039 8.20331 9.33227 9.01468C9.28818 9.15579 9.26172 9.29689 9.26172 9.44682C9.26172 9.84368 9.57039 10.0553 9.86143 10.0553C10.1613 10.0553 10.3553 9.91423 10.5141 9.70257L10.6728 9.49091C10.9815 8.9794 11.44 8.67955 12.0309 8.67955C12.8335 8.67955 13.3538 9.13815 13.3538 9.80841C13.3538 10.4081 12.9834 10.6992 12.2162 11.2371C11.5811 11.678 11.1049 12.1455 11.1049 13.0098C11.1049 13.0451 11.1049 13.0891 11.1049 13.1244C11.1049 13.583 11.3607 13.8211 11.8104 13.8211ZM11.7928 16.4493C12.3044 16.4493 12.7453 16.0436 12.7453 15.532C12.7453 15.0206 12.3132 14.6149 11.7928 14.6149C11.2725 14.6149 10.8404 15.0294 10.8404 15.532C10.8404 16.0347 11.2813 16.4493 11.7928 16.4493Z" fill="#777777"/>
                    </svg>
                    <p>용돈을 꼭 주기적으로 받아야 하나요?</p>
                </HelpingQ>
                <HelpingA>
                    <p>용돈을 주기적으로 받는 것은 중요해요! (중요한 이유 어쩌고 저쩌고)</p>
                </HelpingA>
            </>
            ):(
            <TypingInput nextPage={"/allowanceInfo/amount"} unit={"일"}/>
            )}
        </>
    )
}