import { useEffect, useState } from 'react';
import { Home } from './pages/0-home';
import { Components } from './pages/1-components';
import { Events } from './pages/2-events';
import { State } from './pages/3-state';
import { Rendering } from './pages/4-rendering';
import { Scaling } from './pages/5-scaling';

const slides = [
  <Home />,
  <Components />,
  <Events />,
  <State />,
  <Rendering />,
  <Scaling />,
];

function App() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slide]);

  return (
    <div className='min-h-screen flex flex-col justify-between w-full max-w-5xl mx-auto px-4'>
      <div>
        <div className='h-40 w-full flex flex-row items-center'>
          {slide === 0 ? null : (
            <img src='/hackforge.png' className='h-20 mx-auto' />
          )}
        </div>
        <div>{slides[slide]}</div>
      </div>
      <div className='h-40 w-full flex flex-row items-center justify-between'>
        {slide === 0 ? (
          <div />
        ) : (
          <button
            onClick={() => setSlide(slide - 1)}
            className='bg-white text-slate-900 font-bold px-4 py-2 rounded'
          >
            Previous
          </button>
        )}
        {slide === slides.length - 1 ? (
          <div />
        ) : (
          <button
            onClick={() => setSlide(slide + 1)}
            className='bg-white text-slate-900 font-bold px-4 py-2 rounded'
          >
            {slide === 0 ? 'Begin' : 'Next'}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
