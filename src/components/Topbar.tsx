import { Link } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
    padding: 10px;
    width: 100%;
    height: 56px;
    background-color: ${({theme})=>theme.colors.neutral.n0};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 99;
`
const ItemsWrapper = styled.div`
    width: 100%;
    background-color: ${({theme})=>theme.colors.neutral.n0};
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
`

const Temp = styled.div`
    width: 36px;
    height: 36px;
    /* background-color: lightblue; */
`

const ProfileImg = styled.div`
    width: 36px;
    height: 36px;
    background-color: ${({theme}) => theme.colors.primary.surface};
    border-radius: 100%;
`

export default function Topbar(){
    return(
        <Wrapper>
            <ItemsWrapper>
                <Temp />
                <Link to='/'>
                    <svg width="102" height="26" viewBox="0 0 102 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M88.4111 13.5137L88.3945 14.626V20.7686L88.4277 23.6904V24.5205L88.4443 25.3008C88.3779 25.3893 88.1068 25.4336 87.6309 25.4336H87.1992L81.9863 25.5C79.7728 25.5 78.1237 25.4945 77.0391 25.4834C76.873 25.3063 76.2699 23.696 75.2295 20.6523L72.0586 12.2354L71.4609 12.3184L71.4443 14.0117V18.5107L71.5107 23.0098V24.8691C71.5107 25.3672 71.4001 25.6273 71.1787 25.6494C70.083 25.6162 69.0371 25.5996 68.041 25.5996H67.5264L65.0195 25.666H64.6875L63.4922 25.6992L63.4424 25.666C63.0771 25.3229 62.8945 25.0739 62.8945 24.9189V24.6201L62.9111 24.2881L62.9941 17.8135C62.9941 10.708 63.0605 5.33464 63.1934 1.69336L63.2266 0.31543C63.2266 0.21582 67.0394 0.127279 74.665 0.0498047C74.7314 0.0940755 74.8311 0.337565 74.9639 0.780273V0.730469L75.0635 1.0625C75.8825 3.40885 76.8786 6.10384 78.0518 9.14746C79.2249 12.18 79.8226 13.7295 79.8447 13.7959L80.4092 13.7627L80.4756 0.232422C80.4756 0.14388 81.2835 0.0996094 82.8994 0.0996094L87.0664 0.182617H88.2949C88.3724 3.84603 88.4111 8.28971 88.4111 13.5137Z" fill="#5E4EF4"/>
                        <path d="M59.8604 13.5137L59.8438 14.626V20.7686L59.877 23.6904V24.5205L59.8936 25.3008C59.8271 25.3893 59.556 25.4336 59.0801 25.4336H58.6484L53.4355 25.5C51.222 25.5 49.5729 25.4945 48.4883 25.4834C48.3223 25.3063 47.7191 23.696 46.6787 20.6523L43.5078 12.2354L42.9102 12.3184L42.8936 14.0117V18.5107L42.96 23.0098V24.8691C42.96 25.3672 42.8493 25.6273 42.6279 25.6494C41.5322 25.6162 40.4863 25.5996 39.4902 25.5996H38.9756L36.4688 25.666H36.1367L34.9414 25.6992L34.8916 25.666C34.5264 25.3229 34.3438 25.0739 34.3438 24.9189V24.6201L34.3604 24.2881L34.4434 17.8135C34.4434 10.708 34.5098 5.33464 34.6426 1.69336L34.6758 0.31543C34.6758 0.21582 38.4886 0.127279 46.1143 0.0498047C46.1807 0.0940755 46.2803 0.337565 46.4131 0.780273V0.730469L46.5127 1.0625C47.3317 3.40885 48.3278 6.10384 49.501 9.14746C50.6742 12.18 51.2718 13.7295 51.2939 13.7959L51.8584 13.7627L51.9248 0.232422C51.9248 0.14388 52.7327 0.0996094 54.3486 0.0996094L58.5156 0.182617H59.7441C59.8216 3.84603 59.8604 8.28971 59.8604 13.5137Z" fill="#5E4EF4"/>
                        <path d="M19.208 0.84668L19.1914 2.39062C19.1914 3.9069 19.1693 5.25716 19.125 6.44141C17.8301 6.55208 16.0592 6.60742 13.8125 6.60742L9.97754 6.62402V7.10547L9.94434 8.56641C9.94434 8.95378 9.96094 9.33008 9.99414 9.69531C12.7611 9.46289 14.8086 9.34668 16.1367 9.34668C17.4759 9.34668 18.2949 9.44629 18.5938 9.64551V15.207C18.5938 15.5723 18.5218 15.8158 18.3779 15.9375C18.234 16.0592 18.0127 16.1201 17.7139 16.1201H17.498L16.6016 16.0869C14.6204 16.1976 12.4235 16.2806 10.0107 16.3359L10.127 22.9434L10.1104 23.5078V25.0684C10.1104 25.4004 10.0107 25.5775 9.81152 25.5996L0.31543 25.6826C0.293294 25.6162 0.210286 25.4668 0.0664062 25.2344C0.0221354 24.5039 0 23.8841 0 23.375L0.0996094 0.282227C0.0996094 0.138346 0.852214 0.0664062 2.35742 0.0664062L2.77246 0.0830078H3.90137L11.9199 0L17.6143 0.0664062H18.1787L18.4277 0.0498047C18.7376 0.0498047 18.9424 0.121745 19.042 0.265625C19.1527 0.398438 19.208 0.592122 19.208 0.84668Z" fill="#5E4EF4"/>
                        <path d="M101.307 21.0753L101.323 21.195L101.34 23.19C101.34 23.5535 101.318 23.988 101.273 24.4934C101.229 24.9988 101.19 25.2604 101.157 25.2781L100.858 25.3047H94.8154L94.1182 25.3579C92.3916 25.3579 91.3402 25.3402 90.9639 25.3047V25.2116L90.9473 24.9589V24.3604C90.9473 22.6137 90.9805 21.164 91.0469 20.0113L91.2295 9.77021V9.37121L92.5244 9.35791L92.8066 9.37121H93.2881L93.7031 9.38451L93.9189 9.37121H95.1143L95.3633 9.35791L101.024 9.41111C101.069 9.40224 101.102 9.39781 101.124 9.39781C101.146 9.39781 101.157 9.42441 101.157 9.47761L101.174 10.7411C101.185 11.5835 101.207 12.714 101.24 14.1326C101.273 15.5424 101.29 16.54 101.29 17.1252L101.273 18.7877V19.4926L101.323 20.1975V20.6098C101.323 20.6186 101.318 20.6364 101.307 20.663V21.0753Z" fill="#5E4EF4"/>
                        <path d="M101 4.0486C100.991 4.09043 100.987 4.11552 100.987 4.12389V4.17409C100.973 4.86428 100.803 5.48546 100.477 6.03762H100.484C100.027 6.69016 99.3903 7.19213 98.5721 7.5435C97.7583 7.89487 96.9557 8.07056 96.1643 8.07056C95.3729 8.07056 94.7156 7.99735 94.1925 7.85095C93.6738 7.70873 93.1932 7.49958 92.7505 7.2235C92.3078 6.94742 91.9792 6.6818 91.7646 6.42664C91.2549 5.82428 91 4.97304 91 3.87291C91 3.83526 91.0067 3.80389 91.0201 3.77879V3.6784C91.0067 3.66167 91 3.64494 91 3.6282L91.0134 3.55918H91.0067C91.0917 2.82716 91.2571 2.34611 91.503 2.11605C91.503 2.07003 91.5343 2.01775 91.5969 1.95918V1.96546L91.6975 1.81487C92.2251 1.18324 92.8288 0.750295 93.5084 0.516047L93.7431 0.434478C94.0382 0.300622 94.4518 0.20023 94.9839 0.133302L95.1985 0.114478C95.2298 0.110295 95.2924 0.106112 95.3863 0.101929C95.4847 0.0977462 95.554 0.0893802 95.5942 0.0768312L95.8826 0.0831057C95.896 0.0789227 95.9117 0.0768312 95.9296 0.0768312C95.9475 0.0768312 95.9676 0.0789227 95.9899 0.0831057L95.9832 0.0768312C96.0101 0.0893802 96.0503 0.0956547 96.104 0.0956547C96.1218 0.0789227 96.1531 0.0705566 96.1979 0.0705566C97.1681 0.0705566 97.9931 0.2567 98.6727 0.628988L98.8068 0.685459C100.269 1.34219 101 2.46324 101 4.0486Z" fill="#5E4EF4"/>
                        <path d="M31.3594 21.5581L31.376 21.6778L31.3926 23.6728C31.3926 24.0364 31.3704 24.4709 31.3262 24.9763C31.2819 25.4817 31.2432 25.7432 31.21 25.761L30.9111 25.7876H24.8682L24.1709 25.8408C22.4443 25.8408 21.3929 25.823 21.0166 25.7876V25.6945L21 25.4418V24.8433C21 23.0965 21.0332 21.6468 21.0996 20.4941L21.2822 10.2531V9.85406L22.5771 9.84076L22.8594 9.85406H23.3408L23.7559 9.86736L23.9717 9.85406H25.167L25.416 9.84076L31.0771 9.89396C31.1214 9.88509 31.1546 9.88066 31.1768 9.88066C31.1989 9.88066 31.21 9.90726 31.21 9.96046L31.2266 11.224C31.2376 12.0663 31.2598 13.1968 31.293 14.6155C31.3262 16.0253 31.3428 17.0228 31.3428 17.608L31.3262 19.2705V19.9754L31.376 20.6803V21.0926C31.376 21.1015 31.3704 21.1192 31.3594 21.1458V21.5581Z" fill="#5E4EF4"/>
                        <path d="M31.0527 4.53145C31.0438 4.57328 31.0393 4.59837 31.0393 4.60674V4.65694C31.0259 5.34713 30.856 5.96831 30.5296 6.52046H30.5363C30.0802 7.17301 29.4431 7.67497 28.6248 8.02635C27.8111 8.37772 27.0085 8.55341 26.2171 8.55341C25.4256 8.55341 24.7684 8.4802 24.2452 8.3338C23.7266 8.19158 23.2459 7.98243 22.8032 7.70635C22.3606 7.43027 22.0319 7.16465 21.8173 6.90948C21.3076 6.30713 21.0527 5.45589 21.0527 4.35576C21.0527 4.31811 21.0594 4.28674 21.0729 4.26164V4.16125C21.0594 4.14452 21.0527 4.12778 21.0527 4.11105L21.0661 4.04203H21.0594C21.1444 3.31001 21.3098 2.82896 21.5558 2.5989C21.5558 2.55288 21.5871 2.5006 21.6496 2.44203V2.44831L21.7503 2.29772C22.2779 1.66609 22.8815 1.23314 23.5611 0.998896L23.7959 0.917327C24.091 0.783471 24.5046 0.683079 25.0366 0.616151L25.2513 0.597327C25.2826 0.593144 25.3452 0.588961 25.4391 0.584778C25.5374 0.580595 25.6067 0.572229 25.647 0.55968L25.9354 0.565955C25.9488 0.561772 25.9644 0.55968 25.9823 0.55968C26.0002 0.55968 26.0203 0.561772 26.0427 0.565955L26.036 0.55968C26.0628 0.572229 26.103 0.578504 26.1567 0.578504C26.1746 0.561772 26.2059 0.553406 26.2506 0.553406C27.2209 0.553406 28.0458 0.73955 28.7254 1.11184L28.8596 1.16831C30.3217 1.82504 31.0527 2.94609 31.0527 4.53145Z" fill="#5E4EF4"/>
                    </svg>
                </Link>
                <Link to='/login'>
                    <ProfileImg>
                        <img src="/public_assets/profile13.png" alt="profile"/>
                    </ProfileImg>
                </Link>
            </ItemsWrapper>
        </Wrapper>
    )
}