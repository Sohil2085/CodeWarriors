import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProblemDetail.css";
import CodeEditor from "../../components/Problem/CodeEditor";
import ProblemDescription from "../../components/Problem/ProblemDescription";
import TestRunner from "../../components/Problem/TestRunner";
import Navbar from "../../components/Navbar/Navbar_Home";
import { getProblemById } from "../../utils/api.js"; // 👈 use your API function

const ProblemDetail = () => {
  const { id } = useParams(); // UUID from route
  // const numericId = parseInt(id, 10);
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const numericId = parseInt(id, 10); // convert
        const data = await getProblemById(numericId);
        setProblem(data);
      } catch (error) {
        console.error("Error fetching problem:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProblem();
  }, [id]);

  if (loading) return <div className="container mt-4">Loading...</div>;
  if (!problem) return <div className="container mt-4">Problem not found</div>;

  return (
    <>
      <Navbar />
      <section className="custom_container">
        <div className="row h-screen">
          <div className="col-5 w-1/2 p-5 overflow-y-auto border-r custom_first">
            <ProblemDescription problem={problem} /> {/* 👈 use DB problem */}
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
