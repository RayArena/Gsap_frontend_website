import { gsap, ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
  return (
    <div className='col-center gap-4 p-4'>
      <h1 className="text-3xl font-bold mt-10">Welcome to GSAP Animation Example</h1>
      <p>This is a simple React application demonstrating GSAP animations.</p>
    </div>
  );
}

export default App;