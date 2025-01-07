'use client'
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function Home() {
  const [visibleCards, setVisibleCards] = useState({
    card1: true,
    card2: true
  });

  const handleClose = (cardId: 'card1' | 'card2') => {
    setVisibleCards(prev => ({
      ...prev,
      [cardId]: false
    }));
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-[#1e3c72] to-[#2a5298]">
      <div className="snowflakes" aria-hidden="true">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="snowflake">{i % 2 === 0 ? '❅' : '❆'}</div>
        ))}
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen">
        <svg className="winter-tree mb-5 w-[200px] h-[200px]" viewBox="0 0 100 100">
          <polygon points="50,10 20,90 80,90" fill="#2d5a27"/>
          <rect x="45" y="90" width="10" height="10" fill="#4a2f23"/>
          <circle cx="35" cy="50" r="4" fill="#ff6b6b"/>
          <circle cx="65" cy="60" r="4" fill="gold"/>
          <circle cx="50" cy="40" r="4" fill="#ff6b6b"/>
        </svg>

        <h1 className="greeting text-white text-5xl mb-5">Hello Winter World!</h1>
        
        <div className="penguin mb-8">
          <div className="penguin-body"></div>
          <div className="penguin-face">
            <div className="eye left"></div>
            <div className="eye right"></div>
            <div className="beak"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full px-4">
          {visibleCards.card1 && (
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
              <CardHeader className="relative">
                <div className="text-3xl mb-2">❄️</div>
                <CardTitle className="text-white">Winter Magic</CardTitle>
                <button 
                  onClick={() => handleClose('card1')}
                  className="absolute top-4 right-4 px-4 py-2 rounded-md bg-white/20 hover:bg-white/30 text-white transition-colors"
                >
                  Cheers
                </button>
              </CardHeader>
              <CardContent className="text-white/90">
                Let it snow, let it snow! Embrace the magic of winter as snowflakes dance 
                through the crisp air, creating a wonderland of endless possibilities.
              </CardContent>
            </Card>
          )}

          {visibleCards.card2 && (
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
              <CardHeader className="relative">
                <div className="text-3xl mb-2">🎄</div>
                <CardTitle className="text-white">Festive Joy</CardTitle>
                <button 
                  onClick={() => handleClose('card2')}
                  className="absolute top-4 right-4 px-4 py-2 rounded-md bg-white/20 hover:bg-white/30 text-white transition-colors"
                >
                  Cheers
                </button>
              </CardHeader>
              <CardContent className="text-white/90">
                Celebrate the season with warmth in your heart. May these winter days 
                bring you cozy moments and cherished memories to last a lifetime.
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
