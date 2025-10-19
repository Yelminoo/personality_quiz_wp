import { useState } from "react";
import type { Question } from "../types/question";
import { submitQuiz } from "../api/submitQuiz";
import QuizResults from "./QuizResults";
import { calculateResults } from "../logic_structure/calculateResult";

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
  },
  {
    id: 5,
    text: "Leave your email for a free symbolic report (PDF) - Optional",
    options: [],
    multiple: false,
    isEmail: true
  }
];

export default function PersonalityForm() {
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [calculatedResults, setCalculatedResults] = useState<{
    featured: { symbol: string; weight: number }[];
    supporting: { symbol: string; weight: number }[];
  } | null>(null);

  // Simple fallback calculation function
  const fallbackCalculation = (transformedAnswers: { Q1: string[]; Q2: string; Q3: string; Q4: string }) => {
    // Basic theme-based symbols as fallback
    const themeSymbols: Record<string, string[]> = {
      wild_freedom: ['Freedom', 'Creativity', 'Independence', 'Vision', 'Joy'],
      heart_fortress: ['Unity', 'Love', 'Trust', 'Protection', 'Compassion'],
      strategic_builder: ['Strategy', 'Discipline', 'Focus', 'Manifestation', 'Leadership'],
      inner_compass: ['Truth', 'Wisdom', 'Intuition', 'Curiosity', 'Vision'],
      healers_path: ['Healing', 'Renewal', 'Resilience', 'Forgiveness', 'Transformation'],
      sacred_vision: ['Purpose', 'Intuition', 'Alignment', 'Awakening', 'Sacredness']
    };

    const baseSymbols = themeSymbols[transformedAnswers.Q2] || themeSymbols.inner_compass;
    
    return {
      featured: baseSymbols.slice(0, 5).map((symbol, index) => ({
        symbol,
        weight: 5 - index
      })),
      supporting: []
    };
  };

  // Map form answers to calculation format
  const transformAnswersForCalculation = () => {
    // Map Q1 feelings to optionKeys
    const q1Mapping: Record<string, string> = {
      "I'm going through big changes.": "changes",
      "I feel powerful and ready to act.": "powerful", 
      "I feel emotional or healing.": "emotional",
      "I feel clear and focused.": "clear",
      "I feel stuck and want something to shift.": "stuck",
      "I feel spiritual and seeking answers.": "spiritual"
    };

    // Map Q2 priorities to themeKeys
    const q2Mapping: Record<string, string> = {
      "Freedom & self-expression": "wild_freedom",
      "Relationships & connection": "heart_fortress", 
      "Success & growth": "strategic_builder",
      "Understanding myself": "inner_compass",
      "Starting over / Healing": "healers_path",
      "Spiritual guidance": "sacred_vision"
    };

    // Map Q3 phrases to optionKeys 
    const q3Mapping: Record<string, string> = {
      "I want to rise stronger from what I've faced.": "rise",
      "I want to love without fear.": "love",
      "I want to shine and be seen.": "shine", 
      "I want to understand my purpose.": "purpose",
      "I want to let go and move on.": "letgo",
      "I want to start a new chapter.": "newchapter"
    };

    // Map Q4 style preferences to optionKeys
    const q4Mapping: Record<string, string> = {
      "Geometric & clean": "geometric",
      "Smooth & round": "round",
      "Spiral / layered": "spiral",
      "Sharp & radiant": "sharp",
      "Nature-inspired": "nature"
    };

    return {
      Q1: (answers[1] || []).map(answer => q1Mapping[answer]).filter(Boolean),
      Q2: q2Mapping[answers[2]?.[0]] || "inner_compass",
      Q3: q3Mapping[answers[3]?.[0]] || "",
      Q4: q4Mapping[answers[4]?.[0]] || ""
    };
  };

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
    
    // Validate that we have the minimum required answers
    if (!answers[2] || answers[2].length === 0) {
      alert('Please answer the priority question (Q2) before submitting.');
      setLoading(false);
      return;
    }
    
    try {
      // Transform answers for calculation
      const transformedAnswers = transformAnswersForCalculation();
      console.log('Transformed answers:', transformedAnswers);
      
      // Calculate results using the logic
      console.log('About to call calculateResults with:', transformedAnswers);
      
      let results;
      try {
        // Try the main calculation first
        if (typeof calculateResults !== 'function') {
          throw new Error('calculateResults is not a function - import failed');
        }
        results = calculateResults(transformedAnswers);
        console.log('Main calculation results:', results);
      } catch (calcError) {
        console.warn('Main calculation failed, using fallback:', calcError);
        results = fallbackCalculation(transformedAnswers);
        console.log('Fallback calculation results:', results);
      }
      
      // Handle case where no theme is found (returns empty array)
      if (Array.isArray(results)) {
        console.log('No theme found, using empty results');
        setCalculatedResults({ featured: [], supporting: [] });
      } else {
        setCalculatedResults(results);
      }
      
      // Submit to API (optional - can be done in background)
      try {
        await submitQuiz({ answers, userEmail: email });
      } catch (apiErr) {
        console.warn('API submission failed, but continuing with results:', apiErr);
      }
      
      setSubmitted(true);
    } catch (err) {
      console.error('Calculation error details:', err);
      console.log('Original answers:', answers);
      
      // Last resort fallback: show results without calculation  
      alert("Using simplified results due to a technical issue. Your symbols are still meaningful!");
      setCalculatedResults(null);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return <QuizResults answers={answers} email={email} calculatedResults={calculatedResults} />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-6">
      <div className="w-full max-w-2xl bg-pantone-276c rounded-xl p-10 shadow-2xl space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Discover Your NobArt Symbols</h1>
          <p className="text-lg text-white/90 mb-6">Your soul carries meaning. Let us reveal the symbols you're here to wear.</p>
        </div>

        {/* Quiz Questions */}
        {questions.map(q => {
          if (q.showIf && !q.showIf(answers)) return null;

          // Handle email input question
          if (q.isEmail) {
            return (
              <div key={q.id} className="mb-6 p-4 bg-white/10 rounded-lg">
                <h3 className="font-semibold mb-3 text-white">{q.text}</h3>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your-email@example.com"
                  className="w-full border border-white/50 rounded px-3 py-3 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-soft-gold"
                />
              </div>
            );
          }

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
                      className="h-5 w-5 text-soft-gold disabled:opacity-50"
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
          className="w-full py-3 px-6 bg-soft-gold hover:bg-soft-gold-dark text-white font-semibold rounded-lg shadow-md disabled:bg-gray-400/50 transition-all duration-300"
        >
          {loading ? "Generating Your Symbols..." : "Discover My Symbols"}
        </button>
      </div>
    </div>
  );
}
