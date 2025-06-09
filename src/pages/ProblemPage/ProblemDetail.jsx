import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import questions from "../../data/questions";


const ProblemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const problemId = parseInt(id);
  const question = questions.find((q) => q.id === problemId);

  if (!question) {
    return <div className="container mt-4">Problem not found</div>;
  }

  return (
    <div className="container mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h2>{question.title}</h2>
      <p><strong>Difficulty:</strong> {question.difficulty}</p>
      <p><strong>Tags:</strong> {question.tags.join(", ")}</p>
      {/* Add more UI like code editor, examples, etc. here */}
    </div>
  );
};

export default ProblemDetail;