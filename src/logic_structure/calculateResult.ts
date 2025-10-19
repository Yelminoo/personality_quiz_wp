import { q1Boosts } from './boostQ1';
import { q3Boosts } from './boostQ3';
import { q4Boosts } from './boostQ4';
import { baseWeights } from './symbolPools';


interface SymbolWeight {
  symbol: string;
  weight: number;
}

interface Answers {
  Q1: string[];
  Q2: string;
  Q3: string;
  Q4: string;
}

export function calculateResults(answers: Answers) {
  const theme = baseWeights.find(t => t.themeKey === answers.Q2);
  if (!theme) return [];

  // Step 1: Start with base weights
  const symbolWeights: SymbolWeight[] = theme.symbols.map(s => ({
    symbol: s.symbol,
    weight: s.baseWeight,
  }));

  // Step 2: Apply boosts from Q1 (can have multiple)
  answers.Q1.forEach(opt => applyBoosts(symbolWeights, q1Boosts, opt));

  // Step 3: Apply boosts from Q3 and Q4 (single answers)
  applyBoosts(symbolWeights, q3Boosts, answers.Q3);
  applyBoosts(symbolWeights, q4Boosts, answers.Q4);

  // Step 4: Rank
  const ranked = symbolWeights.sort((a, b) => b.weight - a.weight);

  return {
    featured: ranked.slice(0, 5),
    supporting: ranked.slice(5, 10),
  };
}

interface Boost {
  symbol: string;
  bonusWeight: number;
}

interface BoostOption {
  optionKey: string;
  boosts: Boost[];
}

function applyBoosts(symbolWeights: SymbolWeight[], dataset: BoostOption[], selectedKey: string): void {
  const option = dataset.find(d => d.optionKey === selectedKey);
  if (!option) return;

  option.boosts.forEach(b => {
    const target = symbolWeights.find(s => s.symbol === b.symbol);
    if (target) target.weight += b.bonusWeight;
  });
}
