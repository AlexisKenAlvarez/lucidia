import Nav from "../components/Nav";
import Hero from "../views/Hero/Hero";
import How from "../views/Hero/How";
import Partners from "../views/Hero/Partners";
import PartnersUpper from "../views/Hero/PartnersUpper";
import Tokens from "../views/Hero/Tokens";
import Worlds from "../views/Hero/Worlds";


const Landing = () => {
    return (
        <section className="w-full h-auto bg-black relative">
            <Nav />
            <Hero />
            <PartnersUpper />
            <Worlds />
            <How />
            <Partners />
            <Tokens />
        </section>
    );
}

export default Landing;