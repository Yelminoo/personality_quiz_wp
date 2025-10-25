// Symbol SVG utilities and constants
// This file provides utilities for managing symbol SVG file paths

export interface SymbolSVG {
  name: string;
  component: string; // SVG file path or React component
  category: 'individual' | 'theme' | 'shape';
}

// Helper function to get SVG path for a symbol
export const getSymbolSVG = (symbolName: string): string => {
  const normalizedName = symbolName.toLowerCase().replace(/\s+/g, '-');
  return `/src/assets/symbols/individual/${normalizedName}.svg`;
};

// Helper function to get theme SVG path
export const getThemeSVG = (themeKey: string): string => {
  const normalizedTheme = themeKey.replace(/_/g, '-');
  return `/src/assets/symbols/themes/${normalizedTheme}.svg`;
};

// Helper function to get shape SVG path
export const getShapeSVG = (shapeName: string): string => {
  // Use exact shape name as provided, since SVG files use exact names
  return `/src/assets/symbols/shapes/${shapeName}.svg`;
};

// Symbol to SVG mapping for all individual symbols
export const SYMBOL_SVG_MAP: Record<string, string> = {
  // Wild Freedom symbols
  'Vision': 'vision.svg',
  'Truth': 'truth.svg',
  'Wisdom': 'wisdom.svg',
  'Creativity': 'creativity.svg',
  'Freedom': 'freedom.svg',
  'Grounding': 'grounding.svg',
  'Discipline': 'discipline.svg',
  'Joy': 'joy.svg',
  'Curiosity': 'curiosity.svg',
  'Mystery': 'mystery.svg',
  
  // Heart Fortress symbols
  'Unity': 'unity.svg',
  'Love': 'love.svg',
  'Trust': 'trust.svg',
  'Protection': 'protection.svg',
  'Compassion': 'compassion.svg',
  'Devotion': 'devotion.svg',
  'Friendship': 'friendship.svg',
  'Forgiveness': 'forgiveness.svg',
  'Boundaries': 'boundaries.svg',
  
  // Strategic Builder symbols
  'Strategy': 'strategy.svg',
  'Focus': 'focus.svg',
  'Manifestation': 'manifestation.svg',
  'Leadership': 'leadership.svg',
  'Willpower': 'willpower.svg',
  'Power': 'power.svg',
  'Action': 'action.svg',
  'Independence': 'independence.svg',
  'Courage': 'courage.svg',
  
  // Inner Compass symbols
  'Intuition': 'intuition.svg',
  'Alignment': 'alignment.svg',
  'Balance': 'balance.svg',
  'Silence': 'silence.svg',
  
  // Healer's Path symbols
  'Healing': 'healing.svg',
  'Renewal': 'renewal.svg',
  'Resilience': 'resilience.svg',
  'Transformation': 'transformation.svg',
  'Rebirth': 'rebirth.svg',
  'Surrender': 'surrender.svg',
  'Journey': 'journey.svg',
  'Breakthrough': 'breakthrough.svg',
  'Reinvention': 'reinvention.svg',
  
  // Sacred Vision symbols
  'Purpose': 'purpose.svg',
  'Awakening': 'awakening.svg',
  'Sacredness': 'sacredness.svg',
  'Faith': 'faith.svg',
  'Ascension': 'ascension.svg',
  'Timelessness': 'timelessness.svg',
  
  // Shadow Work symbols
  'Grief': 'grief.svg',
  'Detachment': 'detachment.svg',
  'Survival': 'survival.svg',
};

// Theme to SVG mapping
export const THEME_SVG_MAP: Record<string, string> = {
  'wild_freedom': 'wild-freedom.svg',
  'heart_fortress': 'heart-fortress.svg',
  'strategic_builder': 'strategic-builder.svg',
  'inner_compass': 'inner-compass.svg',
  'healers_path': 'healers-path.svg',
  'sacred_vision': 'sacred-vision.svg',
  'shadow_work': 'shadow-work.svg',
};

// Shape to SVG mapping (exact file names as provided)
export const SHAPE_SVG_MAP: Record<string, string> = {
  'Upward triangle': 'Upward_triangle.svg',
  'Vertical line': 'Vertical_line.svg', 
  'Hexagon': 'Hexagon.svg',
  'Spiral': 'Spiral.svg',
  'Open wings': 'Open_wings.svg',
  'Downward triangle': 'Downward_triangle.svg',
  'Rectangle': 'Rectangle.svg',
  'Radiant sun': 'Radiant_sun.svg',
  'Loop / Arc': 'Loop_-_Arc.svg',
  'Crescent moon': 'Crescent_moon.svg',
  'Circle': 'Circle.svg',
  'Heart': 'Heart.svg',
  'Infinity loop': 'Infinity_loop.svg',
  'Shield / Octagon': 'Shield_-_Octagon.svg',
  'Open palm / Soft curve': 'Open_palm_-_Soft_curve.svg',
  'Knot / Interwoven lines': 'Knot_-_Interwoven_lines.svg',
  'Interlocking rings': 'Interlocking_rings.svg',
  'Rejoined circle': 'Rejoined_circle.svg',
  'Wall / Vertical bar': 'Wall_-_Vertical_bar.svg',
  'Chessboard square': 'Chessboard_square.svg',
  'Dot-in-circle (Target)': 'Dot-in-circle_(Target).svg',
  'Diamond / Pyramid': 'Diamond_-_Pyramid.svg',
  'Crown': 'Crown.svg',
  'Arrow': 'Arrow.svg',
  'Square': 'Square.svg',
  'Lightning bolt': 'Lightning_bolt.svg',
  'Pillar': 'Pillar.svg',
  'Starburst': 'Starburst.svg',
  'Eye': 'Eye.svg',
  'Concentric circles': 'Concentric_circles.svg',
  'Split circle (Yin–Yang style)': 'Split_circle_(Yin–Yang_style).svg',
  'Hollow circle / Pause mark': 'Hollow_circle_-_Pause_mark.svg',
  'Cross / Bandage': 'Cross_-_Bandage.svg',
  'Leaf': 'Leaf.svg',
  'Spring / Coil': 'Spring_-_Coil.svg',
  'Phoenix feather / Flame': 'Phoenix_feather_-_Flame.svg',
  'Egg / Cocoon': 'Egg_-_Cocoon.svg',
  'Falling leaf': 'Falling_leaf.svg',
  'Winding path': 'Winding_path.svg',
  'Cracked stone': 'Cracked_stone.svg',
  'Mask / Dual form': 'Mask_-_Dual_form.svg',
  'Compass': 'Compass.svg',
  'Lotus': 'Lotus.svg',
  'Triangle in circle': 'Triangle_in_circle.svg',
  'Bridge / Arc': 'Bridge_-_Arc.svg',
  'Ladder / Spiral up': 'Ladder_-_Spiral_up.svg',
  'Hourglass': 'Hourglass.svg',
  'Teardrop': 'Teardrop.svg',
  'Broken line': 'Broken_line.svg',
  'Knot': 'Knot.svg',
};