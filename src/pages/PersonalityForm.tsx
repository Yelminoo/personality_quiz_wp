import { useState } from "react";
import type { Question } from "../types/question";
import { submitQuiz } from "../api/submitQuiz";

const questions: Question[] = [
  {
    id: 1,
    text: "Do you prefer working in teams?",
    options: ["Yes", "No", "Sometimes"],
    multiple: false
  },
  {
    id: 2,
    text: "Which traits describe you?",
    options: ["Creative", "Analytical", "Empathic", "Leader"],
    multiple: true
  },
  {
    id: 3,
    text: "Do you like leading projects?",
    options: ["Yes", "No"],
    multiple: false,
    showIf: (answers) => answers[2]?.includes("Leader")
  }
];

export default function PersonalityForm() {
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (qId: number, option: string, multiple: boolean) => {
    setAnswers(prev => {
      const current = prev[qId] || [];
      if (multiple) {
        return current.includes(option)
          ? { ...prev, [qId]: current.filter(o => o !== option) }
          : { ...prev, [qId]: [...current, option] };
      } else {
        return { ...prev, [qId]: [option] };
      }
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await submitQuiz({ answers, userEmail: email });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Failed to submit quiz.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-12 shadow-lg text-center text-xl font-semibold">
          Thank you! Your responses have been submitted.
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 p-6">
      <div className="w-full max-w-2xl bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-10 shadow-lg space-y-8">
        <p className="text-3xl font-bold text-center text-white">Personality Quiz</p>

        {/* Email Section */}
        <div className="mb-6 p-4 rounded-lg">
          <label className="block mb-2 font-medium text-white">Your Email (optional)</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full border border-white/50 rounded px-3 py-3 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Quiz Questions */}
        {questions.map(q => {
          if (q.showIf && !q.showIf(answers)) return null;

          return (
            <div key={q.id} className="mb-6 p-4 bg-white/10 rounded-lg">
              <h3 className="font-semibold mb-3 text-white">{q.text}</h3>
              <div className="flex flex-col space-y-3">
                {q.options.map(opt => (
                  <label key={opt} className="flex items-center space-x-3 text-white">
                    <input
                      type={q.multiple ? "checkbox" : "radio"}
                      name={`q${q.id}`}
                      checked={(answers[q.id] || []).includes(opt)}
                      onChange={() => handleChange(q.id, opt, q.multiple)}
                      className="h-5 w-5 text-blue-400"
                    />
                    <span className="text-white">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          );
        })}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full py-3 px-6 bg-blue-500/80 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md disabled:bg-gray-400/50"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
