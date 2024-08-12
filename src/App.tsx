import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import styles from "./index.module.scss";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <main>
      <Analytics />
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <span className={styles.bgFX} />
    </main>
  );
}

export default App;
