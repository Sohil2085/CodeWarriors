import React, { useState, useEffect } from "react";
import { Form, FormControl, Button, InputGroup, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import TagButtons from "../../components/Tags/TagButton"; // keep using this if it's already Bootstrap styled
import "./ProblemPage.css";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar_Home"

import AOS from "aos";
import 'aos/dist/aos.css';
import { Book, Bookmark } from "react-bootstrap-icons";

const ProblemPage = () => {
  
  useEffect(() => {
         AOS.init({
         // Global settings
         duration: 700, // Animation duration
           easing: 'ease-out-cubic', // Animation easing
           once: true, // Only animate once
           disable: 'phone', // Disable on phone
         });
       }, []);
  
  const questions = [
    { id: 1, title: "Two Sum", tags: ["array", "hash-table"], difficulty: "Easy" },
    { id: 2, title: "Longest Substring Without Repeating Characters", tags: ["string", "sliding-window"], difficulty: "Medium" },
    { id: 3, title: "Merge Two Sorted Lists", tags: ["linked list"], difficulty: "Easy" },
    { id: 4, title: "Binary Tree Inorder Traversal", tags: ["tree", "dfs"], difficulty: "Easy" },
    { id: 5, title: "Word Search", tags: ["matrix", "backtracking"], difficulty: "Medium" },
    { id: 6, title: "Climbing Stairs", tags: ["dynamic-programming"], difficulty: "Easy" },
    { id: 7, title: "Valid Parentheses", tags: ["stack", "string"], difficulty: "Easy" },
    { id: 8, title: "Top K Frequent Elements", tags: ["heap", "hash-table"], difficulty: "Medium" },
    { id: 9, title: "Find Minimum in Rotated Sorted Array", tags: ["array", "binary-search"], difficulty: "Medium" },
    { id: 10, title: "Subsets", tags: ["backtracking", "bit manipulation"], difficulty: "Medium" },
    { id: 11, title: "Course Schedule", tags: ["graph", "topological sort"], difficulty: "Medium" },
    { id: 12, title: "Number of Islands", tags: ["matrix", "dfs", "bfs"], difficulty: "Medium" },
    { id: 13, title: "Implement Trie", tags: ["trie", "design"], difficulty: "Medium" },
    { id: 14, title: "LRU Cache", tags: ["design", "hash-table", "linked list"], difficulty: "Hard" },
    { id: 15, title: "Longest Palindromic Substring", tags: ["string", "dynamic-programming"], difficulty: "Medium" },
    { id: 16, title: "Search in Rotated Sorted Array", tags: ["array", "binary-search"], difficulty: "Medium" },
    { id: 17, title: "Minimum Window Substring", tags: ["string", "sliding-window", "two-pointers"], difficulty: "Hard" },
    { id: 18, title: "Longest Increasing Subsequence", tags: ["array", "dynamic-programming"], difficulty: "Medium" },
    { id: 19, title: "Word Ladder", tags: ["bfs", "graph"], difficulty: "Hard" },
    { id: 20, title: "Median of Two Sorted Arrays", tags: ["array", "binary-search", "divide and conquer"], difficulty: "Hard" },
  ];

  const tags = [
    "All Topics", "array", "string", "linked list", "tree", "matrix", "stack", "heap",
    "dynamic-programming", "backtracking", "hash-table", "dfs", "bfs", "sliding-window",
    "graph", "trie", "design", "two-pointers", "binary-search", "divide and conquer",
    "bit manipulation", "topological sort"
  ];

  const [activeTag, setActiveTag] = useState("All Topics");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState([]);

  const handleTagClick = (tag) => setActiveTag(tag);
  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const toggleFavorite = (questionId) => {
  setFavorites((prevFavorites) =>
    prevFavorites.includes(questionId)
      ? prevFavorites.filter((id) => id !== questionId) // remove
      : [...prevFavorites, questionId] // add
  );
  };

  const filteredQuestions = questions
    .filter((q) => activeTag === "All Topics" || q.tags.includes(activeTag))
    .filter((q) => q.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
    <NavBar />
    <section className="custom_container">
    <div className="container py-4">
      <div className="text-start mb-4">
        <h1 className="fw-bold" data-aos="fade-right">Interview Problem Set</h1>
        <p className="" data-aos="fade-up">Curated problems across categories for interviews and challenges.</p>
      </div>

      <div className="mb-3" data-aos="flip-up">
        <TagButtons tags={tags} onClick={handleTagClick} />
      </div>

      <Form className="mb-4" data-aos="fade-up">
        <InputGroup>
          <FormControl
            placeholder="Search questions"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Button variant="outline-secondary">
            <Bookmark /> Bookmarks
          </Button>
          <Button variant="outline-secondary">
            <Book /> Notes
          </Button>
        </InputGroup>
      </Form>

      <div className="list-group" >
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q) => (
            <div
              key={q.id}
              className="question-item d-flex justify-content-between align-items-center" data-aos="fade-up"
            >
              <div className="d-flex align-items-center">
                {favorites.includes(q.id) && (
                  <span className="check-icon">✔️</span>
                )}
                <Link to={`/problem/${q.id}`} className="text-decoration-none text-white">
                  {q.id}. {q.title}
                </Link>
              </div>

              <div className="d-flex align-items-center gap-2">
                <span
                  className={`badge ${
                    q.difficulty === "Easy"
                      ? "bg-success"
                      : q.difficulty === "Medium"
                      ? "bg-warning text-dark"
                      : "bg-danger"
                  }`}
                >
                  {q.difficulty}
                </span>
                <span
                  className={`favorite ${favorites.includes(q.id) ? "" : "inactive"}`}
                  onClick={() => toggleFavorite(q.id)}
                >
                  ★
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="alert alert-warning">No questions found.</div>
        )}

      </div>
    </div>
    <Footer />
  </section>
  </>
  );
};

export default ProblemPage;
