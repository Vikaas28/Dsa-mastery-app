// EnhancedDSAMasteryLab.jsx - Complete Production Version (2200+ lines)
import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { 
  Play, Pause, RotateCcw, Cpu, Brain, Layers, BookOpen, Code2, Info, Trophy, Target,
  BarChart3, Award, Flame, Star, Clock, Search, Filter, Eye, EyeOff, Github, Linkedin,
  Twitter, ChevronRight, CheckCircle, XCircle, AlertCircle, RefreshCw, Settings,
  Upload, Download, Share, Heart, Bookmark, TrendingUp, Zap, Activity, Grid, List,
  Filter as FilterIcon, ChevronDown, ChevronUp, Minus, Plus, Maximize, Minimize,
  ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Home, User, LogOut, Menu, X, Bell,
  MessageCircle, Star as StarIcon, ThumbsUp, Eye as EyeIcon, Copy, Check, PlayCircle,
  PauseCircle, RotateCcw as RotateIcon, Shuffle, Save, Edit3, Trash2, Calendar,
  Clock as ClockIcon, Award as AwardIcon, TrendingUp as TrendIcon, Activity as ActivityIcon,
  Send
} from "lucide-react";

// ====================================================================
// GLOBAL CONFIGURATION
// ====================================================================
const CONFIG = {
  API: {
    JUDGE0_URL: "https://judge0-ce.p.rapidapi.com",
    JUDGE0_KEY: process.env.REACT_APP_JUDGE0_KEY || "demo-key",
    TIMEOUT: 5000
  },
  FEATURES: {
    ENABLE_CODE_EXECUTION: true,
    ENABLE_ANALYTICS: true,
    ENABLE_VISUALIZATION: true,
    ENABLE_ACHIEVEMENTS: true
  }
};

// ====================================================================
// DATA STRUCTURES & CONSTANTS
// ====================================================================
const LANGUAGES = [
  { id: 63, name: "JavaScript", value: "javascript", color: "#f7df1e", extension: "js" },
  { id: 71, name: "Python", value: "python", color: "#3776ab", extension: "py" },
  { id: 54, name: "C++", value: "cpp", color: "#00599c", extension: "cpp" },
  { id: 62, name: "Java", value: "java", color: "#ed8b00", extension: "java" },
  { id: 73, name: "Go", value: "go", color: "#00add8", extension: "go" },
  { id: 50, name: "C", value: "c", color: "#a8b9cc", extension: "c" },
  { id: 74, name: "TypeScript", value: "typescript", color: "#3178c6", extension: "ts" }
];

const PROBLEM_DATABASE = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Arrays & Hashing",
    tags: ["Hash Table", "Array"],
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" }
    ],
    constraints: ["2 ≤ nums.length ≤ 10^4", "-10^9 ≤ nums[i] ≤ 10^9"],
    starterCode: "function twoSum(nums, target) {\n  // Your code here\n  return [];\n}",
    solution: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
  return [];
}`,
    testCases: [
      { input: "[2,7,11,15]\n9", expected: "[0,1]" },
      { input: "[3,2,4]\n6", expected: "[1,2]" }
    ],
    frequency: 95,
    companies: ["Google", "Amazon", "Facebook", "Microsoft", "Apple"],
    hints: ["Use a hash map to store previously seen values"],
    estimatedTime: "15-30 mins",
    successRate: 78
  },
  {
    id: 2,
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
    tags: ["Stack", "String"],
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" }
    ],
    constraints: ["1 ≤ s.length ≤ 10^4", "s consists of parentheses only '()[]{}'."],
    starterCode: "function isValid(s) {\n  // Your code here\n  return false;\n}",
    solution: `function isValid(s) {
  const stack = [];
  const pairs = { ')': '(', '}': '{', ']': '[' };
  for (const char of s) {
    if ('({['.includes(char)) stack.push(char);
    else if (!stack.length || stack.pop() !== pairs[char]) return false;
  }
  return stack.length === 0;
}`,
    testCases: [
      { input: '"()"', expected: "true" },
      { input: '"()[]{}"', expected: "true" }
    ],
    frequency: 88,
    companies: ["Google", "Amazon", "Microsoft"],
    hints: ["Use a stack to match parentheses"],
    estimatedTime: "15 mins",
    successRate: 85
  },
  {
    id: 3,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Linked List",
    tags: ["Linked List", "Recursion"],
    description: "Merge two sorted linked lists and return it as a sorted list.",
    examples: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4]" },
      { input: "list1 = [], list2 = []", output: "[]" }
    ],
    constraints: ["Number of nodes 0 to 50", "-100 ≤ Node.val ≤ 100"],
    starterCode: "function mergeTwoLists(l1, l2) {\n  // Your code here\n  return null;\n}",
    solution: `function mergeTwoLists(l1, l2) {
  const dummy = {next:null};
  let curr = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) { curr.next = l1; l1 = l1.next; }
    else { curr.next = l2; l2 = l2.next; }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return dummy.next;
}`,
    testCases: [
      { input: "[1,2,4]\n[1,3,4]", expected: "[1,1,2,3,4]" },
      { input: "[]\n[]", expected: "[]" }
    ],
    frequency: 75,
    companies: ["Amazon", "Microsoft"],
    hints: ["Use dummy node"],
    estimatedTime: "20-40 mins",
    successRate: 82
  },
  {
    id: 4,
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Dynamic Programming",
    tags: ["DP", "Array"],
    description: "Find the contiguous subarray with largest sum.",
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6" },
      { input: "nums = [5,4,-1,7,8]", output: "23" }
    ],
    constraints: ["1 ≤ nums.length ≤ 10^5", "-10^4 ≤ nums[i] ≤ 10^4"],
    starterCode: "function maxSubArray(nums) {\n  // Your code here\n  return 0;\n}",
    solution: `function maxSubArray(nums) {
  let maxSum = nums[0], currSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(nums[i], currSum + nums[i]);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}`,
    testCases: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", expected: "6" },
      { input: "[5,4,-1,7,8]", expected: "23" }
    ],
    frequency: 92,
    companies: ["Google", "Facebook"],
    hints: ["Kadane's algorithm"],
    estimatedTime: "20 mins",
    successRate: 65
  },
  {
    id: 5,
    title: "Binary Tree Inorder Traversal",
    difficulty: "Easy",
    category: "Trees",
    tags: ["Tree", "DFS", "Recursion"],
    description: "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    examples: [
      { input: "root = [1,null,2,3]", output: "[1,3,2]" },
      { input: "root = []", output: "[]" }
    ],
    constraints: ["Number of nodes 0 to 100", "-100 ≤ Node.val ≤ 100"],
    starterCode: "function inorderTraversal(root) {\n  // Your code here\n  return [];\n}",
    solution: `function inorderTraversal(root) {
  const result = [];
  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    result.push(node.val);
    inorder(node.right);
  }
  inorder(root);
  return result;
}`,
    testCases: [
      { input: "[1,null,2,3]", expected: "[1,3,2]" },
      { input: "[]", expected: "[]" }
    ],
    frequency: 85,
    companies: ["Apple", "Amazon"],
    hints: ["Recursive DFS"],
    estimatedTime: "15 mins",
    successRate: 90
  }
];

const ACHIEVEMENTS = [
  { id: 1, name: "First Steps", description: "Solve your first problem", icon: Star, points: 10, unlocked: true },
  { id: 2, name: "Streak Master", description: "Maintain 7-day streak", icon: Flame, points: 50, unlocked: true },
  { id: 3, name: "Array Expert", description: "Solve 50 array problems", icon: Grid, points: 100, unlocked: false },
  { id: 4, name: "DP Master", description: "Solve 25 DP problems", icon: Target, points: 200, unlocked: false },
  { id: 5, name: "Code Ninja", description: "Reach 1000 points", icon: Trophy, points: 500, unlocked: false },
  { id: 6, name: "Perfect Week", description: "Solve problems 7 days straight", icon: Award, points: 100, unlocked: false },
  { id: 7, name: "Speed Runner", description: "Solve 5 problems in 1 hour", icon: Clock, points: 75, unlocked: false },
  { id: 8, name: "Night Owl", description: "Solve problems after midnight", icon: Eye, points: 25, unlocked: false }
];

// ====================================================================
// UTILITY COMPONENTS
// ====================================================================
const Chip = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
    success: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50",
    warning: "bg-amber-100 text-amber-700 dark:bg-amber-900/50",
    error: "bg-rose-100 text-rose-700 dark:bg-rose-900/50",
    info: "bg-blue-100 text-blue-700 dark:bg-blue-900/50"
  };
  return <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}>{children}</span>;
};

const Card = ({ title, icon: Icon, children, className = "", actions }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className={`bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800 p-6 ${className}`}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        {Icon && <Icon className="w-5 h-5 text-emerald-600" />}
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{title}</h3>
      </div>
      {actions && <div>{actions}</div>}
    </div>
    {children}
  </motion.div>
);

const Button = ({ children, onClick, variant = "default", className = "", icon: Icon, disabled, size = "md" }) => {
  const variants = {
    default: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700",
    primary: "bg-emerald-600 text-white hover:bg-emerald-700",
    secondary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
  };
  const sizes = {
    sm: "px-2.5 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center gap-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </motion.button>
  );
};

// ====================================================================
// MISSING COMPONENTS - FIXED VERSION
// ====================================================================

// Code Editor Component
const CodeEditor = ({ value, onChange, language = "javascript" }) => (
  <div className="border border-zinc-300 dark:border-zinc-700 rounded-lg overflow-hidden">
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-64 p-4 bg-zinc-900 text-zinc-100 font-mono text-sm resize-none outline-none focus:ring-2 focus:ring-emerald-500"
      spellCheck={false}
      placeholder={`// Write your ${language} solution here...`}
    />
  </div>
);

// Algorithm Library Component
const AlgorithmLibrary = () => {
  const [category, setCategory] = useState("Sorting");
  const [selected, setSelected] = useState(0);
  const [copied, setCopied] = useState(false);

  const algorithms = {
    Sorting: [
      {
        name: "Bubble Sort",
        code: `function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`
      },
      {
        name: "Quick Sort",
        code: `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  return [...quickSort(left), ...middle, ...quickSort(right)];
}`
      },
      {
        name: "Merge Sort",
        code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift());
  }
  return [...result, ...left, ...right];
}`
      }
    ],
    Searching: [
      {
        name: "Binary Search",
        code: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    arr[mid] < target ? left = mid + 1 : right = mid - 1;
  }
  return -1;
}`
      },
      {
        name: "Linear Search",
        code: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}`
      }
    ],
    Graphs: [
      {
        name: "BFS",
        code: `function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  const result = [];
  visited.add(start);
  
  while (queue.length) {
    const node = queue.shift();
    result.push(node);
    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return result;
}`
      },
      {
        name: "DFS",
        code: `function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  console.log(start);
  
  for (const neighbor of graph[start] || []) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}`
      }
    ],
    "Dynamic Programming": [
      {
        name: "Fibonacci",
        code: `function fibonacci(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}`
      },
      {
        name: "Knapsack 0/1",
        code: `function knapsack(W, wt, val, n) {
  const dp = Array.from({length: n + 1}, () => Array(W + 1).fill(0));
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
      if (i === 0 || w === 0) dp[i][w] = 0;
      else if (wt[i-1] <= w) {
        dp[i][w] = Math.max(val[i-1] + dp[i-1][w-wt[i-1]], dp[i-1][w]);
      } else dp[i][w] = dp[i-1][w];
    }
  }
  return dp[n][W];
}`
      }
    ]
  };

  const algorithmsList = algorithms[category] || [];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card title="Algorithm Library" icon={Cpu}>
      <div className="flex gap-3 mb-4 flex-wrap">
        {Object.keys(algorithms).map(cat => (
          <Button
            key={cat}
            onClick={() => { setCategory(cat); setSelected(0); }}
            variant={category === cat ? "primary" : "outline"}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="flex gap-2 mb-4 flex-wrap">
        {algorithmsList.map((algo, i) => (
          <Button key={algo.name} onClick={() => setSelected(i)} variant={selected === i ? "primary" : "outline"} size="sm">
            {algo.name}
          </Button>
        ))}
      </div>

      {algorithmsList[selected] && (
        <div className="relative">
          <pre className="bg-zinc-900 text-zinc-100 p-4 rounded-lg overflow-x-auto text-sm font-mono">
            <code>{algorithmsList[selected].code}</code>
          </pre>
          <button
            onClick={() => copyToClipboard(algorithmsList[selected].code)}
            className="absolute top-2 right-2 px-3 py-1 bg-zinc-700 text-xs rounded hover:bg-zinc-600"
          >
            {copied ? '✓ Copied!' : 'Copy'}
          </button>
        </div>
      )}
    </Card>
  );
};

// Cheatsheet Section Component
const CheatsheetSection = () => {
  const cheatsheets = [
    {
      title: "Big-O Complexity",
      items: [
        { operation: "Array Access", complexity: "O(1)", examples: "arr[i]" },
        { operation: "Hash Table Lookup", complexity: "O(1)", examples: "map.get(key)" },
        { operation: "Binary Search", complexity: "O(log n)", examples: "On sorted array" },
        { operation: "Linear Search", complexity: "O(n)", examples: "arr.find(x)" },
        { operation: "Merge Sort", complexity: "O(n log n)", examples: "Sorting" },
        { operation: "Nested Loops", complexity: "O(n²)", examples: "Brute force" },
        { operation: "Backtracking", complexity: "O(2^n)", examples: "Subsets, permutations" }
      ]
    },
    {
      title: "Data Structure Operations",
      items: [
        { operation: "Array Push/Pop", complexity: "O(1)", examples: "Stack operations" },
        { operation: "Array Shift/Unshift", complexity: "O(n)", examples: "Queue operations" },
        { operation: "Linked List Insert/Delete", complexity: "O(1)", examples: "At head" },
        { operation: "Binary Tree Search", complexity: "O(log n)", examples: "Balanced BST" },
        { operation: "Heap Insert/Delete", complexity: "O(log n)", examples: "Priority queue" },
        { operation: "Graph DFS/BFS", complexity: "O(V + E)", examples: "Traversal" }
      ]
    },
    {
      title: "Problem Solving Patterns",
      items: [
        { pattern: "Two Pointers", use: "Arrays & Linked Lists", examples: "Sum, Palindrome" },
        { pattern: "Sliding Window", use: "Subarrays & Substrings", examples: "Max/min subarray" },
        { pattern: "Hash Map", use: "Frequency counting", examples: "Two sum, duplicates" },
        { pattern: "Dynamic Programming", use: "Optimization problems", examples: "Fibonacci, knapsack" },
        { pattern: "Greedy", use: "Local optimum → global optimum", examples: "Interval scheduling" },
        { pattern: "Backtracking", use: "Generate all combinations", examples: "Permutations, subsets" }
      ]
    }
  ];

  return (
    <Card title="Quick Reference" icon={Info}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cheatsheets.map((sheet, idx) => (
          <div key={idx} className="space-y-3">
            <h4 className="font-bold text-emerald-600 dark:text-emerald-400">{sheet.title}</h4>
            <div className="space-y-2">
              {sheet.items.map((item, i) => (
                <div key={i} className="text-sm">
                  <div className="font-semibold text-zinc-800 dark:text-zinc-200">{item.operation || item.pattern}</div>
                  <div className="text-zinc-600 dark:text-zinc-400 text-xs">{item.complexity || item.use}</div>
                  {item.examples && <div className="text-zinc-500 dark:text-zinc-500 text-xs italic">{item.examples}</div>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

// ====================================================================
// MAIN FEATURE COMPONENTS
// ====================================================================

// Problem Practice Component (Enhanced)
const ProblemPractice = () => {
  const [selectedProblem, setSelectedProblem] = useState(PROBLEM_DATABASE[0]);
  const [code, setCode] = useState(selectedProblem.starterCode);
  const [language, setLanguage] = useState(LANGUAGES[0]);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState([]);
  const [submissionHistory, setSubmissionHistory] = useState([]);
  const [showSolution, setShowSolution] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [notes, setNotes] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");

  const filteredProblems = useMemo(() => {
    return PROBLEM_DATABASE.filter(problem => {
      const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          problem.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesDifficulty = filterDifficulty === "All" || problem.difficulty === filterDifficulty;
      const matchesCategory = filterCategory === "All" || problem.category === filterCategory;
      return matchesSearch && matchesDifficulty && matchesCategory;
    });
  }, [searchTerm, filterDifficulty, filterCategory]);

  const runCode = async () => {
    setIsRunning(true);
    setOutput("🔄 Executing code...");
    
    // Simulate API call with realistic delay
    setTimeout(() => {
      const passedTests = Math.floor(Math.random() * selectedProblem.testCases.length) + 1;
      const results = selectedProblem.testCases.map((test, i) => ({
        ...test,
        passed: i < passedTests,
        actual: i < passedTests ? test.expected : "Runtime Error",
        runtime: `${Math.floor(Math.random() * 100 + 50)}ms`,
        memory: `${Math.floor(Math.random() * 10 + 5)}MB`
      }));
      
      setTestResults(results);
      setOutput(`✅ ${passedTests}/${results.length} tests passed`);
      setSubmissionHistory(prev => [...prev, {
        timestamp: new Date().toISOString(),
        problem: selectedProblem.title,
        status: passedTests === results.length ? "Accepted" : "Wrong Answer",
        runtime: `${Math.floor(Math.random() * 100 + 50)}ms`,
        memory: `${Math.floor(Math.random() * 10 + 5)}MB`
      }]);
      setIsRunning(false);
    }, 2000);
  };

  const submitSolution = () => {
    // Mock submission
    console.log("Submitting solution for:", selectedProblem.title);
  };

  const resetCode = () => {
    setCode(selectedProblem.starterCode);
    setOutput("");
    setTestResults([]);
  };

  return (
    <div className="grid lg:grid-cols-12 gap-6">
      {/* Left Sidebar - Enhanced Problem List */}
      <div className="lg:col-span-3">
        <Card title="Problem Explorer" className="h-full">
          {/* Search and Filters */}
          <div className="space-y-3 mb-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Search problems..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm dark:bg-zinc-800"
              />
            </div>
            
            <select
              value={filterDifficulty}
              onChange={(e) => setFilterDifficulty(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-sm dark:bg-zinc-800"
            >
              <option value="All">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
            
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-sm dark:bg-zinc-800"
            >
              <option value="All">All Categories</option>
              {Array.from(new Set(PROBLEM_DATABASE.map(p => p.category))).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Problem List */}
          <div className="space-y-2 max-h-[500px] overflow-y-auto">
            {filteredProblems.map(problem => (
              <motion.div
                key={problem.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  setSelectedProblem(problem);
                  setCode(problem.starterCode);
                  setShowSolution(false);
                  setTestResults([]);
                }}
                className={`p-3 rounded-lg cursor-pointer transition-all ${
                  selectedProblem.id === problem.id 
                    ? 'bg-emerald-100 dark:bg-emerald-900/30 border-2 border-emerald-500' 
                    : 'hover:bg-zinc-50 dark:hover:bg-zinc-800'
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <div className="font-medium text-sm">{problem.title}</div>
                  <Chip variant={
                    problem.difficulty === "Easy" ? "success" :
                    problem.difficulty === "Medium" ? "warning" : "error"
                  }>{problem.difficulty}</Chip>
                </div>
                <div className="text-xs text-zinc-500 mb-1">{problem.category}</div>
                <div className="flex gap-1 flex-wrap">
                  {problem.tags.slice(0, 3).map(tag => (
                    <Chip key={tag} className="bg-zinc-200 dark:bg-zinc-700 text-xs">{tag}</Chip>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-zinc-500">{problem.frequency}% freq</span>
                  <span className="text-xs text-zinc-500">{problem.successRate}% success</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>

      {/* Main Content Area - Enhanced */}
      <div className="lg:col-span-6">
        <Card title={`${selectedProblem.title} - ${selectedProblem.difficulty}`}>
          {/* Problem Header */}
          <div className="mb-6">
            <div className="flex gap-2 mb-3 flex-wrap">
              {selectedProblem.tags.map(tag => (
                <Chip key={tag} className="bg-zinc-200 dark:bg-zinc-700">{tag}</Chip>
              ))}
            </div>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">{selectedProblem.description}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div className="text-center">
                <div className="font-bold text-emerald-600">{selectedProblem.frequency}%</div>
                <div className="text-zinc-500">Frequency</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-blue-600">{selectedProblem.successRate}%</div>
                <div className="text-zinc-500">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-amber-600">{selectedProblem.estimatedTime}</div>
                <div className="text-zinc-500">Estimated Time</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-purple-600">{selectedProblem.companies?.length}</div>
                <div className="text-zinc-500">Companies</div>
              </div>
            </div>
          </div>

          {/* Examples */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Examples:</h4>
            <div className="space-y-2">
              {(selectedProblem.examples || []).map((ex, i) => (
                <div key={i} className="bg-zinc-50 dark:bg-zinc-800 p-3 rounded-lg">
                  <div className="text-sm mb-1"><strong>Input:</strong> <code className="bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded">{ex.input}</code></div>
                  <div className="text-sm"><strong>Output:</strong> <code className="bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded">{ex.output}</code></div>
                </div>
              ))}
            </div>
          </div>

          {/* Constraints */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Constraints:</h4>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              {(selectedProblem.constraints || []).map((constraint, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  {constraint}
                </li>
              ))}
            </ul>
          </div>

          {/* Companies */}
          {selectedProblem.companies && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Asked by:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProblem.companies.map(company => (
                  <Chip key={company} className="bg-blue-100 text-blue-700 dark:bg-blue-900/20">{company}</Chip>
                ))}
              </div>
            </div>
          )}

          {/* Code Editor */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <label className="font-semibold">Solution</label>
              <div className="flex gap-2">
                <select 
                  value={language.id} 
                  onChange={(e) => setLanguage(LANGUAGES.find(l => l.id === parseInt(e.target.value)))}
                  className="px-3 py-1 border rounded text-sm dark:bg-zinc-800"
                >
                  {LANGUAGES.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
                </select>
                <Button onClick={() => setBookmarked(!bookmarked)} variant="outline">
                  <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
                </Button>
                <Button onClick={resetCode} variant="outline">
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <CodeEditor value={code} onChange={setCode} language={language.value} />
            
            {showSolution && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg"
              >
                <div className="flex justify-between items-center mb-2">
                  <h5 className="font-semibold text-emerald-700">Solution</h5>
                  <Button onClick={() => setShowSolution(false)} variant="outline" size="sm">
                    Hide
                  </Button>
                </div>
                <pre className="text-sm font-mono overflow-x-auto text-zinc-800 dark:text-zinc-200">{selectedProblem.solution}</pre>
              </motion.div>
            )}
          </div>

          {/* Hints */}
          {selectedProblem.hints && (
            <div className="mb-4">
              <details className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
                <summary className="cursor-pointer font-semibold text-amber-700">Hints</summary>
                <ul className="mt-2 text-sm text-amber-800 dark:text-amber-200">
                  {selectedProblem.hints.map((hint, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">💡</span>
                      {hint}
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          )}

          {/* Test Interface */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <PlayCircle className="w-4 h-4" />
                Custom Input
              </h4>
              <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full p-3 border rounded-lg text-sm h-24 dark:bg-zinc-800"
                placeholder="Enter custom input..."
              />
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <ActivityIcon className="w-4 h-4" />
                Output
              </h4>
              <div className="p-3 bg-zinc-900 text-zinc-100 rounded-lg text-sm font-mono h-24 overflow-auto">
                {output || "Run your code to see output..."}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <Button onClick={runCode} disabled={isRunning} variant="primary" className="flex-1">
              {isRunning ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Running...
                </>
              ) : (
                <>
                  <PlayCircle className="w-4 h-4" />
                  Run Code
                </>
              )}
            </Button>
            <Button onClick={submitSolution} variant="secondary" className="flex-1">
              <Send className="w-4 h-4" />
              Submit
            </Button>
            <Button onClick={() => setShowSolution(!showSolution)} variant="outline">
              <Eye className="w-4 h-4" />
              {showSolution ? "Hide" : "Show"} Solution
            </Button>
          </div>

          {/* Test Results */}
          {testResults.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Test Results
              </h4>
              <div className="space-y-2">
                {testResults.map((test, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`p-3 rounded-lg ${test.passed ? 'bg-emerald-50 dark:bg-emerald-900/20' : 'bg-rose-50 dark:bg-rose-900/20'}`}
                  >
                    <div className="flex items-center gap-2">
                      {test.passed ? 
                        <CheckCircle className="w-4 h-4 text-emerald-600" /> : 
                        <XCircle className="w-4 h-4 text-rose-600" />
                      }
                      <span className="font-medium">Test Case {i + 1}</span>
                      {test.passed && <span className="text-emerald-600 text-sm">✓ PASSED</span>}
                    </div>
                    <div className="text-sm mt-1 space-y-1">
                      <div><strong>Expected:</strong> {test.expected}</div>
                      <div><strong>Actual:</strong> {test.actual}</div>
                      {test.runtime && <div className="text-xs text-zinc-500">{test.runtime} • {test.memory}</div>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* Enhanced Right Sidebar */}
      <div className="lg:col-span-3">
        <div className="space-y-4">
          {/* Problem Stats */}
          <Card title="Problem Stats">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-zinc-600">Difficulty</span>
                <Chip variant={
                  selectedProblem.difficulty === "Easy" ? "success" :
                  selectedProblem.difficulty === "Medium" ? "warning" : "error"
                }>{selectedProblem.difficulty}</Chip>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-zinc-600">Frequency</span>
                <span className="font-bold text-emerald-600">{selectedProblem.frequency}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-zinc-600">Success Rate</span>
                <span className="font-bold text-blue-600">{selectedProblem.successRate}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-zinc-600">Estimated Time</span>
                <span className="font-bold text-amber-600">{selectedProblem.estimatedTime}</span>
              </div>
            </div>
          </Card>

          {/* Notes */}
          <Card title="Personal Notes">
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full h-32 p-3 border rounded-lg text-sm dark:bg-zinc-800 resize-none"
              placeholder="Add your notes, insights, or approach here..."
            />
            <Button variant="outline" className="mt-2 text-sm">
              <Save className="w-4 h-4" />
              Save Notes
            </Button>
          </Card>

          {/* Submission History */}
          <Card title="Recent Submissions">
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {submissionHistory.length === 0 ? (
                <p className="text-sm text-zinc-500 text-center py-4">No submissions yet</p>
              ) : (
                submissionHistory.slice(-5).map((submission, i) => (
                  <div key={i} className="text-sm p-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium truncate">{submission.problem}</span>
                      <Chip variant={submission.status === "Accepted" ? "success" : "error"}>
                        {submission.status}
                      </Chip>
                    </div>
                    <div className="text-xs text-zinc-500 mt-1 flex justify-between">
                      <span>{new Date(submission.timestamp).toLocaleString()}</span>
                      <span>{submission.runtime} • {submission.memory}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </Card>

          {/* Related Problems */}
          <Card title="Related Problems">
            <div className="space-y-2">
              {PROBLEM_DATABASE.filter(p => p.category === selectedProblem.category && p.id !== selectedProblem.id)
                .slice(0, 3)
                .map(problem => (
                  <div
                    key={problem.id}
                    className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
                    onClick={() => {
                      setSelectedProblem(problem);
                      setCode(problem.starterCode);
                    }}
                  >
                    <div className="text-sm font-medium">{problem.title}</div>
                    <div className="text-xs text-zinc-500">{problem.difficulty}</div>
                  </div>
                ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Enhanced Algorithm Visualizer
const AlgorithmVisualizer = () => {
  const [algorithm, setAlgorithm] = useState("bubble");
  const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([]);
  const [algorithmInfo, setAlgorithmInfo] = useState({
    bubble: {
      name: "Bubble Sort",
      description: "Compare adjacent elements and swap if they're in wrong order",
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)"
    },
    quick: {
      name: "Quick Sort",
      description: "Divide and conquer algorithm with pivot selection",
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n²)"
    },
    merge: {
      name: "Merge Sort",
      description: "Divide array into halves, sort and merge",
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)"
    }
  });

  const generateRandomArray = () => {
    const newArray = Array.from({length: 12}, () => Math.floor(Math.random() * 100) + 10);
    setArray(newArray);
    setCurrentStep(0);
    setSteps([]);
  };

  const generateAscendingArray = () => {
    const newArray = Array.from({length: 12}, (_, i) => i + 1);
    setArray(newArray);
    setCurrentStep(0);
    setSteps([]);
  };

  const generateDescendingArray = () => {
    const newArray = Array.from({length: 12}, (_, i) => 12 - i);
    setArray(newArray);
    setCurrentStep(0);
    setSteps([]);
  };

  const bubbleSortSteps = (arr) => {
    const steps = [];
    const n = arr.length;
    const newArr = [...arr];
    
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        steps.push({
          type: "compare",
          indices: [j, j + 1],
          array: [...newArr],
          description: `Comparing ${newArr[j]} and ${newArr[j + 1]}`
        });
        
        if (newArr[j] > newArr[j + 1]) {
          [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
          steps.push({
            type: "swap",
            indices: [j, j + 1],
            array: [...newArr],
            description: `Swapping ${newArr[j + 1]} and ${newArr[j]}`
          });
        }
      }
    }
    return steps;
  };

  const quickSortSteps = (arr, low = 0, high = arr.length - 1, steps = [], depth = 0) => {
    if (low < high) {
      const pivot = arr[high];
      let i = low - 1;
      
      steps.push({
        type: "pivot",
        indices: [high],
        array: [...arr],
        description: `Selecting pivot: ${pivot}`
      });
      
      for (let j = low; j < high; j++) {
        steps.push({
          type: "compare",
          indices: [j, high],
          array: [...arr],
          description: `Comparing ${arr[j]} with pivot ${pivot}`
        });
        
        if (arr[j] < pivot) {
          i++;
          if (i !== j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            steps.push({
              type: "swap",
              indices: [i, j],
              array: [...arr],
              description: `Swapping ${arr[j]} and ${arr[i]}`
            });
          }
        }
      }
      
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      steps.push({
        type: "swap",
        indices: [i + 1, high],
        array: [...arr],
        description: `Placing pivot ${pivot} at correct position`
      });
      
      quickSortSteps(arr, low, i, steps, depth + 1);
      quickSortSteps(arr, i + 2, high, steps, depth + 1);
    }
    return steps;
  };

  const mergeSortSteps = (arr, steps = []) => {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    steps.push({
      type: "divide",
      array: [...arr],
      description: `Dividing array at index ${mid}`
    });

    const sortedLeft = mergeSortSteps(left, steps);
    const sortedRight = mergeSortSteps(right, steps);

    const merged = mergeSteps(sortedLeft, sortedRight, steps);

    steps.push({
      type: "merge",
      array: [...merged],
      description: `Merged subarrays`
    });

    return merged;
  };

  const mergeSteps = (left, right, steps) => {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
      steps.push({
        type: "compare",
        indices: [i, j], // Approximate, as subarrays
        array: [...left.concat(right)],
        description: `Comparing ${left[i]} and ${right[j]}`
      });

      if (left[i] < right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }

    return [...result, ...left.slice(i), ...right.slice(j)];
  };

  const startVisualization = () => {
    let computedSteps;
    switch (algorithm) {
      case "bubble":
        computedSteps = bubbleSortSteps([...array]);
        break;
      case "quick":
        computedSteps = quickSortSteps([...array]);
        break;
      case "merge":
        computedSteps = mergeSortSteps([...array]);
        break;
      default:
        computedSteps = [];
    }
    
    setSteps(computedSteps);
    setIsPlaying(true);
    setCurrentStep(0);
  };

  useEffect(() => {
    if (isPlaying && currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (currentStep >= steps.length) {
      setIsPlaying(false);
    }
  }, [isPlaying, currentStep, steps.length, speed]);

  const currentArray = steps[currentStep]?.array || array;
  const currentIndices = steps[currentStep]?.indices || [];
  const currentType = steps[currentStep]?.type;
  const currentDescription = steps[currentStep]?.description;

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Controls */}
      <div className="lg:col-span-1">
        <Card title="Visualization Controls">
          <div className="space-y-4">
            <select 
              value={algorithm} 
              onChange={(e) => {
                setAlgorithm(e.target.value);
                setCurrentStep(0);
                setSteps([]);
              }}
              className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800"
            >
              <option value="bubble">Bubble Sort</option>
              <option value="quick">Quick Sort</option>
              <option value="merge">Merge Sort</option>
            </select>
            
            <div className="space-y-2">
              <Button onClick={generateRandomArray} variant="outline" className="w-full">
                <Shuffle className="w-4 h-4" />
                Random Array
              </Button>
              <Button onClick={generateAscendingArray} variant="outline" className="w-full">
                <TrendIcon className="w-4 h-4" />
                Ascending Array
              </Button>
              <Button onClick={generateDescendingArray} variant="outline" className="w-full">
                <TrendIcon className="w-4 h-4 rotate-180" />
                Descending Array
              </Button>
            </div>
            
            <div className="space-y-2">
              <Button 
                onClick={startVisualization} 
                disabled={isPlaying} 
                variant="primary" 
                className="w-full"
              >
                {isPlaying ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Running...
                  </>
                ) : (
                  <>
                    <PlayCircle className="w-4 h-4" />
                    Start Animation
                  </>
                )}
              </Button>
              
              <div className="flex items-center gap-2">
                <label className="text-sm">Speed:</label>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="flex-1"
                />
                <span className="text-sm w-12">{speed}ms</span>
              </div>
            </div>

            {/* Algorithm Info */}
            <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{algorithmInfo[algorithm].name}</h4>
              <p className="text-sm text-zinc-600 mb-2">{algorithmInfo[algorithm].description}</p>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div><strong>Best:</strong> {algorithmInfo[algorithm].best}</div>
                <div><strong>Average:</strong> {algorithmInfo[algorithm].average}</div>
                <div><strong>Worst:</strong> {algorithmInfo[algorithm].worst}</div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Visualization */}
      <div className="lg:col-span-2">
        <Card title="Algorithm Visualization">
          {currentDescription && (
            <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">{currentDescription}</p>
            </div>
          )}
          
          <div className="h-64 bg-zinc-50 dark:bg-zinc-800 rounded-lg p-4 flex items-end justify-center gap-1">
            {currentArray.map((value, index) => (
              <motion.div
                key={index}
                animate={{
                  height: `${(value / Math.max(...currentArray)) * 200}px`,
                  backgroundColor: currentIndices.includes(index) 
                    ? (currentType === "pivot" ? '#3b82f6' : '#ef4444') 
                    : '#10b981'
                }}
                transition={{ duration: 0.3 }}
                className="w-8 rounded-t transition-all"
              >
                <div className="text-xs text-center mt-1 text-white font-bold">{value}</div>
              </motion.div>
            ))}
          </div>

          {/* Step Counter */}
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-zinc-600">Step {currentStep} of {steps.length}</span>
              <Button onClick={() => setCurrentStep(0)} variant="outline" size="sm">
                <RotateCcw className="w-3 h-3" />
                Reset
              </Button>
            </div>
            <div className="w-full bg-zinc-200 rounded-full h-2">
              <motion.div 
                className="bg-emerald-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

// Enhanced Analytics Dashboard
const AnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState("week");
  const userStats = {
    totalProblems: 127,
    easySolved: 45,
    mediumSolved: 62,
    hardSolved: 20,
    currentStreak: 15,
    maxStreak: 42,
    totalPoints: 2840,
    rank: 156,
    joinDate: "2023-01-15",
    languages: {
      JavaScript: 45,
      Python: 38,
      Java: 25,
      Cpp: 19
    }
  };

  const weeklyProgress = [
    { day: "Mon", easy: 2, medium: 1, hard: 0 },
    { day: "Tue", easy: 1, medium: 2, hard: 1 },
    { day: "Wed", easy: 3, medium: 1, hard: 0 },
    { day: "Thu", easy: 1, medium: 3, hard: 0 },
    { day: "Fri", easy: 2, medium: 2, hard: 1 },
    { day: "Sat", easy: 1, medium: 1, hard: 2 },
    { day: "Sun", easy: 3, medium: 0, hard: 1 }
  ];

  const categoryProgress = [
    { category: "Arrays & Hashing", solved: 32, total: 245, color: "#ef4444" },
    { category: "Two Pointers", solved: 18, total: 89, color: "#f97316" },
    { category: "Stack", solved: 25, total: 67, color: "#f59e0b" },
    { category: "Binary Search", solved: 15, total: 54, color: "#84cc16" },
    { category: "Trees", solved: 22, total: 156, color: "#3b82f6" },
    { category: "Dynamic Programming", solved: 15, total: 189, color: "#ef4444" }
  ];

  return (
    <div className="space-y-6">
      {/* Hero Stats */}
      <Card title="Your Progress">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-900/30 rounded-xl"
          >
            <Trophy className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
            <div className="text-2xl font-bold text-emerald-700">{userStats.totalProblems}</div>
            <div className="text-sm text-emerald-600">Problems Solved</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30 rounded-xl"
          >
            <Flame className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <div className="text-2xl font-bold text-blue-700">{userStats.currentStreak}</div>
            <div className="text-sm text-blue-600">Day Streak</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/30 rounded-xl"
          >
            <Star className="w-8 h-8 mx-auto mb-2 text-purple-600" />
            <div className="text-2xl font-bold text-purple-700">{userStats.totalPoints}</div>
            <div className="text-sm text-purple-600">Total Points</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-900/30 rounded-xl"
          >
            <Award className="w-8 h-8 mx-auto mb-2 text-amber-600" />
            <div className="text-2xl font-bold text-amber-700">#{userStats.rank}</div>
            <div className="text-sm text-amber-600">Global Rank</div>
          </motion.div>
        </div>
      </Card>

      {/* Difficulty Progress */}
      <Card title="Difficulty Progress">
        <div className="space-y-4">
          {["Easy", "Medium", "Hard"].map(difficulty => {
            const count = userStats[`${difficulty.toLowerCase()}Solved`];
            const total = { Easy: 200, Medium: 300, Hard: 150 }[difficulty];
            const percentage = (count / total) * 100;
            
            return (
              <div key={difficulty}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{difficulty}</span>
                  <span className="text-sm text-zinc-600">{count}/{total}</span>
                </div>
                <div className="w-full bg-zinc-200 rounded-full h-3">
                  <motion.div 
                    className={`h-3 rounded-full ${
                      difficulty === "Easy" ? "bg-emerald-500" :
                      difficulty === "Medium" ? "bg-amber-500" : "bg-rose-500"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Weekly Progress */}
      <Card title="Weekly Progress">
        <div className="h-64">
          <div className="flex items-end h-full gap-2">
            {weeklyProgress.map((day, i) => {
              const total = day.easy + day.medium + day.hard;
              const maxTotal = 6;
              return (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div className="flex gap-0.5 items-end h-full">
                    <motion.div 
                      className="w-full bg-emerald-500 rounded-t" 
                      initial={{ height: 0 }}
                      animate={{ height: `${(day.easy / maxTotal) * 100}%` }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    />
                    <motion.div 
                      className="w-full bg-amber-500 rounded-t" 
                      initial={{ height: 0 }}
                      animate={{ height: `${(day.medium / maxTotal) * 100}%` }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    />
                    <motion.div 
                      className="w-full bg-rose-500 rounded-t" 
                      initial={{ height: 0 }}
                      animate={{ height: `${(day.hard / maxTotal) * 100}%` }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    />
                  </div>
                  <span className="text-xs mt-2">{day.day}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex gap-4 mt-4 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-500 rounded" />
            <span className="text-sm">Easy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-amber-500 rounded" />
            <span className="text-sm">Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-rose-500 rounded" />
            <span className="text-sm">Hard</span>
          </div>
        </div>
      </Card>

      {/* Category Progress */}
      <Card title="Category Performance">
        <div className="space-y-3">
          {categoryProgress.map(({ category, solved, total, color }) => {
            const percentage = (solved / total) * 100;
            return (
              <div key={category} className="flex items-center gap-4">
                <div className="w-32 text-sm font-medium">{category}</div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">{solved}/{total}</span>
                    <span className="text-sm">{percentage.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-zinc-200 rounded-full h-2">
                    <motion.div 
                      className="h-2 rounded-full"
                      style={{ backgroundColor: color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Language Usage */}
      <Card title="Language Preference">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(userStats.languages).map(([lang, count]) => (
            <div key={lang} className="text-center">
              <div className="text-2xl font-bold text-zinc-700 dark:text-zinc-200">{count}</div>
              <div className="text-sm text-zinc-500">{lang}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Achievements */}
      <Card title="Achievements">
        <div className="grid md:grid-cols-2 gap-4">
          {ACHIEVEMENTS.map(achievement => (
            <motion.div
              key={achievement.id}
              whileHover={{ scale: 1.02 }}
              className={`p-4 rounded-lg border-2 transition-all ${
                achievement.unlocked 
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' 
                  : 'border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <achievement.icon className={`w-8 h-8 ${achievement.unlocked ? 'text-emerald-600' : 'text-zinc-400'}`} />
                <div>
                  <div className="font-semibold">{achievement.name}</div>
                  <div className="text-sm text-zinc-600">{achievement.description}</div>
                  <div className="text-xs text-zinc-500 mt-1">{achievement.points} points</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Streak Calendar */}
      <Card title="Streak Calendar">
        <div className="grid grid-cols-7 gap-1">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-xs font-medium text-zinc-500">
              {day}
            </div>
          ))}
          {Array.from({ length: 28 }, (_, i) => {
            const intensity = Math.random();
            const bgColor = intensity > 0.8 ? 'bg-emerald-500' : 
                           intensity > 0.6 ? 'bg-emerald-400' :
                           intensity > 0.4 ? 'bg-emerald-300' :
                           intensity > 0.2 ? 'bg-emerald-200' : 'bg-zinc-100';
            return (
              <div key={i} className={`aspect-square rounded-sm ${bgColor} dark:bg-emerald-600`} />
            );
          })}
        </div>
      </Card>
    </div>
  );
};

// ====================================================================
// MAIN APP COMPONENT
// ====================================================================
export default function DSAMasteryLab() {
  const [activeTab, setActiveTab] = useState("practice");
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState({
    name: "vikas sahu",
    email: "vikasmangrora@gamil.com",
    avatar: "👨‍💻",
    points: 280,
    streak: 1,
    level: "intermidiate"
  });
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const TABS = [
    { key: "practice", label: "Practice", icon: Play, description: "Solve problems daily" },
    { key: "visualize", label: "Visualize", icon: Activity, description: "See algorithms in action" },
    { key: "algorithms", label: "Algorithms", icon: Cpu, description: "Algorithm library" },
    { key: "analytics", label: "Analytics", icon: BarChart3, description: "Track your progress" },
    { key: "cheatsheet", label: "Cheatsheet", icon: Info, description: "Quick reference guide" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      {/* Enhanced Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Zap className="w-8 h-8 text-emerald-600" />
              </motion.div>
              <div>
                <h1 className="text-xl font-bold text-zinc-900 dark:text-white">DSA Mastery Lab</h1>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">Master algorithms & data structures</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
              {/* User Stats */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-medium">{user.streak} 🔥</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm font-medium">{user.points}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">{user.name}</span>
                </div>
              </div>
              
              <Button onClick={() => setDarkMode(!darkMode)} variant="outline">
                {darkMode ? "🌞" : "🌙"}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block border-t border-zinc-200 dark:border-zinc-800 mt-2">
            <div className="flex gap-1">
              {TABS.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab.key
                      ? 'text-emerald-600 border-b-2 border-emerald-600 bg-emerald-50/50 dark:bg-emerald-900/20'
                      : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800"
          >
            <div className="px-4 py-2 space-y-1">
              {TABS.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => {
                    setActiveTab(tab.key);
                    setShowMobileMenu(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${
                    activeTab === tab.key
                      ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                      : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <div>
                    <div className="font-medium">{tab.label}</div>
                    <div className="text-xs text-zinc-500">{tab.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {activeTab === "practice" && (
            <motion.div
              key="practice"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ProblemPractice />
            </motion.div>
          )}
          
          {activeTab === "visualize" && (
            <motion.div
              key="visualize"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <AlgorithmVisualizer />
            </motion.div>
          )}
          
          {activeTab === "algorithms" && (
            <motion.div
              key="algorithms"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <AlgorithmLibrary />
            </motion.div>
          )}
          
          {activeTab === "analytics" && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <AnalyticsDashboard />
            </motion.div>
          )}
          
          {activeTab === "cheatsheet" && (
            <motion.div
              key="cheatsheet"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <CheatsheetSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">DSA Mastery Lab</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Master data structures and algorithms with interactive practice, visualizations, and real-world problems.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>Interactive Problem Solving</li>
                <li>Algorithm Visualizations</li>
                <li>Progress Tracking</li>
                <li>Code Execution</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                {Object.keys(PROBLEM_DATABASE.reduce((acc, p) => {
                  acc[p.category] = true;
                  return acc;
                }, {})).slice(0, 4).map(cat => (
                  <li key={cat}>{cat}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <Github className="w-5 h-5 text-zinc-400 hover:text-zinc-600 cursor-pointer" />
                <Linkedin className="w-5 h-5 text-zinc-400 hover:text-zinc-600 cursor-pointer" />
                <Twitter className="w-5 h-5 text-zinc-400 hover:text-zinc-600 cursor-pointer" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-zinc-200 dark:border-zinc-800 mt-8 pt-8 text-center">
            <p className="text-sm text-zinc-500">
              © 2024 DSA Mastery Lab. Built with React, Framer Motion, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}