import { About } from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

export default function Home() {
  return (
    <div id="Home">
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
