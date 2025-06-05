import React from "react";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page container-fluid text-center">
      {/* Hero Section */}
      <section className="hero py-5 container">
        <h1 className="text-primary display-4">Code. Compete. Conquer.</h1>
        <p className="lead text-secondary">
          Step into the ultimate coding arena. Solve real-world challenges, track your progress, and become a CodeWarrior!
        </p>
        <div className="mt-4">
          <button className="btn btn-primary me-3">Start Solving</button>
          <button className="btn btn-outline-primary">Join CodeWarrior</button>
        </div>
      </section>

      {/* Code Snippet */}
      <section className="code-snippet container my-4 p-3 bg-dark text-start rounded">
        <pre className="text-light">
{`function FibonacciSequence(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(FibonacciSequence(10));`}
        </pre>
      </section>

      {/* What is CodeWarrior */}
      <section className="about py-4 container">
        <h2 className="text-primary">What is CodeWarrior?</h2>
        <p className="text-secondary">
          CodeWarrior is a modern coding platform that offers real-world coding challenges, instant feedback, and a community for developers to learn, compete, and grow their skills.
        </p>
      </section>

      {/* Key Features */}
      <section className="features py-4 container">
        <h2 className="text-primary">Key Features of Our Coding Platform</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-dark text-light">Real-world coding challenges</li>
          <li className="list-group-item bg-dark text-light">Instant feedback & code evaluation</li>
          <li className="list-group-item bg-dark text-light">Track your progress & earn badges</li>
        </ul>
      </section>
    </div>
  );
}
