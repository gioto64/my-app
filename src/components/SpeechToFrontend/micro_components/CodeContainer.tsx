import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeContainerProps {
  codeToPrint: string,
}
const CodeContainer = (props: CodeContainerProps) => {
  return (
    <SyntaxHighlighter language="javascript" style={dark}>
      {props.codeToPrint}
    </SyntaxHighlighter>
  )
};

export default CodeContainer;