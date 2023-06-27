import Nav from "../components/Nav";
import Hero from "../views/Hero/Hero";
import PartnersUpper from "../views/Hero/PartnersUpper";
import Worlds from "../views/Hero/Worlds";


const Landing = () => {
    return (
        <section className="w-full h-auto bg-black relative">
            <Nav />
            <Hero />
            <PartnersUpper />
            <Worlds />
        </section>
    );
}

export default Landing;