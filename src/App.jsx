import { gsap, ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className='h-dvh bg-black'></div>
      </main>
    </>
  );
}

export default App;