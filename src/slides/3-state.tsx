import { useState } from 'react';
import { CodeBlock } from '../components/code-block';
import { H2 } from '../components/h2';

export const State: React.FC = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>State</h1>
      <p className='text-center mb-6 font-mono'>code: /src/pages/3-state.tsx</p>

      <H2>Overview</H2>
      <ul className='list-disc pl-5 mb-5'>
        <li>
          Can be thought of as a component's memory, storing data that can
          change what is displayed on the screen
        </li>
        <li>
          State can used to keep track of things like form data, user input, or
          other dynamic data
        </li>
        <li>A change in state triggers a re-render of the component</li>
        <li>
          The value of a state variable is retained between renders of the
          component
        </li>
      </ul>

      <H2>Adding and updating a state variable</H2>
      <ul className='list-disc pl-5 mb-5'>
        <li>
          Use the <code>useState</code> hook to add state to a functional
          component
        </li>
        <li>
          <code>useState</code> returns an array with two elements: the current
          state value and a function to update it
        </li>
      </ul>
      <div className='flex gap-4 w-full items-start'>
        <CodeBlock
          code={`
                  function Button() {
                    const [count, setCount] = useState(0);
                  
                    function handleClick() {
                      setCount(count + 1);
                    }
                  
                    return (
                      <button
                        onClick={handleClick}
                      >
                        Clicked {count} times
                      </button>
                    );
                  }
            `}
        />
        <Button />
      </div>

      <div className='flex gap-4 w-full items-start'>
        <ul className='list-disc pl-5 mb-5'>
          <li>State is isolated and private to a component</li>
          <li>Each component instance maintains its own state</li>
        </ul>
        <div className='flex justify-start gap-4 pb-4 ml-10'>
          <Button />
          <Button />
        </div>
      </div>

      <H2>Activity</H2>
      <p>
        The <code>TextInput</code> component below has a text input field.
        Implement the <code>handleChange</code> function to update the name
        displayed in the text beside it.
      </p>
      <TextInput />
    </div>
  );
};

function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button
      className='border border-white px-2 py-1 rounded hover:bg-white hover:text-slate-900'
      onClick={handleClick}
    >
      Clicked {count} times
    </button>
  );
}

// Activity code below

function TextInput() {
  const [value, setValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // hint: e.target.value is the updated input value after the event
    const newValue = e.target.value;
    setValue(newValue);
  }

  return (
    <div className='mt-8'>
      <input
        type='text'
        className='border border-white px-2 py-1 rounded text-slate-900'
        placeholder='Enter some text'
        onChange={handleChange}
      />
      <p>
        The value of the input above is:{' '}
        <span className='font-semibold'>{value}</span>
      </p>
    </div>
  );
}
