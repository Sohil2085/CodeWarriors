import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import AOS from "aos";
import 'aos/dist/aos.css';

  const CodeEditor = ({ code, setCode }) => {
  const handleCodeChange = (value) => {
    setCode(value);
  };

  useEffect(() => {
           AOS.init({
           // Global settings
           duration: 700, // Animation duration
             easing: 'ease-out-cubic', // Animation easing
             once: true, // Only animate once
             disable: 'phone', // Disable on phone
           });
         }, []);

  return (
    <div className="container my-4">
      <h4 data-aos="fade-up">Code Editor</h4>
      <div className="border rounded" style={{ height: "300px" }} data-aos="fade-up">
        <Editor
          language="javascript"
          theme="vs-dark"
          value={code}
          onChange={handleCodeChange}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
