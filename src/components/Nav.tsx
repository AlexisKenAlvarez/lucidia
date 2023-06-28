const Nav = () => {

    const navList = [

        {
            name: 'pitchdeck',
            slug: 'pitchdeck'
        },
        {
            name: 'roadmap',
            slug: 'roadmap'
        },
        {
            name: 'our team',
            slug: 'ourteam'
        },
        {
            name: 'gameplay',
            slug: 'gameplay'
        },
    ]

    return (
        <nav className="w-full h-auto px-5 xl:py-4 py-0  absolute top-0 left-0 z-20">
            <img src="/hero/navline.webp" alt="NavLine" className="w-full absolute left-0 top-7 right-0 xl:block hidden pointer-events-none" />

            <div className="max-w-[1400px] w-full mx-auto flex justify-between items-center mt-5">
                <img src="/hero/logo.webp" alt="Logo" className="" />

                <ul className="font-secondary font-semibold text-sm uppercase items-center gap-x-12 text-white xl:flex hidden">
                    {navList.map((items, i) => {
                        return (
                            <li className="cursor-pointer" key={i}>{items.name}</li>
                        )
                    })}
                </ul>

                <div className="flex items-center gap-x-8">
                    <button className="flex flex-col items-end gap-y-3">
                        <div className="w-8 h-[3px] bg-white"></div>
                        <div className="w-6 h-[3px] bg-white"></div>
                    </button>

                    <button className="w-[13rem] h-9 clipped bg-bl relative  font-bold items-center justify-center md:flex hidden group">
                        <div className="absolute bg-[#5e38b2] w-[98%] h-[91%] left-0 top-0 right-0 bottom-0 m-auto clipped group-hover:bg-bl transition-bg ease-in-out duration-300"></div>
                        <h1 className="font-secondary relative z-10 text-bl text-[12px] group-hover:text-black transition-color ease-in-out duration-300">MEET THE COMMUNITY</h1>
                    </button>
                </div>

            </div>
        </nav>
    );
}

export default Nav;