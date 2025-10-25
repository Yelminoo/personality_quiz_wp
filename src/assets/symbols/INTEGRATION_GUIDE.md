# SVG Integration Guide

## How to Upload Your SVG Files

### 1. Upload Shape SVGs to `/shapes/` folder:
Place your 51 SVG files in `src/assets/symbols/shapes/` with **exact names**:

```
Upward triangle.svg
Vertical line.svg
Hexagon.svg
Spiral.svg
Open wings.svg
Downward triangle.svg
Rectangle.svg
Radiant sun.svg
Loop / Arc.svg
Crescent moon.svg
Circle.svg
Heart.svg
Infinity loop.svg
Shield / Octagon.svg
Open palm / Soft curve.svg
Knot / Interwoven lines.svg
Interlocking rings.svg
Rejoined circle.svg
Wall / Vertical bar.svg
Chessboard square.svg
Dot-in-circle (Target).svg
Diamond / Pyramid.svg
Crown.svg
Arrow.svg
Square.svg
Lightning bolt.svg
Pillar.svg
Starburst.svg
Eye.svg
Concentric circles.svg
Split circle (Ying Yang style).svg
Hollow circle / Pause mark.svg
Cross / Bandage.svg
Leaf.svg
Spring / Coil.svg
Phoenix feather / Flame.svg
Egg / Cocoon.svg
Falling leaf.svg
Winding path.svg
Cracked stone.svg
Mask / Dual form.svg
Compass.svg
Lotus.svg
Triangle in circle.svg
Bridge / Arc.svg
Ladder / Spiral up.svg
Hourglass.svg
Teardrop.svg
Broken line.svg
Knot.svg
```

### 2. Usage in React Components:

```typescript
import { ShapeIcon } from '../assets/symbols';

// Display a shape icon
<ShapeIcon 
  shapeName="Heart" 
  size={24} 
  className="text-soft-gold" 
/>

// Display in symbol results
<div className="flex items-center gap-2">
  <ShapeIcon shapeName={symbol.shape} size={20} />
  <span>Shape: {symbol.shape}</span>
</div>
```

### 3. Integration with Quiz Results:

The symbols in your calculation system reference these shapes:
- Vision → "Upward triangle"
- Love → "Heart" 
- Unity → "Circle"
- Strategy → "Chessboard square"
- Focus → "Dot-in-circle (Target)"
- And so on...

The `ShapeIcon` component will automatically map symbol shapes to your SVG files.

### 4. File Requirements:
- **Exact file names** (including spaces and special characters)
- SVG format
- Consistent size/viewBox for best display
- Use `currentColor` for fill/stroke to inherit theme colors

### 5. After Upload:
The QuizResults page will automatically display your SVGs alongside each symbol's shape description!