import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../utils/url";

const TestRunner = ({ code, language, customInput, setCustomInput }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Derive base URL to dynamically support both local and production environments
  const executeUrl = API_BASE_URL.replace("/api/v1", "/api/execute");

  const handleRunCode = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await axios.post(
        executeUrl,
        {
          code,
          language,
          input: customInput
        }
      );

      setResult({
        success: true,
        output: response.data.output,
        memory: response.data.memory,
        cpuTime: response.data.cpuTime
      });
    } catch (error) {
      console.error("Execution error:", error);
      setResult({
        success: false,
        error: error.response?.data?.error || "Execution failed",
        details: error.response?.data?.details || error.message
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-4" data-aos="fade-up">
      <div className="mb-3 mt-3" data-aos="fade-up">
        <label className="form-label">Custom Input</label>
        <textarea 
          className="form-control" 
          rows="3" 
          value={customInput} 
          onChange={(e) => setCustomInput(e.target.value)} 
          placeholder="Enter custom input here..."
        />
      </div>

      <button
        className="btn btn-success"
        onClick={handleRunCode}
        disabled={loading || !code}
      >
        {loading ? "Running..." : "Run Code"}
      </button>

      {result && (
        <div className="mt-3" data-aos="fade-up">
          <h5>Console Output</h5>
          <div className={`p-3 rounded bg-dark text-light font-monospace overflow-auto`} style={{maxHeight: '300px'}}>
            {result.success ? (
              <>
                <pre className="mb-2" style={{ whiteSpace: 'pre-wrap', color: 'inherit' }}>{result.output}</pre>
                <div className="small border-top pt-2 border-secondary">
                  <span>Memory: {result.memory} KB</span>
                  <span className="ms-3">Time: {result.cpuTime} s</span>
                </div>
              </>
            ) : (
              <div className="text-danger">
                <strong>Error: </strong> {result.error}
                {result.details && <pre className="mt-2 text-danger" style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(result.details, null, 2)}</pre>}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestRunner;
