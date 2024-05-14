import { CodeBlock } from '../components/code-block';
import { H2 } from '../components/h2';

export const Events: React.FC = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>Handling Events</h1>
      <p className='text-center font-mono'>code: /src/pages/2-events.tsx</p>
      <H2>Overview</H2>
      <ul className='list-disc pl-5 mb-5'>
        <li>
          In React, you can add <i>event handlers</i> to your JSX
        </li>
        <li>
          Event handlers are your own functions that will be triggered in
          response to user interactions
        </li>
        <li>For example: clicking, hovering, focusing on form inputs, etc</li>
      </ul>
      <H2>Defining event handler functions</H2>
      <ul className='list-disc pl-5 mb-5'>
        <li>
          Handle events by passing a function as a prop to an element (passed,{' '}
          <b>not called</b>)
        </li>
        <li>Define a handler function separately or inline</li>
      </ul>
      <div className='flex gap-4 w-full items-start'>
        <CodeBlock
          code={`
                function AlertButton() {
                  function handleClick() {
                    alert('Button clicked!');
                  }

                  return <button onClick={handleClick}>Click me</button>;
                }

                // defined inline
                const AlertButton = () => {
                  return (
                    <button onClick={() => alert('Button clicked!')}>
                      Click me
                    </button>
                  );
                };
            `}
        />
        <AlertButton />
      </div>
      <H2>Passing event handlers as props</H2>
      <ul className='list-disc pl-5 mb-5'>
        <li>
          A parent component can define an event handler and pass it as a prop
        </li>
        <li>
          Common practice for general components like buttons to contain styling
          but not specify behaviour
        </li>
      </ul>
      <CodeBlock
        code={`
              function SubmitButton(props: {
                onClick: () => void;
                children: React.ReactNode;
              }) {
                return (
                  <button
                    className='bg-green-700 text-white font-semibold'
                    onClick={props.onClick}
                  >
                    {props.children}
                  </button>
                );
              }

              function ParentComponent() {
                function handleSubmit() {
                  alert('Submitted!');
                }

                return (
                  <div>
                    <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
                  </div>
                );
              }
            `}
      />
      <H2>Accessing event data</H2>
      <ul className='list-disc pl-5 mb-5'>
        <li>
          Most events pass an event object to the handler function, which
          contains information about the event
        </li>
      </ul>
      <CodeBlock
        code={`
              function Component() {
                function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
                  console.log(event.target.value); // will print the new input text
                }
                return <input type='text' onChange={handleChange} />;
              }
            `}
      />

      <H2>Activity</H2>
      <p>
        The button below is a component called <code>FunButton</code>, but it
        currently doesn't do anything . Modify the component so that it calls
        the <code>HaveSomeFun</code> function when clicked. Try passing the
        event handler as a prop to the button component.
      </p>
      <div className='flex flex-row items-center justify-center mt-6'>
        <FunButton>Have some fun</FunButton>
      </div>
    </div>
  );
};

const AlertButton = () => {
  return (
    <button
      className='border border-white px-2 py-1 rounded hover:bg-white hover:text-slate-900'
      onClick={() => alert('Button clicked!')}
    >
      Click me
    </button>
  );
};

// Activity code below

function FunButton(props: { children?: React.ReactNode }) {
  return (
    <button className='border border-white font-bold px-4 py-2 rounded hover:bg-white hover:text-slate-900'>
      {props.children}
    </button>
  );
}

function haveSomeFun() {
  const originalTransform = document.body.style.transform;
  let degree = 0;

  const intervalId = setInterval(() => {
    document.body.style.transform = `rotate(${degree}deg)`;
    degree += 10;
  }, 100); // rotate 10 degrees every 100ms

  setTimeout(() => {
    clearInterval(intervalId);
    document.body.style.transform = originalTransform;
  }, 5000); // stop rotating after 5 seconds
}
