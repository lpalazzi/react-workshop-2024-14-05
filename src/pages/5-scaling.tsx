import { CodeBlock } from '../components/code-block';

export const Scaling: React.FC = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>
        Scaling User Interfaces
      </h1>
      <p className='text-center mb-6 font-mono'>
        code: /src/pages/5-scaling.tsx
      </p>
    </div>
  );
};

function H2({ children }: { children?: React.ReactNode }) {
  return <h2 className='text-xl font-semibold mb-1'>{children}</h2>;
}

function Example1() {
  return (
    <CodeBlock
      code={`
              
            `}
    />
  );
}
