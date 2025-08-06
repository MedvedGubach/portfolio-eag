import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Technologies from "./components/Technologies";
import CoursesCertifications from "./components/CoursesCertifications";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Customers from "./components/Customers";
import Contact from "./components/Contact";
import UnderConstruction from "./components/UnderConstruction";

const App = () => {
  return (
    <div className=" text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 overflow-x-clip">
        <Analytics />
        <Navbar />
        <div className="overflow-x-hidden">
          <Main />
          <About />
          <Technologies />
          <CoursesCertifications />
          <Experience />
          <Projects />
          <Customers />
          <Contact />
          <UnderConstruction />
        </div>
      </div>
    </div>
  );
};

export default App;
