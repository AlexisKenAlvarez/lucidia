import Nav from "./components/Nav";
import Hero from "./views/Hero";
import PartnersUpper from "./views/PartnersUpper";
import Worlds from "./views/Worlds";

const App = () => {
  return (
    <section className="w-full h-auto bg-black relative">
      <Nav />
      <Hero />
      {/* <PartnersUpper /> */}
      <Worlds />
    </section>
  );
}

export default App;