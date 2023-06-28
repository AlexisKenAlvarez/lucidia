
import { LiaTelegramPlane } from 'react-icons/lia'
import { TfiTwitter } from 'react-icons/tfi'
import { AiOutlineYoutube, AiOutlineMail } from 'react-icons/ai'
import { FaRedditAlien, FaInstagram, FaMobileAlt } from 'react-icons/fa'
import { RiTiktokLine } from 'react-icons/ri'
import { RxDiscordLogo } from 'react-icons/rx'

const Footer = () => {

    const icons = [
        {
            link: '',
            icon: <LiaTelegramPlane />
        },
        {
            link: '',
            icon: <RxDiscordLogo />
        },
        {
            link: '',
            icon: <TfiTwitter />
        },
        {
            link: '',
            icon: <AiOutlineYoutube />
        },
        {
            link: '',
            icon: <FaRedditAlien />
        },
        {
            link: '',
            icon: <FaInstagram />
        },
        {
            link: '',
            icon: <RiTiktokLine />
        },
    ]

    const general = [
        'PRIVACY POLICY',
        'TERMS AND CONDITIONS',
        'TOKEN SALE TERMS AND CONDITIONS'
    ]

    const company = [
        'contact us',
        'FREQUENTLY ASKED QUESTIONS',
        'ANTI-MONEY LAUNDERING POLICY'
    ]

    return (
        <footer className="w-full h-auto min-h-screen relative pb-16">
            <div className="max-w-[1400px] mx-auto w-full text-white mt-28">
                <div className="text-center mt-10">
                    <h1 className="text-[46px] font-semibold font-primary bg-clip-text bg-gradient-to-r w-fit mx-auto from-white via-white to-[#c4f4fe] text-transparent">
                        Join community of 100k+ Lucidians
                    </h1>
                    <p className="font-medium font-primary text-footergry text-[22px]">Fore more details about our progress and workflow be sure to follow</p>
                </div>

                <ul className="flex w-fit mx-auto mt-10 text-4xl gap-x-7">
                    {icons.map((items, i) => {
                        return (
                            <li className="" key={i}>
                                <a href={items.link} target="_blank" rel="noopener noreferrer" className="">
                                    {items.icon}
                                </a>
                            </li>
                        )
                    })}
                </ul>

            </div>

            <img src="/hero/navline.webp" alt="navline" className="mt-28 mx-auto w-full object-cover relative left-0 right-0 opacity-70" />

            <div className="max-w-[1400px] mx-auto w-full text-white mt-28 flex justify-between">
                <div className="">
                    <img src="/hero/logo.webp" alt="Logo" className="" />
                    <p className="font-primary font-medium max-w-[33rem] mt-7">YOUR JURISDICTION MAY NOT REGULATE CRYPTOCURRENCIES. THE VALUE OF CRYPTOCURRENCIES MAY RISE AND FALL. PROFITS MAY BE SUBJECT TO CAPITAL GAINS TAXES OR OTHER LOCAL TAXES.</p>
                    <div className="text-footergry flex items-center gap-x-16 mt-5">
                        <div className="flex items-center gap-x-[5px]">
                            <AiOutlineMail className="text-white text-2xl" />
                            <a href="mailto:hello@lucidia.io" className="font-medium font-primary">
                                hello@lucidia.io
                            </a>
                        </div>

                        <div className="flex items-center gap-x-[5px]">
                            <FaMobileAlt className="text-white text-xl" />
                            <p className="font-medium font-primary">347-519-5430</p>
                        </div>
                    </div>
                </div>

                <div className="font-primary flex gap-x-20">
                    <div className="">
                        <h2 className="font-semibold text-[22px]">GENERAL</h2>
                        <ul className="flex flex-col gap-y-2 mt-8">
                            {general.map((items, i) => {
                                return (
                                    <li className="font-secondary font-semibold text-sm text-footergry relative w-fit" key={i}>
                                        <div className={`w-7 h-3 bg-grn absolute -right-9 top-0 bottom-0 my-auto flex items-center justify-center ${i === 0 ? 'block' : 'hidden'}`}>
                                            <h5 className="text-[8px] font-primary font-bold text-center text-black mt-[2px]">NEW</h5>
                                        </div>
                                        <a href="" className="">
                                            {items}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="">
                        <h2 className="font-semibold text-[22px]">COMPANY</h2>
                        <ul className="flex flex-col gap-y-2 mt-8">
                            {company.map((items, i) => {
                                return (
                                    <li className="font-secondary font-semibold text-sm text-footergry relative w-fit uppercase" key={i}>
                                        <div className={`w-7 h-3 bg-cyan absolute -right-9 top-0 bottom-0 my-auto flex items-center justify-center ${i === 2 ? 'block' : 'hidden'}`}>
                                            <h5 className="text-[8px] font-primary font-bold text-center text-black mt-[2px]">NEW</h5>
                                        </div>
                                        <a href="" className="">
                                            {items}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>


            </div>

            <img src="/hero/navline.webp" alt="navline" className="mt-10 mx-auto w-full object-cover relative left-0 right-0 opacity-70" />

            <div className="max-w-[1400px] mx-auto w-full text-white mt-28 flex justify-between items-center">
                <div className="">
                    <h3 className="font-secondary text-sm font-semibold uppercase">© Lucidia 2023 | All rights reserved.</h3>
                    <p className="text-[12px] text-footergry font-secondary mt-2">YOUR JURISDICTION MAY NOT REGULATE CRYPTOCURRENCIES. THE VALUE OF CRYPTOCURRENCIES MAY RISE AND FALL. PROFITS MAY BE SUBJECT TO CAPITAL GAINS TAXES OR OTHER LOCAL TAXES.
                    </p>
                </div>

                <button className="">
                    <img src="/iconup.webp" alt="Icon" className="w-8 h-8" />
                </button>
                
            </div>


        </footer>
    );
}

export default Footer;