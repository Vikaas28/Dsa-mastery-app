// src/AlgorithmLibrary.jsx
export default function AlgorithmLibrary() {
  return (
    <div className="p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Algorithm Library</h2>
      <p className="text-gray-600">
        Quick reference for algorithms with explanations and code snippets.
      </p>
      <ul className="mt-3 list-disc list-inside text-gray-700">
        <li>Sorting Algorithms</li>
        <li>Graph Traversals</li>
        <li>Dynamic Programming Patterns</li>
        <li>Greedy Algorithms</li>
      </ul>
    </div>
  );
}
