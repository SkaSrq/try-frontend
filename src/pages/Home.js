import React, {useState, useEffect} from 'react'
import Editor from '../components/Editor';
import UseLocalStorage from "../hooks/UseLocalStorage";

const Home =()=> {
    const[html, setHtml] = UseLocalStorage('html','');
    const[css, setCss] = UseLocalStorage('css','');
    const[js, setJs] = UseLocalStorage('js','');
    const[srcDoc, setSrcDoc] = useState('');

    useEffect(() => {
        const timeout = setTimeout(()=>{
            setSrcDoc(`
        <html>
          <style>${css}</style>
          <body>${html}</body>
          <script>${js}</script>
        </html>
        `)
        },1*1000);

        return()=> clearTimeout(timeout);
    },[html,css,js]);


    return (
        <>
    {/* top panel */}
    <div className="pane top-pane">
      <Editor 
        language="xml"
        displayName="HTML"
        value ={html}
        onChange={setHtml}

        />
      <Editor
          language="css"
        displayName="CSS"
        value ={css}
        onChange={setCss}
      />
      <Editor
          language="javascript"
        displayName="JS"
        value ={js}
        onChange={setJs}
      />
    </div>

    {/* bottom panel  */}
    <div className="bottom-pane">
    <iframe
    srcDoc={srcDoc}
    title="output"
    sandbox="allow-scripts"
    frameBorder="0"
    width="100%"
    height="100%"
    >
      {/* all franes */}
    </iframe>
    </div>
    </>
    )
}

export default Home;
