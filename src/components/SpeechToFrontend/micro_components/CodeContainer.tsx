import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeContainerProps {
  codeToPrint: string,
}
const CodeContainer = (props: CodeContainerProps) => {
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {props.codeToPrint}
    </SyntaxHighlighter>
  )
};

export default CodeContainer;