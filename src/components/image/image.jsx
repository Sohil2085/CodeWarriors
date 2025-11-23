"use client"

import { Code, Terminal, FileCode, Braces } from "lucide-react"
import { useEffect, useState } from "react"

const CodeBackground = ({ title, subtitle }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  // Code snippets to display in the background
  const codeSnippets = [
    `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
    `class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseList(head) {
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}`,
    `function isValid(s) {
  const stack = [];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      stack.push(s[i]);
    } else {
      const last = stack.pop();
      if (map[last] !== s[i]) return false;
    }
  }
  
  return stack.length === 0;
}`,
  ]

  // Rotate through code snippets
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % codeSnippets.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [codeSnippets.length])

  return (
    <div className="d-none d-lg-flex flex-column align-items-center justify-content-center bg-light text-dark p-5 position-relative overflow-hidden">
      {/* Animated code symbols in background */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10" style={{background: '#f8f9fa'}}>
        <div className="position-absolute" style={{ top: '10%', left: '15%', animation: 'pulse 2s infinite' }}>
          <Braces size={40} />
        </div>
        <div className="position-absolute" style={{ top: '30%', left: '80%', animation: 'pulse 2s infinite 0.3s' }}>
          <FileCode size={50} />
        </div>
        <div className="position-absolute" style={{ top: '70%', left: '20%', animation: 'pulse 2s infinite 0.7s' }}>
          <Terminal size={45} style={{color : '#252c3d'}}/>
        </div>
        <div className="position-absolute" style={{ top: '60%', left: '75%', animation: 'pulse 2s infinite 0.5s' }}>
          <Code size={55} style={{color : '#252c3d'}}/>
        </div>
        <div className="position-absolute" style={{ top: '85%', left: '45%', animation: 'pulse 2s infinite 0.2s' }}>
          <Braces size={35} style={{color : '#252c3d'}}/>
        </div>
        <div className="position-absolute" style={{ top: '15%', left: '60%', animation: 'pulse 2s infinite 0.1s' }}>
          <Terminal size={30} />
        </div>
      </div>

      <div className="position-relative z-1 w-100 d-flex flex-column align-items-center" style={{ maxWidth: '500px' }}>
        {/* Code editor mockup */}
        <div className="w-100 bg-light rounded shadow mb-4 overflow-hidden border">
          {/* Editor header */}
          <div className="bg-light px-3 py-2 d-flex align-items-center border-bottom">
            <div className="d-flex me-3">
              <div className="rounded-circle bg-danger me-1" style={{ width: '12px', height: '12px' }}></div>
              <div className="rounded-circle bg-warning me-1" style={{ width: '12px', height: '12px' }}></div>
              <div className="rounded-circle bg-success" style={{ width: '12px', height: '12px' }}></div>
            </div>
            <div className="text-dark small font-monospace">problem.js</div>
          </div>

          {/* Code content */}
          <div className="p-3 font-monospace small position-relative" style={{ height: '16rem', overflow: 'hidden', background: '#f8f9fa'}}>
            <pre className="text-dark m-0" style={{ whiteSpace: 'pre-wrap' }}>
              {codeSnippets[activeIndex]}
            </pre>
            <div className="position-absolute bottom-0 end-0 w-1 bg-dark" style={{ height: '1rem', animation: 'blink 1s infinite' }}></div>
          </div>
        </div>

        {/* Logo */}
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="rounded bg-primary bg-opacity-10 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
            <Code className="text-primary" style={{ width: '24px', height: '24px' }} />
          </div>
        </div>

        {/* Text content */}
        <h2 className="h4 fw-bold mb-2 text-center text-dark">{title}</h2>
        <p className="text-dark text-center">{subtitle}</p>
      </div>
    </div>
  )
}

export default CodeBackground
