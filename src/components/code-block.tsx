import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export const CodeBlock: React.FC<{
  code: string;
}> = ({ code }) => {
  return (
    <div className='rounded-lg shadow-xl mb-8'>
      <SyntaxHighlighter
        language='tsx'
        style={{
          ...vs2015,
          hljs: {
            ...vs2015.hljs,
            background: '#1e293b',
            borderRadius: '0.5rem',
            padding: '1rem',
          },
        }}
      >
        {dedent(code)}
      </SyntaxHighlighter>
    </div>
  );
};

function dedent(str: string) {
  const trimmedStr = str.replace(/^\s*\n/, '').replace(/\n\s*$/, '');
  const matches = trimmedStr.match(/^[ \t]*(?=\S)/gm);
  const min = Math.min(...(matches?.map((el) => el.length) || []));
  const regex = new RegExp(`^[ \\t]{${min}}`, 'gm');
  return trimmedStr.replace(regex, '');
}
