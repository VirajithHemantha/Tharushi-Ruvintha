import React from 'react';

export const BotanicalLeft: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg 
    className={className} 
    viewBox="0 0 200 600" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Delicate leaf branch wrapping from left */}
    <path d="M 0 50 Q 50 100, 20 200 Q 80 250, 40 350 Q 120 400, 30 500" stroke="currentColor" strokeWidth="0.5" fill="none" />
    
    {/* Leaves */}
    <path d="M 25 100 C 40 80, 70 90, 80 110 C 60 120, 30 110, 25 100 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
    <path d="M 25 100 C 40 80, 70 90, 80 110 C 60 120, 30 110, 25 100 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
    <path d="M 40 180 C 70 160, 100 180, 100 200 C 80 220, 50 210, 40 180 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
    <path d="M 10 220 C 30 200, 50 230, 40 250 C 20 250, 0 240, 10 220 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
    
    {/* Scattered dots */}
    <circle cx="90" cy="150" r="1" fill="currentColor" />
    <circle cx="30" cy="80" r="1" fill="currentColor" />
    <circle cx="110" cy="220" r="1.5" fill="currentColor" />
    <circle cx="50" cy="300" r="1" fill="currentColor" />
    
    {/* Additional delicate sprigs */}
    <path d="M 0 300 Q 60 320, 40 400" stroke="currentColor" strokeWidth="0.3" fill="none" />
    <path d="M 20 330 C 40 310, 70 340, 60 360 C 40 370, 10 350, 20 330 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
    
    <path d="M 0 450 Q 80 480, 50 550" stroke="currentColor" strokeWidth="0.5" fill="none" />
    <path d="M 30 480 C 60 460, 100 490, 90 520 C 60 530, 20 500, 30 480 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
  </svg>
);

export const BotanicalRight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg 
    className={className} 
    viewBox="0 0 200 600" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Delicate leaf branch wrapping from right */}
    <path d="M 200 100 Q 120 150, 160 250 Q 80 320, 150 420 Q 90 480, 180 580" stroke="currentColor" strokeWidth="0.5" fill="none" />
    
    {/* Leaves */}
    <path d="M 160 170 C 130 150, 100 170, 110 190 C 140 210, 170 190, 160 170 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
    <path d="M 180 280 C 150 250, 110 280, 120 310 C 150 330, 190 310, 180 280 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
    <path d="M 130 380 C 100 350, 60 380, 70 410 C 100 430, 140 400, 130 380 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
    
    {/* Scattered dots */}
    <circle cx="120" cy="120" r="1" fill="currentColor" />
    <circle cx="80" cy="220" r="1.5" fill="currentColor" />
    <circle cx="150" cy="350" r="1" fill="currentColor" />
    <circle cx="90" cy="450" r="1.5" fill="currentColor" />
    
    {/* Additional delicate sprigs */}
    <path d="M 200 200 Q 140 220, 160 300" stroke="currentColor" strokeWidth="0.3" fill="none" />
    <path d="M 200 400 Q 120 430, 150 500" stroke="currentColor" strokeWidth="0.5" fill="none" />
    <path d="M 170 430 C 140 410, 100 440, 110 470 C 140 490, 180 460, 170 430 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
  </svg>
);
