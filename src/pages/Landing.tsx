import Nav from "../components/Nav";
import Hero from "../views/Hero/Hero";
import How from "../views/Hero/How";
import PartnersUpper from "../views/Hero/PartnersUpper";
import Worlds from "../views/Hero/Worlds";


const Landing = () => {
    return (
        <section className="w-full h-auto bg-black relative">
            <Nav />
            <Hero />
            <PartnersUpper />
            <Worlds />
            <How />
        </section>
    );
}

export default Landing;