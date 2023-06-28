const Hero = () => {

    const members = [
        {
            name: 'Adel Khatib',
            position: 'CHIEF EXECUTIVE OFFICER',
            desc: [
                'Samsung Mena Partner (6 yrs)',
                'Electric fleet partner with Uber (2 yrs)',
                'Crypto/blockchain expert (10 yrs)',
                'Serial entrepreneur & gamer (15 yrs)'
            ]
        },
        {
            name: 'Feras Nimer',
            position: 'CHIEF OPERATION OFFICER',
            desc: [
                'Business transformation at EY (5 yrs)',
                'Project management (6 yrs)',
                'Crypto investor (4 yrs)',
                'Entrepreneur (5 yrs)'
            ]
        },
        {
            name: 'Ahmad Assaf',
            position: 'CHIEF TECHNOLOGY OFFICER',
            desc: [
                'AI & data expert (14 yrs)',
                'Crypto/tech enthusiast (5 yrs)',
                'Software engineer (18 yrs)',
                'Entrepreneur (10 yrs)'
            ]
        },
        {
            name: 'Den Smolonski',
            position: 'SENIOR BLOCKCHAIN DEVELOPER',
            desc: [
                'Full Stack Developer (8 yrs)',
                'DeFi Developer',
                'GameFi Developer',
                'Blockchain industry (4 yrs)'
            ]
        },
        {
            name: 'Jahongir Erkinov',
            position: 'SENIOR DEVELOPER',
            desc: [
                'Unreal Engine developer (6 yrs)',
                'Unity Engine developer (4 yrs)',
                'Mobile/PC/VR game dev (4 yrs)',
                'Gamer (10 yrs)'
            ]
        },
        {
            name: 'Matsushima Goro',
            position: 'BLOCKCHAIN DEVELOPER',
            desc: [
                'Blockchain expert (4 yrs)',
                'Rust specialist (2 yrs)',
                'Solidity proficient (4 yrs)',
                'Frontend developer (6 yrs)'
            ]
        },
        {
            name: 'Oskar Krzak',
            position: 'BUSINESS DEVELOPMENT MANAGER',
            desc: [
                'Product Manager (7 yrs)',
                'Blockchain industry (6 yrs)',
                'Gamer (15  yrs)'
            ]
        },
        {
            name: 'Marius Dommersnes',
            position: 'CHIEF MARKETING OFFICER',
            desc: [
                'Blockchain industry (3 yrs)',
                'Presales & IDO (2 yrs)',
                'Web3 marketing (2 yrs)'
            ]
        },
        {
            name: 'Victoria Iskiyaeva',
            position: 'CHIEF MARKETING OFFICER',
            desc: [
                'Web3 Marketing (3 yrs)',
                'Social Media Management (4 yrs)',
                'Digital Marketing (4 yrs)'
            ],
        },
        {
            name: 'Rula Madi',
            position: 'HEAD OF LEGAL',
            desc: [
                'Corporate & tech/IP law (20 yrs)',
                'Senior management adviser',
                'Legal associations member'
            ],
        },
        {
            name: 'Al Rizqi',
            position: 'ASIA & CIS COMMUNITY MANAGER',
            desc: [
                'Community Manager (2 yrs)',
                'Project Management (3 yrs)',
                'Marketing (5 yrs)'
            ],
        },
        {
            name: 'Sander Kloet',
            position: 'EMEA & NA COMMUNITY MANAGER',
            desc: [
                'Community Manager (4 yrs)',
                'Social Media Manager (4 yrs)',
                'Digital Marketing (3 yrs)'
            ],
        },
    ]

    return (
        <section className="w-full min-h-screen relative text-white overflow-hidden bg-bg">
            <img src="/team/bg.webp" alt="Teambg" className="w-full h-screen object-cover absolute left-0 " />

            <div className="max-w-[1400px] w-full h-auto mx-auto relative z-10 font-primary mt-[12rem] flex items-center justify-center">
                <img src="/team/left.webp" alt="Left" className="-mb-20" />
                <div className="flex flex-col gap-y-0 items-center justify-center w-fit mx-auto flex-shrink-0">
                    <h2 className="text-grn text-center text-lg font-medium uppercase">lucidians</h2>
                    <h1 className="text-[72px] font-medium">MEET OUR CRYPT EXPERTS</h1>
                    <p className="text-lg font-medium">At Lucidia we believe that the true, fully immersive metaverse is just around the corner.</p>
                </div>
                <img src="/team/right.webp" alt="Left" className="-mb-32" />
            </div>

            <img src="/hero/navline.webp" alt="NavLine" className="w-full relative z-10 mt-16" />

            <div className="max-w-[1400px] w-full mx-auto h-auto relative z-10">

                {members.map((items, i) => {
                    return (

                        <div className="w-[28.75rem] h-[35.9rem] bg-gradient-to-b from-gry via-gry to-prpl clipped2 scale-x-[-1] relative" key={i}>
                            <div className="w-[99.5%] bg-black h-[99.5%] absolute clipped2  m-auto top-0 bottom-0 left-0 right-0 shadow-teamShadow">
                                <div className="w-full h-full scale-x-[-1] relative z-10">
                                    <div className="w-full h-28 bg-prpl bottom-0 left-0 absolute blur-[7rem] z-0"></div>

                                    <div className="absolute bottom-5 left-6 z-10">
                                        <h1 className="font-primary text-[25px] font-semibold">{items.name}</h1>
                                        <h2 className="font-secondary font-semibold mt-[5px]">{items.position}</h2>

                                        <ul className="font-primary font-medium text-[15px] mt-5">
                                            {items.desc.map((items, i) => {
                                                return (
                                                    <li className="" key={i}>{items}</li>
                                                )
                                            })}
                                        </ul>

                                    </div>
                                </div>

                            </div>

                        </div>
                    )
                }
                )}

            </div>
        </section>
    );
}

export default Hero;