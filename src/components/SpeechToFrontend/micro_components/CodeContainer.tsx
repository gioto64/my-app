import { useSelector } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { DataGlobalState } from '../store/reducers/speech_reducers';

const CodeContainer = () => {
  const code = useSelector((state : DataGlobalState) => state.code);
  return (
    <SyntaxHighlighter language="javascript" style={dark}>
      {code}
    </SyntaxHighlighter>
  )
};

export default CodeContainer;