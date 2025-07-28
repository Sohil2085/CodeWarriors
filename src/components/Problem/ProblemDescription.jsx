import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProblemById } from '../../utils/api';

const ProblemDescription = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    getProblemById(id)
      .then(setProblem)
      .catch((err) => console.error("Error fetching problem:", err));
  }, [id]);

  if (!problem) return <p>Loading...</p>;

  const renderDifficulty = () => {
    const color = {
      Easy: 'text-success',
      Medium: 'text-warning',
      Hard: 'text-danger',
    }[problem.difficulty] || 'text-secondary';

    return <p className={`fw-bold ${color}`}>{problem.difficulty}</p>;
  };

  return (
    <div className="container mt-4" data-aos="fade-up">
      <h2>{problem.title}</h2>
      {renderDifficulty()}

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
        {problem.constraints?.split('\n').map((c, idx) => (
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

      {/* Test Cases */}
      <h5>Test Cases:</h5>
      {problem.testCases?.map((test, idx) => (
        <div key={idx} className="card mb-2">
          <div className="card-body">
            <p><strong>Input:</strong> {test.input}</p>
            <p><strong>Expected Output:</strong> {test.output}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProblemDescription;
