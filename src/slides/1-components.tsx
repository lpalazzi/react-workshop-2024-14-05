import { CodeBlock } from '../components/code-block';

export const Components: React.FC = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>
        Primer: Reusable Components
      </h1>
      <p className='text-center mb-6 font-mono'>
        code: /src/pages/1-components.tsx
      </p>
      <ul className='list-disc pl-5'>
        <li>Components are the building blocks of a React application</li>
        <li>
          Represent a piece of the UI that has its own logic and appearance
        </li>
        <li>
          Defined using a JavaScript/TypeScript function or class that returns
          JSX/TSX
        </li>
      </ul>

      <h2 className='text-xl font-semibold mb-1 mt-10'>Example</h2>
      <Example />

      <h2 className='text-xl font-semibold mb-1 mt-10'>Activity</h2>
      <p>
        There are two {'<h2>'} tags in this file with the same classes. Replace
        both with a single reusable component called H2.
      </p>
    </div>
  );
};

function Example() {
  return (
    <CodeBlock
      code={`
              function SimpleComponent(props: { content: string }) {
                return <div>{props.content}</div>;
              }

              // using arrow functions (same functionality as above, but different syntax)
              const SimpleComponent: React.FC<{ content: string }> = (props) => {
                return <div>{props.content}</div>;
              };

              // using the component
              const example = (
                <div>
                  <SimpleComponent content='Hello, world!' />
                </div>
              );
            `}
    />
  );
}
