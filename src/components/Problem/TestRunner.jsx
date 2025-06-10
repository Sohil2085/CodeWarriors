import { useState } from "react";

const TestRunner = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRunCode = () => {
    setLoading(true);

    setTimeout(() => {
      setResult({
        status: "Wrong Answer",
        cases: [
          { input: `"race a car"`, expected: "false", output: "true", pass: false },
          { input: `"A man, a plan, a canal: Panama"`, expected: "true", output: "true", pass: true },
        ]
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container my-4">
      <button
        className="btn btn-success"
        onClick={handleRunCode}
        disabled={loading}
      >
        {loading ? "Running..." : "Run Code"}
      </button>

      {result && (
        <div className="mt-3">
          <h5>Test Result</h5>
          {result.cases.map((test, idx) => (
            <div key={idx} className={`alert ${test.pass ? 'alert-success' : 'alert-danger'}`}>
              <p><strong>Input:</strong> {test.input}</p>
              <p><strong>Expected:</strong> {test.expected}</p>
              <p><strong>Output:</strong> {test.output}</p>
              <p><strong>Status:</strong> {test.pass ? "✅ Passed" : "❌ Failed"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestRunner;
