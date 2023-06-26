const PartnersUpper = () => {

    const partners = [

        'bloomberg', 'yahoo', 'benzinga', 'globe', 'digital', 'block', 'market'
    ]

    return (
        <section className="w-full h-auto p-5 relative bg-bg pb-10">
            <img src="/hero/navline.webp" alt="Navline" className="absolute left-0 right-0 bottom-0 w-full" />
            <div className="h-20 w- max-w-[1400px] mx-auto flex items-center gap-x-12 justify-center">
                {partners.map((items, i) => {
                    return (
                        <img src={`/partners2/${items}.webp`} key={i} alt={items} className="" />
                    )
                })}
            </div>
        </section>
    );
}

export default PartnersUpper;