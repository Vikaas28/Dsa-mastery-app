// src/CheatsheetSection.jsx
export default function CheatsheetSection() {
  return (
    <div className="p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Cheatsheet</h2>
      <p className="text-gray-600">
        Handy formulas, complexities, and shortcuts for quick revision.
      </p>
      <ul className="mt-3 list-disc list-inside text-gray-700">
        <li>Big-O Complexity Table</li>
        <li>Recursion vs Iteration</li>
        <li>Common Data Structures</li>
        <li>Time vs Space Trade-offs</li>
      </ul>
    </div>
  );
}
