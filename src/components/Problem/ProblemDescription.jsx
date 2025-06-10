

const ProblemDescription = ({ problem }) => {
  if (!problem) return <p>Loading...</p>;

  return (
    
    <div className="container">
      <h2>{problem.title}</h2>
      <p className="text-muted">{problem.difficulty}</p>

      {/* Tags */}
      <div className="mb-3">
        {problem.tags?.map((tag, index) => (
          <span key={index} className="badge bg-primary me-2">{tag}</span>
        ))}
      </div>

      {/* Description */}
      <p>{problem.description}</p>

      {/* Constraints */}
      <h5>Constraints:</h5>
      <ul>
        {problem.constraints?.map((c, idx) => (
          <li key={idx}>{c}</li>
        ))}
      </ul>

      {/* Examples */}
      <h5>Examples:</h5>
      {problem.examples?.map((example, idx) => (
        <div key={idx} className="card mb-3">
          <div className="card-body">
            <p><strong>Input:</strong> {example.input}</p>
            <p><strong>Output:</strong> {example.output}</p>
            <p><strong>Explanation:</strong> {example.explanation}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProblemDescription;
