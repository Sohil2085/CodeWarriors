import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import questions from "../../data/questions";
import './ProblemDetail.css'
import CodeEditor from "../../components/Problem/CodeEditor";
import ProblemDescription from "../../components/Problem/ProblemDescription";
import TestRunner from "../../components/Problem/TestRunner";

const ProblemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const problemId = parseInt(id);
  const question = questions.find((q) => q.id === problemId);

  if (!question) {
    return <div className="container mt-4">Problem not found</div>;
  }

  return (
    <>
    <section className="custom_container">
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto border-r">
        <ProblemDescription problem={question} />
      </div>
      <div className="w-1/2 p-4 flex flex-col">
        <CodeEditor />
        <TestRunner />
      </div>
    </div>
    </section>
    </>
  );
};

export default ProblemDetail;