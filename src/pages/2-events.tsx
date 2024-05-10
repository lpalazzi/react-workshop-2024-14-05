import { CodeBlock } from '../components/code-block';
import { HaveSomeFun } from '../utils';

export const Events: React.FC = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>Handling Events</h1>
      <p className='text-center mb-6 font-mono'>
        code: /src/pages/2-events.tsx
      </p>

      <H2>Event handler functions</H2>
      <ul className='list-disc pl-5 mb-5'>
        <li>
          Handle events by passing a function as a prop to an element (passed,{' '}
          <b>not called</b>)
        </li>
        <li>Define a handler function separately or inline</li>
      </ul>
      <Example1 />

      <H2>Reading props in event handlers</H2>
      <ul className='list-disc pl-5 mb-5'>
        <li>
          Event handlers are defined inside a component, so they have access to
          props
        </li>
      </ul>
      <Example2 />

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

      <Example3 />
      <H2>Accessing event data</H2>
      <ul className='list-disc pl-5 mb-5'>
        <li>
          Most events pass an event object to the handler function, which
          contains information about the event
        </li>
      </ul>
      <Example4 />

      <H2>Activity</H2>
      <p>
        The button below is defined as a component called <code>FunButton</code>
        , but it currently doesn't do anything . Modify the component so that it
        calls the <code>HaveSomeFun</code> function (imported from{' '}
        <code>../utils</code>) when clicked. Try passing the event handler as a
        prop to the button component.
      </p>
      <div className='flex flex-row items-center justify-center mt-6'>
        <FunButton>Have some fun</FunButton>
      </div>
    </div>
  );
};

function FunButton(props: { children?: React.ReactNode }) {
  return (
    <button className='border border-white font-bold px-4 py-2 rounded hover:bg-white hover:text-slate-900'>
      {props.children}
    </button>
  );
}

function H2({ children }: { children?: React.ReactNode }) {
  return <h2 className='text-xl font-semibold mb-1'>{children}</h2>;
}

function Example1() {
  return (
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
                return <button onClick={() => alert('Button clicked!')}>Click me</button>;
              };
            `}
    />
  );
}

function Example2() {
  return (
    <CodeBlock
      code={`
              function AlertButton(props: { alertMessage: string }) {
                function handleClick() {
                  alert(props.alertMessage);
                }

                return <button onClick={handleClick}>Click me</button>;
              }

              function ParentComponent() {
                return (
                  <div>
                    <AlertButton alertMessage='Button 1 clicked!' />
                    <AlertButton alertMessage='Button 2 clicked!' />
                  </div>
                );
              }
            `}
    />
  );
}

function Example3() {
  return (
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
  );
}

function Example4() {
  return (
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
  );
}
