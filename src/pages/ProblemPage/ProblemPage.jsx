import React, { useState } from "react";
import TagButtons from "../../components/Tags/TagButton";
import { Form, FormControl, Button, InputGroup } from "react-bootstrap";
import { FunnelFill } from "react-bootstrap-icons";
import "./ProblemPage.css";


const ProblemPage = () => {

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
          "All Topics",
          "array",
          "string",
          "linked list",
          "tree",
          "matrix",
          "stack",
          "heap",
          "dynamic-programming",
          "backtracking",
          "hash-table",
          "dfs",
          "bfs",
          "sliding-window",
          "graph",
          "trie",
          "design",
          "two-pointers",
          "binary-search",
          "divide and conquer",
          "bit manipulation",
          "topological sort"
        ];


  const [activeTag, setActiveTag] = useState("All Topics");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter questions based on selected tag
  const filteredQuestions = questions.filter((q) => {
    if (activeTag === "All Topics") return true;
    return q.tags.includes(activeTag);
  });

  // Further filter based on search query
  const searchedQuestions = filteredQuestions.filter((q) =>
    q.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <>
    <div className="container-fluid custom_container">
      <div className="container main">
        <div className="heading">
          <h1 className='fw-bold'>Interview Problem Set</h1>
          <p>Curated problems across categories for interviews and challanges.</p>
        </div>
        <div className='tag_btn'>
          <TagButtons tags={tags} onClick={handleTagClick}/>
        </div>
        <Form className="d-flex align-items-center my-3">
          <InputGroup>
            <FormControl
              type="search"
              placeholder="Search questions"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Button variant="outline-secondary" aria-label="Filter questions" title="Filter questions">
              <FunnelFill className="me-1" /> Filter
            </Button>
          </InputGroup>
        </Form>


        <div className="question-list mt-3">
          {searchedQuestions.length > 0 ? (
            searchedQuestions.map((q) => (
              <div key={q.id} className="question-item p-2 border rounded my-1 d-flex justify-content-between align-items-center">
                <div>
                  <strong>{q.id}. {q.title}</strong>
                  <div className="ms-3">
                  <div className={`difficulty ${q.difficulty.toLowerCase()}`}>
                    {q.difficulty} 
                  </div>
                  </div>
                </div>
                <div
                  className={`favorite ${q.isFavorite ? "" : "inactive"}`}
                  onClick={() => toggleFavorite(q.id)}
                  title={q.isFavorite ? "Remove from favorites" : "Add to favorites"}
                >
                  ★
                </div>
              </div>
            ))
          ) : (
            <p>No questions found.</p>
          )}
        </div>

      </div>
    </div>
    </>
  )
}

export default ProblemPage  