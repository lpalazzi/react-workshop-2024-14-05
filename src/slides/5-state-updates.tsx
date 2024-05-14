import { useState } from 'react';
import { CodeBlock } from '../components/code-block';
import { H2 } from '../components/h2';

export const StateUpdates: React.FC = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>State Updates</h1>
      <p className='text-center mb-6 font-mono'>
        code: /src/pages/5-state-updates.tsx
      </p>

      <H2>Overview</H2>
      <ul className='list-disc pl-5 mb-5'>
        <li>
          State is not a regular JavaScript variable, it's more like a snapshot
        </li>
        <li>
          Setting a state does not change the state immediately, it triggers a
          re-render
        </li>
        <li>The new state value is available in the next render</li>
        <li>React manages the values of states outside of the component</li>
        <li>
          Every render (and functions inside it) sees the snapshot of the state
          that React gave to that render
        </li>
      </ul>

      <CodeBlock
        code={`
                function Button() {
                  const [count, setCount] = useState(0); // snapshot of the state for current render
                
                  console.log(count); // 0
                
                  function handleClick() {
                    setCount(count + 1);
                    console.log(count); // still 0
                  }
                
                  return <button onClick={handleClick}>Clicked {count} times</button>;
                }
            `}
      />

      <H2>Multiple state updates</H2>
      <ul className='list-disc pl-5 mb-5'>
        <li>
          React waits until all code in the event handlers is executed before
          processing the state updates (batching)
        </li>
      </ul>
      <CodeBlock
        code={`
                function Button() {
                  const [count, setCount] = useState(0);
                
                  function handleClick() {
                    setCount(count + 1);
                    setCount(count + 1);
                    // Value of count in the next render: 1
                  }
                
                  return <button onClick={handleClick}>Clicked {count} times</button>;
                }
            `}
      />
      <ul className='list-disc pl-5 mb-5'>
        <li>
          Sometimes you might want to perform multiple operations on a state
          value before the next render
        </li>
      </ul>
      <CodeBlock
        code={`
                function Button() {
                  const [count, setCount] = useState(0);
                
                  function handleClick() {
                    setCount(count + 1);
                    setCount(c => c + 1);
                    // Value of count in the next render: 2
                  }
                
                  return <button onClick={handleClick}>Clicked {count} times</button>;
                }
            `}
      />
    </div>
  );
};
