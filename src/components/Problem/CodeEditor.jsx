import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import AOS from "aos";
import 'aos/dist/aos.css';

const CodeEditor = ({ code, setCode, language, setLanguage }) => {
  const handleCodeChange = (value) => {
    setCode(value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const mapJDoodleToMonaco = (jdoodleLang) => {
    const map = {
      'nodejs': 'javascript',
      'python3': 'python',
      'java': 'java',
      'cpp17': 'cpp',
      'c': 'c'
    };
    return map[jdoodleLang] || 'javascript';
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
      <div className="d-flex justify-content-between align-items-center mb-2" data-aos="fade-up">
        <h4>Code Editor</h4>
        <select 
          className="form-select w-auto" 
          value={language} 
          onChange={handleLanguageChange}
        >
          <option value="nodejs">Node.js</option>
          <option value="python3">Python 3</option>
          <option value="java">Java</option>
          <option value="cpp17">C++ 17</option>
          <option value="c">C</option>
        </select>
      </div>
      <div className="border rounded" style={{ height: "300px" }} data-aos="fade-up">
        <Editor
          language={mapJDoodleToMonaco(language)}
          theme="vs-dark"
          value={code}
          onChange={handleCodeChange}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
