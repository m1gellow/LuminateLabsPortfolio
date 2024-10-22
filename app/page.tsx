// import Lenis from "lenis";
import { domAnimation, LazyMotion } from "framer-motion";
import Header from "./components/Shared/Header";

export default function Home() {
  return (
    <main>
      <LazyMotion features={domAnimation}>
        <Header />
      </LazyMotion>
    </main>
  );
}
