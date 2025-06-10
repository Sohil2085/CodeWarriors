import { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ code, setCode }) => {
  const handleCodeChange = (value) => {
    setCode(value);
  };

  return (
    <div className="container my-4">
      <h4>Code Editor</h4>
      <div className="border rounded" style={{ height: "300px" }}>
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
