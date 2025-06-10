import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import questions from "../../data/questions";
import './ProblemDetail.css'
import CodeEditor from "../../components/Problem/CodeEditor";
import ProblemDescription from "../../components/Problem/ProblemDescription";
import TestRunner from "../../components/Problem/TestRunner";
import Navbar from "../../components/Navbar/Navbar_Home";

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
    <Navbar />
    <section className="custom_container">
    <div className="row h-screen">
      <div className="col-5 w-1/2 p-5 overflow-y-auto border-r">
        <ProblemDescription problem={question} />
      </div>
      <div className="col-7 w-1/2 p-4 flex flex-col">
        <CodeEditor />
        <TestRunner />
      </div>
    </div>
    </section>
    </>
  );
};

export default ProblemDetail;