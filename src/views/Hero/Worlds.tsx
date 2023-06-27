const Worlds = () => {

    const worldList = [
        {
            title: 'zombie outbreak',
            desc: 'Pulse-pounding action, earn $LUCID Tokens, crush undead hordes, ultimate survival.',
            image: 'zombie'
        },
        {
            title: 'lucidcraft',
            desc: 'Shape limitless worlds, earn $LUCID Tokens, unleash creativity, adventure awaits!',
            image: 'minecraft'
        },
        {
            title: 'cybercity',
            desc: 'Take a ride through the night skyline, race with your friends and attend virtual events',
            image: 'cyber'
        },
        {
            title: 'lucidia fps',
            desc: 'Engage in the battle and complete missions to earn $LUCID Tokens.',
            image: 'fps'
        },
        {
            title: 'embryo lab',
            desc: 'Use the power of AI to grow your unique NFT Lucidia Embryo.',
            image: 'lab'
        },
        {
            title: 'Eco city',
            desc: 'Roam through the city, go shopping for your avatar or just hang in your virtual property',
            image: 'eco'
        },

    ]

    const comingsoon = [
        {
            title: "tekcida",
            image: 'tekcida'
        },
        {
            title: "nft racing",
            image: 'nftracing'
        },

    ]

    return (
        <section className="w-full h-auto min-h-screen bg-bg relative px-5 py-5">

            <div className="max-w-[1400px] w-full mx-auto h-auto">
                <h1 className="font-semibold text-transparent text-2xl sm:ext-3xl md:text-4xl font-primary bg-clip-text bg-gradient-to-r from-[#e4d3fe] via-white to-lavender w-fit">Free2Play Open Worlds</h1>

                <div className="flex flex-wrap gap-3 mt-12">
                    {worldList.map((items, i) => {
                        return (
                            <div
                                key={i}
                                className="w-[21rem] h-[26rem] rounded-md clipped2 bg-white relative font-bold flex items-center justify-center scale-x-[-1] cursor-pointer">

                                <div className="scale-x-[-1] relative w-full h-full group">
                                    <img
                                        src={`/worlds/${items.image}.webp`}
                                        alt={items.title}
                                        className="object-cover absolute w-full h-full" />

                                    <div className=" shadow-world w-full h-full relative z-10"></div>

                                    <div className="transition-shadow ease-in-out duration-500 group-hover:shadow-worldHover w-full h-full top-0 left-0 absolute z-10"></div>



                                    <div className="absolute bottom-4 left-4 z-10 p-3 group-hover:text-black text-white ease-in-out duration-[0.1s]">
                                        <h1 className="uppercase font-primary text-2xl tracking-wide group-hover:mb-2 transition-all">{items.title}</h1>
                                        <div className="overflow-hidden max-h-0 group-hover:max-h-[3rem] transition-all">
                                            <p className="font-medium font-primary">{items.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    {comingsoon.map((items, i) => {
                        return (
                            <div
                                key={i}
                                className="w-[21rem] h-[26rem] rounded-md clipped2 bg-white relative font-bold flex items-center justify-center scale-x-[-1] cursor-pointer">

                                <div className="scale-x-[-1] relative w-full h-full group">
                                    <img
                                        src={`/worlds/${items.image}.webp`}
                                        alt={items.title}
                                        className="object-cover absolute w-full h-full" />

                                    <img src="/worlds/coming.webp" alt="Coming soon" className="absolute top-0 left-0 right-0 bottom-10 m-auto w-[8rem]" />

                                    <div className="absolute bottom-4 left-4 z-10 p-3 text-white/40">
                                        <h1 className="uppercase font-primary text-2xl tracking-wide">{items.title}</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </section>
    );
}

export default Worlds;