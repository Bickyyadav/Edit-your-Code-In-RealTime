import { useEffect } from 'react';
import Codemirror from 'codemirror';
// this is javascript file and we are importing because of enabling codemirror code
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/lib/codemirror.css'

const Editor = () => {
  useEffect(() => {
    async function init() {
      Codemirror.fromTextArea(document.getElementById('realtimeEditor'), {
        mode: { name: 'javascript', json: true },
        theme: 'dracula',
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers:true,
      });
    }

    init();
  }, []);

  return <textarea id="realtimeEditor"></textarea>;
};

export default Editor;
