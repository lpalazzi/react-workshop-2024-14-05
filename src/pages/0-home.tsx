export const Home: React.FC = () => {
  return (
    <>
      <div className='text-center mb-12'>
        <img src='/hackforge.png' className='h-24 mx-auto mb-4' />
        <h1 className='text-3xl font-semibold mb-1'>React Workshop</h1>
        <h2 className='text-5xl font-semibold'>
          Building Interactive Components
        </h2>
      </div>
      <div className='mx-auto w-fit'>
        <div className='mx-auto pl-5'>
          <h2 className='text-xl font-semibold mb-1'>
            Requirements{' '}
            <span className='font-normal italic mt-1'>
              (recommended: install both using{' '}
              <code className='font-semibold'>nvm</code>)
            </span>
          </h2>
          <ul className='list-disc pl-5 ml-4'>
            <li>Node.js (version 20+ preferred)</li>
            <li>npm</li>
          </ul>
        </div>
        <div className='mt-5 p-5 bg-slate-800 rounded-lg font-mono shadow-xl w-fit'>
          <p className='mb-1'>
            {'>'} git clone
            https://github.com/hackf/react-workshop-2024-14-05.git
          </p>
          <p className='mb-1'>{'>'} cd react-workshop-2024-14-05</p>
          <p className='mb-1'>{'>'} npm install</p>
          <p>{'>'} npm run dev</p>
        </div>
      </div>
    </>
  );
};
