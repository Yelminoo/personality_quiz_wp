import React from 'react';
import { Link } from 'react-router-dom';
import { ShapeIcon } from '../assets/symbols';

interface Symbol {
  name: string;
  meaning: string;
  shape: string;
}

interface Theme {
  id: string;
  name: string;
  description: string;
  baseSymbols: Symbol[];
}

interface QuizResultsProps {
  answers: Record<number, string[]>;
  email?: string;
  calculatedResults?: {
    featured: { symbol: string; weight: number }[];
    supporting: { symbol: string; weight: number }[];
  } | null;
}

const themes: Record<string, Theme> = {
  freedom: {
    id: 'freedom',
    name: 'Wild Freedom',
    description: "You're in a season of expression and sovereignty. Your pieces should feel light, bold, and unmistakably you.",
    baseSymbols: [
      { name: 'Freedom', meaning: 'wings, open flight', shape: 'Wings' },
      { name: 'Creativity', meaning: 'spiral, ever-growing ideas', shape: 'Spiral' },
      { name: 'Independence', meaning: 'pillar, stand tall', shape: 'Pillar' }
    ]
  },
  relationships: {
    id: 'relationships',
    name: 'Heart Fortress',
    description: "Your heart is the center of your journey. You value real bonds and safe love.",
    baseSymbols: [
      { name: 'Unity', meaning: 'circle, wholeness', shape: 'Circle' },
      { name: 'Love', meaning: 'heart, timeless affection', shape: 'Heart' },
      { name: 'Trust', meaning: 'infinity loop, faithful flow', shape: 'Infinity' },
      { name: 'Protection', meaning: 'shield, safer boundaries', shape: 'Shield' }
    ]
  },
  success: {
    id: 'success',
    name: 'Strategic Builder',
    description: "You're building something tangible. Method + momentum makes your destiny real.",
    baseSymbols: [
      { name: 'Strategy', meaning: 'chess square, plan your moves', shape: 'Chess square' },
      { name: 'Manifestation', meaning: 'diamond/pyramid, refine into matter', shape: 'Diamond/Pyramid' },
      { name: 'Discipline', meaning: 'rectangle, habit & structure', shape: 'Rectangle' },
      { name: 'Focus', meaning: 'target, one aim', shape: 'Target' }
    ]
  },
  understanding: {
    id: 'understanding',
    name: 'Inner Compass',
    description: "Your path is inward first. Insight guides your outer life.",
    baseSymbols: [
      { name: 'Truth', meaning: 'vertical line, clean integrity', shape: 'Vertical line' },
      { name: 'Wisdom', meaning: 'hexagon, nature\'s logic', shape: 'Hexagon' },
      { name: 'Mystery', meaning: 'crescent moon, the hidden', shape: 'Crescent' },
      { name: 'Curiosity', meaning: 'loop/arc, keep exploring', shape: 'Loop' }
    ]
  },
  healing: {
    id: 'healing',
    name: 'Healer\'s Path',
    description: "You're rebuilding—gently, steadily. Your scars are becoming strength.",
    baseSymbols: [
      { name: 'Healing', meaning: 'cross/bandage, mend and care', shape: 'Cross/Bandage' },
      { name: 'Renewal', meaning: 'leaf, fresh start', shape: 'Leaf' },
      { name: 'Resilience', meaning: 'coil, bounce-back power', shape: 'Coil' },
      { name: 'Forgiveness', meaning: 'rejoined circle, repair what broke', shape: 'Rejoined Circle' }
    ]
  },
  spiritual: {
    id: 'spiritual',
    name: 'Sacred Vision',
    description: "You're listening to something higher. Direction appears as you align.",
    baseSymbols: [
      { name: 'Purpose', meaning: 'compass, true north', shape: 'Compass' },
      { name: 'Intuition', meaning: 'eye, inner sight', shape: 'Eye' },
      { name: 'Alignment', meaning: 'concentric circles, all parts in sync', shape: 'Concentric circles' },
      { name: 'Awakening', meaning: 'lotus, rise in awareness', shape: 'Lotus' }
    ]
  }
};



const styleRefinements: Record<string, string[]> = {
  'Geometric & clean': ['Vision', 'Sacredness'],
  'Smooth & round': ['Unity', 'Trust', 'Love'],
  'Spiral / layered': ['Creativity', 'Journey', 'Awakening'],
  'Sharp & radiant': ['Courage', 'Power', 'Focus'],
  'Nature-inspired': ['Renewal', 'Healing', 'Rebirth']
};

// Reference the value so TypeScript/linters treat it as used (keeps this data available for future use)
void styleRefinements;

// Symbol metadata for display
const symbolMetadata: Record<string, { meaning: string; shape: string }> = {
  Vision: { meaning: "Clarity, future focus", shape: "Upward triangle" },
  Truth: { meaning: "Authenticity, integrity", shape: "Vertical line" },
  Wisdom: { meaning: "Lived knowledge", shape: "Hexagon" },
  Creativity: { meaning: "Imagination, expression", shape: "Spiral" },
  Freedom: { meaning: "Independence, sovereignty", shape: "Open wings" },
  Unity: { meaning: "Connection, wholeness", shape: "Circle" },
  Love: { meaning: "Affection, bond", shape: "Heart" },
  Trust: { meaning: "Faith, commitment", shape: "Infinity loop" },
  Protection: { meaning: "Safety, boundaries", shape: "Shield / Octagon" },
  Strategy: { meaning: "Plan, sequence, tactics", shape: "Chessboard square" },
  Discipline: { meaning: "Structure, habit", shape: "Rectangle" },
  Focus: { meaning: "Single aim, clarity", shape: "Dot-in-circle (Target)" },
  Manifestation: { meaning: "Vision into matter", shape: "Diamond / Pyramid" },
  Healing: { meaning: "Recovery, mending", shape: "Cross / Bandage" },
  Renewal: { meaning: "Fresh start", shape: "Leaf" },
  Resilience: { meaning: "Bounce-back power", shape: "Spring / Coil" },
  Purpose: { meaning: "True north, calling", shape: "Compass" },
  Intuition: { meaning: "Inner sight", shape: "Eye" },
  Alignment: { meaning: "Bring parts into harmony", shape: "Concentric circles" },
  Awakening: { meaning: "Rising awareness", shape: "Lotus" },
  Power: { meaning: "Inner strength, capacity", shape: "Square" },
  Action: { meaning: "Movement, progress", shape: "Lightning bolt" },
  Courage: { meaning: "Boldness to face risk", shape: "Starburst" },
  Transformation: { meaning: "Change, transmutation", shape: "Phoenix feather / Flame" },
  Rebirth: { meaning: "Deep restart", shape: "Egg / Cocoon" },
  Surrender: { meaning: "Letting go, trust", shape: "Falling leaf" },
  Breakthrough: { meaning: "Surpass limits", shape: "Cracked stone" },
  Journey: { meaning: "The path over time", shape: "Winding path" },
  Joy: { meaning: "Lightness, celebration", shape: "Radiant sun" },
  Leadership: { meaning: "Guiding others", shape: "Crown" },
  Compassion: { meaning: "Gentle care", shape: "Open palm / Soft curve" },
  Forgiveness: { meaning: "Release of burden", shape: "Rejoined circle" },
  Sacredness: { meaning: "Reverence, holy space", shape: "Triangle in circle" },
  Mystery: { meaning: "The unknown within", shape: "Crescent moon" },
  Curiosity: { meaning: "Questioning, exploration", shape: "Loop / Arc" },
  Grounding: { meaning: "Stability, presence", shape: "Downward triangle" },
  Independence: { meaning: "Standing tall, self-reliance", shape: "Pillar" },
  Reinvention: { meaning: "Shapeshift identity", shape: "Mask / Dual form" },
  Detachment: { meaning: "Unhook from entanglement", shape: "Broken line" },
  Grief: { meaning: "Sorrow, honoring loss", shape: "Teardrop" },
  Boundaries: { meaning: "Healthy limits", shape: "Wall / Vertical bar" },
  Devotion: { meaning: "Loyal commitment", shape: "Knot / Interwoven lines" },
  Friendship: { meaning: "Mutual support", shape: "Interlocking rings" },
  Willpower: { meaning: "Persistence under pressure", shape: "Arrow" },
  Balance: { meaning: "Harmony of forces", shape: "Split circle (Yin–Yang style)" },
  Silence: { meaning: "Space for insight", shape: "Hollow circle / Pause mark" },
  Faith: { meaning: "Trust beyond evidence", shape: "Bridge / Arc" },
  Ascension: { meaning: "Evolution upward", shape: "Ladder / Spiral up" },
  Timelessness: { meaning: "Beyond clock-time", shape: "Hourglass" },
  Survival: { meaning: "Endure the storm", shape: "Knot" }
};

const QuizResults: React.FC<QuizResultsProps> = ({ answers, email, calculatedResults }) => {
  // Use calculated results if available, otherwise fallback to old logic
  const getDisplayResults = () => {
    if (calculatedResults && calculatedResults.featured.length > 0) {
      // Use calculated results
      const featured = calculatedResults.featured.map(item => ({
        name: item.symbol,
        meaning: symbolMetadata[item.symbol]?.meaning || 'Symbolic meaning',
        shape: symbolMetadata[item.symbol]?.shape || 'Symbolic shape',
        weight: item.weight
      }));
      
      const supporting = calculatedResults.supporting.map(item => ({
        name: item.symbol,
        meaning: symbolMetadata[item.symbol]?.meaning || 'Symbolic meaning', 
        shape: symbolMetadata[item.symbol]?.shape || 'Symbolic shape',
        weight: item.weight
      }));

      return {
        featuredSymbols: featured,
        supportingSymbols: supporting,
        themeName: 'Your Personal Symbol Profile',
        themeDescription: 'Based on your responses, these symbols reflect your current journey and inner landscape.'
      };
    } else {
      // Fallback to old theme-based logic
      const q2Answer = answers[2]?.[0];
      const themeMap: Record<string, string> = {
        'Freedom & self-expression': 'freedom',
        'Relationships & connection': 'relationships',
        'Success & growth': 'success',
        'Understanding myself': 'understanding',
        'Starting over / Healing': 'healing',
        'Spiritual guidance': 'spiritual'
      };
      
      const themeKey = themeMap[q2Answer] || 'understanding';
      const theme = themes[themeKey];
      
      return {
        featuredSymbols: theme.baseSymbols,
        supportingSymbols: [],
        themeName: theme.name,
        themeDescription: theme.description
      };
    }
  };

  const getStyleHints = (): string => {
    const q4Answer = answers[4]?.[0];
    return q4Answer || 'Geometric & clean';
  };

  const displayResults = getDisplayResults();
  const styleHint = getStyleHints();

  return (
    <div className="min-h-screen bg-white p-6 relative">
      {/* Watermark Background */}
      <div 
        className="fixed inset-0 opacity-15 bg-no-repeat bg-center pointer-events-none z-30"
        style={{
          backgroundImage: `url('/watermark/STAMP 35x35mm-01.png')`,
          backgroundSize: '400px 400px',
          backgroundPosition: 'center center'
        }}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 bg-pantone-276c text-white py-8 px-6 rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Symbol Reading</h1>
          <p className="text-xl opacity-90">Your personal symbols have been revealed</p>
        </div>

        {/* Theme Card */}
        <div className="bg-gray-50 border border-soft-gold/30 rounded-2xl p-8 mb-8 shadow-lg">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-pantone-276c mb-2">{displayResults.themeName}</h2>
            <p className="text-lg text-gray-700">{displayResults.themeDescription}</p>
          </div>

          {/* Featured Symbols */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-pantone-276c mb-4">Your Primary Symbols:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {displayResults.featuredSymbols.map((symbol, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-soft-gold/20 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 p-3 bg-soft-gold/10 rounded-lg">
                        <ShapeIcon shapeName={symbol.shape} size={32} className="text-soft-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-pantone-276c text-lg">{symbol.name}</h4>
                        <p className="text-sm text-gray-500">Shape: {symbol.shape}</p>
                      </div>
                    </div>
                    {'weight' in symbol && (
                      <span className="text-soft-gold text-lg font-bold">★ {symbol.weight}</span>
                    )}
                  </div>
                  <p className="text-gray-700 text-sm">{symbol.meaning}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Supporting Symbols */}
          {displayResults.supportingSymbols.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-pantone-276c mb-4">Supporting Symbols:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {displayResults.supportingSymbols.map((symbol, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border-l-4 border-soft-gold shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <div className="flex-shrink-0">
                          <ShapeIcon shapeName={symbol.shape} size={24} className="text-soft-gold" />
                        </div>
                        <h4 className="font-semibold text-pantone-276c text-lg">{symbol.name}</h4>
                      </div>
                      {'weight' in symbol && (
                        <span className="text-soft-gold text-lg font-bold">★ {symbol.weight}</span>
                      )}
                    </div>
                    <p className="text-gray-700 text-sm mb-2">{symbol.meaning}</p>
                    <p className="text-gray-500 text-xs">Shape: {symbol.shape}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Style Hint */}
          <div className="bg-soft-gold/10 rounded-lg p-4 mb-6 border border-soft-gold/20">
            <h3 className="text-lg font-semibold text-pantone-276c mb-2">Your Style Preference:</h3>
            <p className="text-gray-700">{styleHint}</p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-pantone-276c rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Create Your Talisman?</h3>
          <p className="text-white/90 mb-6">
            Work with our designers to translate your symbols into a custom piece of jewelry that tells your story.
          </p>
          
          {email && (
            <div className="bg-white/10 rounded-lg p-4 mb-6">
              <p className="text-white/90 text-sm">
                📧 We'll send your detailed symbol report to: <strong>{email}</strong>
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-soft-gold hover:bg-soft-gold-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:-translate-y-1">
              Start Custom Design
            </button>
            <button className="bg-transparent border border-soft-gold/50 hover:border-soft-gold text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Download PDF Report
            </button>
            <Link 
              to="/"
              className="bg-transparent border border-soft-gold/50 hover:border-soft-gold text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block"
            >
              Learn More About Quiz
            </Link>
          </div>
        </div>

        {/* Share Section */}
        <div className="text-center mt-8">
          <p className="text-white/70 text-sm">
            Love your results? Share your journey with others who might need to discover their symbols.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;