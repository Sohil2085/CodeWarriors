import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProblemById } from "../../utils/api";

function ProblemDetail() {
  const { id } = useParams(); // ✅ UUID comes as string
  const [problem, setProblem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProblem() {
      try {
        const data = await getProblemById(id); // ✅ use id directly
        setProblem(data);
      } catch (err) {
        console.error("Error fetching problem:", err);
        setError("Failed to load problem");
      }
    }
    if (id) fetchProblem();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!problem) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{problem.title}</h2>
      <p>{problem.description}</p>
      <span className={`badge bg-${
        {
          Easy: "success",
          Medium: "warning",
          Hard: "danger"
        }[problem.difficulty] || "secondary"
      }`}>
        {problem.difficulty}
      </span>
    </div>
  );
}

export default ProblemDetail;
