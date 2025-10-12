import { useState } from "react";
import type { Question } from "../types/question";
import { submitQuiz } from "../api/submitQuiz";

const questions: Question[] = [
  {
    id: 1,
    text: "How are you feeling lately, deep inside? (choose up to 2)",
    options: [
      "I'm going through big changes.",
      "I feel powerful and ready to act.",
      "I feel emotional or healing.",
      "I feel clear and focused.",
      "I feel stuck and want something to shift.",
      "I feel spiritual and seeking answers."
    ],
    multiple: true,
    maxSelections: 2
  },
  {
    id: 2,
    text: "What's most important to you right now? (choose 1)",
    options: [
      "Freedom & self-expression",
      "Relationships & connection",
      "Success & growth",
      "Understanding myself",
      "Starting over / Healing",
      "Spiritual guidance"
    ],
    multiple: false
  },
  {
    id: 3,
    text: "Which phrase resonates with you most? (choose 1)",
    options: [
      "I want to rise stronger from what I've faced.",
      "I want to love without fear.",
      "I want to shine and be seen.",
      "I want to understand my purpose.",
      "I want to let go and move on.",
      "I want to start a new chapter."
    ],
    multiple: false
  },
  {
    id: 4,
    text: "Which shape/style are you most drawn to? (choose 1)",
    options: [
      "Geometric & clean",
      "Smooth & round",
      "Spiral / layered",
      "Sharp & radiant",
      "Nature-inspired"
    ],
    multiple: false
  }
];

export default function PersonalityForm() {
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (qId: number, option: string, multiple: boolean, maxSelections?: number) => {
    setAnswers(prev => {
      const current = prev[qId] || [];
      if (multiple) {
        if (current.includes(option)) {
          // Remove the option if already selected
          return { ...prev, [qId]: current.filter(o => o !== option) };
        } else {
          // Add the option if not selected, but check max limit
          if (maxSelections && current.length >= maxSelections) {
            return prev; // Don't add if max selections reached
          }
          return { ...prev, [qId]: [...current, option] };
        }
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
    <div className="flex items-center justify-center min-h-screen bg-yellow-600 p-6">
      <div className="w-full max-w-2xl bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-10 shadow-lg space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Discover Your NobArt Symbols</h1>
          <p className="text-lg text-white/90 mb-6">Your soul carries meaning. Let us reveal the symbols you're here to wear.</p>
        </div>

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
                      onChange={() => handleChange(q.id, opt, q.multiple, q.maxSelections)}
                      disabled={q.multiple && q.maxSelections ? !(answers[q.id] || []).includes(opt) && (answers[q.id] || []).length >= q.maxSelections : false}
                      className="h-5 w-5 text-blue-400 disabled:opacity-50"
                    />
                    <span className={`text-white ${q.multiple && q.maxSelections && !(answers[q.id] || []).includes(opt) && (answers[q.id] || []).length >= q.maxSelections ? 'opacity-50' : ''}`}>{opt}</span>
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
          className="w-full py-3 px-6 bg-yellow-500/80 hover:bg-gray-600 text-white font-semibold rounded-lg shadow-md disabled:bg-gray-400/50"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
