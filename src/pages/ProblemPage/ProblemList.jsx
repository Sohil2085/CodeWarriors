import { Link } from 'react-router-dom';
import questions from '../../data/questions';

function ProblemList() {
    return (
        <>
        <div className="container py-4">
            <h1 className='mb-4'>Problem List</h1>
            <div className="list-group">
                {questions.map((q) => (
                    <Link
                    key={q.id}
                    to={`/problem/${q.id}`}
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                        <div>
                            <strong>{q.id}. {q.title}</strong>
                            </div>
                            <span className={`badge bg-${
                            q.difficulty === "Easy"
                                ? "success"
                                : q.difficulty === "Medium"
                                ? "warning"
                                : "danger"
                            }`}>
                            {q.difficulty}
                            </span>
                    </Link>
                ))}
            </div>
        </div>
        </>
    )
}

export default ProblemList;
