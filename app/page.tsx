import AboutMe from "./pages/AboutMe";
import LinksSection from "./pages/LinksSection";
import AnimateOnScroll from "./components/AnimateOnScroll/AnimateOnScroll";

export default function Home() {
  return (
    <>
      <AnimateOnScroll delay={0}>
        <AboutMe />
      </AnimateOnScroll>
      <AnimateOnScroll delay={100}>
        <LinksSection />
      </AnimateOnScroll>
    </>
  );
}
