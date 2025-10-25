// Symbol SVG React Components
// This file provides React components for displaying symbol and theme SVGs

import React from 'react';
import { SYMBOL_SVG_MAP, THEME_SVG_MAP, SHAPE_SVG_MAP } from './symbolUtils';

// React component to display symbol SVG
export const SymbolIcon: React.FC<{ 
  symbolName: string; 
  className?: string; 
  size?: number 
}> = ({ symbolName, className = '', size = 24 }) => {
  const svgFile = SYMBOL_SVG_MAP[symbolName];
  
  if (!svgFile) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-200 rounded ${className}`}
        style={{ width: size, height: size }}
      >
        <span className="text-xs text-gray-500">?</span>
      </div>
    );
  }

  return (
    <img 
      src={`/src/assets/symbols/individual/${svgFile}`}
      alt={symbolName}
      className={className}
      width={size}
      height={size}
    />
  );
};

// React component to display theme SVG
export const ThemeIcon: React.FC<{ 
  themeKey: string; 
  className?: string; 
  size?: number 
}> = ({ themeKey, className = '', size = 32 }) => {
  const svgFile = THEME_SVG_MAP[themeKey];
  
  if (!svgFile) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-200 rounded ${className}`}
        style={{ width: size, height: size }}
      >
        <span className="text-xs text-gray-500">?</span>
      </div>
    );
  }

  return (
    <img 
      src={`/src/assets/symbols/themes/${svgFile}`}
      alt={`${themeKey} theme`}
      className={className}
      width={size}
      height={size}
    />
  );
};

// React component to display shape SVG
export const ShapeIcon: React.FC<{ 
  shapeName: string; 
  className?: string; 
  size?: number 
}> = ({ shapeName, className = '', size = 20 }) => {
  const svgFile = SHAPE_SVG_MAP[shapeName];
  
  if (!svgFile) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-200 rounded ${className}`}
        style={{ width: size, height: size }}
      >
        <span className="text-xs text-gray-500">○</span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <img 
        src={`/src/assets/symbols/shapes/${svgFile}`}
        alt={shapeName}
        width={size}
        height={size}
        style={{ 
          filter: className.includes('text-soft-gold') ? 'hue-rotate(35deg) saturate(1.5) brightness(1.2)' : undefined 
        }}
      />
    </div>
  );
};