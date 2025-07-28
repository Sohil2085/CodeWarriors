import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProblems } from "../../utils/api";

function ProblemList() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    getAllProblems()
      .then(setProblems)
      .catch(console.error);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">All Problems</h2>
      <div className="list-group">
        {problems.map((problem) => (
          <Link
            key={problem.id}
            to={`/problems/${problem.id}`} // ✅ This is the UUID
            className="list-group-item list-group-item-action"
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-1">{problem.title}</h5>
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProblemList;
