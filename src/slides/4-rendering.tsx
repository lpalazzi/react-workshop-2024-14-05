import { useState } from 'react';
import { H2 } from '../components/h2';

export const Rendering: React.FC = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>
        Component Rendering Process
      </h1>
      <p className='text-center mb-6 font-mono'>
        code: /src/pages/4-rendering.tsx
      </p>

      <H2>Overview</H2>
      <ul className='list-disc pl-5 mb-5'>
        <li>
          Before components are displayed on the screen, they must be rendered
          by React
        </li>
        <li>
          This rendering process has three steps:
          <ol className='list-decimal pl-8'>
            <li>Triggering a render</li>
            <li>Rendering the component</li>
            <li>Committing to the DOM</li>
          </ol>
        </li>
        <li>
          Understanding how these steps work and how they determine what is
          shown on the screen makes it much easier to build and debug React
          applications
        </li>
      </ul>

      <H2>Step 1: Triggering a render</H2>
      <p className='list-disc pl-5'>
        <li>
          A render can be triggered for two reasons: (1) it's the initial
          render, or (2) there's a state update
        </li>
      </p>

      <H2>Step 2: Rendering the component</H2>
      <ul className='list-disc pl-5'>
        <li>
          Rendering is essentially React calling your components (
          <i>reminder: components are just functions</i>)
        </li>
        <li>
          If the JSX that is returned by the component includes other
          components, React will recursively render those components too until
          there are no more nested components
        </li>
      </ul>

      <H2>Step 3: Committing to the DOM</H2>
      <ul className='list-disc pl-5'>
        <li>
          Once React has determined what needs to be updated, it will commit
          those changes to the DOM
        </li>
        <li>React only updates the parts of the DOM that have changed</li>
      </ul>

      <H2>Example</H2>
      <Example />
    </div>
  );
};

function Example() {
  const [count, setCount] = useState(0);

  console.log('COMPONENT RENDERED');

  const handleClick = () => {
    setCount(count + 1); // this triggers a re-render
  };

  return (
    <div className='w-full bg-slate-700 p-4 rounded-lg'>
      <p>You clicked {count} times</p>
      <button
        className='bg-slate-900 text-white font-semibold px-2 py-1 rounded'
        onClick={handleClick}
      >
        Click me
      </button>
      <Child />
    </div>
  );
}

function Child() {
  console.log('CHILD RENDERED');
  return <p>Child component</p>;
}
