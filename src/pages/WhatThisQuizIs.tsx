import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WhatThisQuizIs: React.FC = () => {
  const [isFaqOpen, setIsFaqOpen] = useState<boolean>(false);

  const toggleFaq = () => {
    setIsFaqOpen(!isFaqOpen);
  };

  const faqData = [
    {
      question: "Is this like astrology?",
      answer: "No. It's a structured mapping from your answers to a symbolic library—grounded in psychology, archetypes, and design language."
    },
    {
      question: "How accurate is it?",
      answer: "It's directionally accurate and surprisingly insightful. Treat it as a mirror, not a verdict. You can always swap symbols during design."
    },
    {
      question: "Can I choose my own symbols after the result?",
      answer: "Yes. Your reading is a starting point. We'll refine together."
    },
    {
      question: "Can couples or teams use it?",
      answer: "Absolutely. Many clients create matching sets (e.g., Trust + Unity + Purpose)."
    },
    {
      question: "Do I need to buy something after?",
      answer: "No. You can take the quiz just to explore. If you love your symbols, we can design a piece."
    },
    {
      question: "Will you email me my results?",
      answer: "Only if you opt in. Otherwise, you can save/print them directly on the page."
    },
    {
      question: "How long does a custom piece take?",
      answer: "Typically 3–6 weeks depending on design complexity and materials."
    },
    {
      question: "What materials do you use?",
      answer: "Sterling silver and gold are standard; others by request. Ethical sourcing available."
    }
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-gray-800 leading-relaxed">
      {/* Hero Section */}
      <section className="text-center mb-16 py-12 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl">
        <h1 className="text-5xl mb-4 font-light">What This Quiz Is</h1>
        <p className="text-xl max-w-4xl mx-auto opacity-95">
          Your jewelry shouldn't just look good—it should mean something. The NobArt Symbol Discovery Quiz 
          helps you uncover the 3–5 personal symbols that match your current chapter in life: freedom, love, 
          resilience, purpose, and more. In 2–3 minutes, you'll receive a short reading with symbols, meanings, 
          and suggested shapes you can turn into a custom piece.
        </p>
      </section>

      {/* Why Take It Section */}
      <section className="mb-12">
        <h2 className="text-4xl mb-6 text-slate-700 font-light border-b-2 border-blue-500 pb-2">Why Take It</h2>
        <ul className="list-none p-0 space-y-3">
          <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 text-lg">
            Find symbols that feel like you—not trends.
          </li>
          <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 text-lg">
            Turn turning points into talismans.
          </li>
          <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 text-lg">
            Move from "pretty" to personal: meaning you can wear every day.
          </li>
          <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 text-lg">
            Start a custom design with confidence (and a story behind it).
          </li>
        </ul>
      </section>

      {/* How It Works Section */}
      <section className="mb-12">
        <h2 className="text-4xl mb-6 text-slate-700 font-light border-b-2 border-blue-500 pb-2">How It Works (3 Simple Steps)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="flex items-start bg-white p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">Answer Questions</h3>
              <p className="text-gray-600">Answer 4 quick questions about your mood, focus, and taste.</p>
            </div>
          </div>
          <div className="flex items-start bg-white p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">Get Mapped</h3>
              <p className="text-gray-600">We map your answers to one of six themes (e.g., Strategic Builder, Healer's Path) using our symbol engine.</p>
            </div>
          </div>
          <div className="flex items-start bg-white p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">Receive Your Symbols</h3>
              <p className="text-gray-600">You get your symbols (3–5), their meanings, and shape suggestions to use in a ring, pendant, bracelet, or earrings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Receive Section */}
      <section className="mb-12">
        <h2 className="text-4xl mb-6 text-slate-700 font-light border-b-2 border-blue-500 pb-2">What You'll Receive</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg text-center border-t-3 border-red-500">
            <h4 className="text-lg font-semibold text-slate-700 mb-2">Theme Name</h4>
            <p className="text-gray-600">That reflects your current journey</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center border-t-3 border-red-500">
            <h4 className="text-lg font-semibold text-slate-700 mb-2">3–5 Symbols</h4>
            <p className="text-gray-600">Matched to you (e.g., Courage, Trust, Vision)</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center border-t-3 border-red-500">
            <h4 className="text-lg font-semibold text-slate-700 mb-2">Symbol Meanings</h4>
            <p className="text-gray-600">Of each symbol in simple language</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center border-t-3 border-red-500">
            <h4 className="text-lg font-semibold text-slate-700 mb-2">Shape Suggestions</h4>
            <p className="text-gray-600">Triangle, spiral, shield, etc. you can translate into design</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center border-t-3 border-red-500">
            <h4 className="text-lg font-semibold text-slate-700 mb-2">Styling Hints</h4>
            <p className="text-gray-600">Geometric, round, spiral, sharp, nature-inspired</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center border-t-3 border-red-500">
            <h4 className="text-lg font-semibold text-slate-700 mb-2">Next Steps</h4>
            <p className="text-gray-600">Start a custom piece, save as PDF, or share</p>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="mb-12">
        <h2 className="text-4xl mb-6 text-slate-700 font-light border-b-2 border-blue-500 pb-2">Who It's For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-lg text-center">
            <p className="text-lg">✨ You want jewelry with soul, not just shine.</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-lg text-center">
            <p className="text-lg">🔄 You're starting over, building something, or seeking clarity.</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-lg text-center">
            <p className="text-lg">🎯 You love the idea of symbols, archetypes, and intentional design.</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-lg text-center">
            <p className="text-lg">⏳ You want a piece you'll still love in 10 years because the meaning endures.</p>
          </div>
        </div>
      </section>

      {/* What Makes NobArt Different */}
      <section className="mb-12">
        <h2 className="text-4xl mb-6 text-slate-700 font-light border-b-2 border-blue-500 pb-2">What Makes NobArt Different</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center border-t-3 border-orange-400">
            <h4 className="text-xl font-semibold text-slate-700 mb-4">Symbolic System</h4>
            <p className="text-gray-600">50+ core symbols with clear meanings and shapes.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center border-t-3 border-orange-400">
            <h4 className="text-xl font-semibold text-slate-700 mb-4">Modular Design</h4>
            <p className="text-gray-600">Pieces can combine multiple symbols into one story.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center border-t-3 border-orange-400">
            <h4 className="text-xl font-semibold text-slate-700 mb-4">Craft + Tech</h4>
            <p className="text-gray-600">Human craftsmanship guided by a structured, unbiased quiz.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center border-t-3 border-orange-400">
            <h4 className="text-xl font-semibold text-slate-700 mb-4">Timeless Design</h4>
            <p className="text-gray-600">Designed around who you are, not the season.</p>
          </div>
        </div>
      </section>

      {/* Example Result Section */}
      <section className="mb-12">
        <h2 className="text-4xl mb-6 text-slate-700 font-light border-b-2 border-blue-500 pb-2">Example Result (What Visitors See)</h2>
        <div className="bg-slate-700 text-white p-8 rounded-xl mt-8">
          <h3 className="text-3xl mb-4 text-blue-400">Your Theme: Strategic Builder</h3>
          <p className="mb-6 italic text-lg">You're building something tangible. Method + momentum make your destiny real.</p>
          
          <h4 className="text-xl mb-4 text-gray-200">Your Symbols:</h4>
          <div className="mb-6 space-y-2">
            <div className="py-2 border-b border-gray-600 last:border-b-0">
              <strong>Strategy</strong> — plan your moves <span className="text-gray-400 italic">(shape: chessboard square)</span>
            </div>
            <div className="py-2 border-b border-gray-600 last:border-b-0">
              <strong>Manifestation</strong> — refine vision into matter <span className="text-gray-400 italic">(shape: diamond/pyramid)</span>
            </div>
            <div className="py-2 border-b border-gray-600 last:border-b-0">
              <strong>Discipline</strong> — build structure and rhythm <span className="text-gray-400 italic">(shape: rectangle)</span>
            </div>
            <div className="py-2 border-b border-gray-600 last:border-b-0">
              <strong>Focus</strong> — one aim, one path <span className="text-gray-400 italic">(shape: target)</span>
            </div>
          </div>
          
          <p className="bg-gray-600 p-4 rounded-md">
            <strong>Style hint:</strong> If you chose geometric & clean, consider sharp edges and precise lines.
          </p>
        </div>
      </section>

      {/* Time & Privacy Section */}
      <section className="mb-12">
        <h2 className="text-4xl mb-6 text-slate-700 font-light border-b-2 border-blue-500 pb-2">Time & Privacy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-200 p-8 rounded-lg text-center">
            <h4 className="text-xl font-semibold text-slate-700 mb-4">Time to Complete</h4>
            <p className="text-gray-600">2–3 minutes</p>
          </div>
          <div className="bg-gray-200 p-8 rounded-lg text-center">
            <h4 className="text-xl font-semibold text-slate-700 mb-4">Privacy</h4>
            <p className="text-gray-600">Your answers are used only to generate your results and—if you opt in—to send your symbol card. We don't sell your data. Ever.</p>
          </div>
        </div>
      </section>

      {/* After the Quiz Section */}
      <section className="mb-12">
        <h2 className="text-4xl mb-6 text-slate-700 font-light border-b-2 border-blue-500 pb-2">After the Quiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-500">
            <h4 className="text-lg font-semibold text-slate-700 mb-4">Design Your Talisman</h4>
            <p className="text-gray-600">Work with us to translate your symbols into a custom ring, pendant, bracelet, or earrings.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-500">
            <h4 className="text-lg font-semibold text-slate-700 mb-4">Save Your Reading</h4>
            <p className="text-gray-600">Print or receive a PDF of your symbols.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-500">
            <h4 className="text-lg font-semibold text-slate-700 mb-4">Explore More</h4>
            <p className="text-gray-600">Browse all symbols and meanings if you want to refine.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md border-l-4 border-purple-500 overflow-hidden">
          <button
            onClick={toggleFaq}
            className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-4xl text-slate-700 font-light">FAQ</h2>
              <svg
                className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
                  isFaqOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          <div
            className={`transition-all duration-500 ease-in-out ${
              isFaqOpen
                ? 'max-h-screen opacity-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-6 space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                  <h4 className="text-lg font-semibold text-slate-700 mb-3">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-12 rounded-xl mt-12">
        <h2 className="text-4xl mb-4 text-white border-b-2 border-white/30 pb-2 inline-block">Ready to Discover Your Symbols?</h2>
        <p className="text-lg mb-8">Please provide your contact information to proceed.</p>
        <Link 
          to="/quiz"
          className="inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg rounded-md hover:transform hover:-translate-y-1 transition-all duration-300"
        >
          Start Your Quiz
        </Link>
      </section>
    </div>
  );
};

export default WhatThisQuizIs;