import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { TeddyDecor } from './TeddyDecor';

interface NehaNoteScreenProps {
  onContinue: () => void;
}

export function NehaNoteScreen({ onContinue }: NehaNoteScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-secondary to-accent p-4 overflow-hidden relative">
      {/* Teddy decorations */}
      <TeddyDecor count={12} />
      
      {/* Floating hearts decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/15 animate-float"
            size={Math.random() * 30 + 20}
            fill="currentColor"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 3}s`
            }}
          />
        ))}
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center max-w-3xl mx-auto text-center space-y-10 px-6">
        <div className="space-y-8 animate-in fade-in slide-in-from-top duration-700">
          <div className="flex justify-center">
            <Heart size={60} className="text-primary animate-pulse-heart" fill="currentColor" />
          </div>
          
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-romantic border-2 border-primary/20">
            <div className="space-y-6 text-lg md:text-xl text-foreground/90 font-sans leading-relaxed whitespace-pre-line">
              {`When you are in front of me, every dream feels real.
When you are close to me, every moment feels special.

What was hidden in my heart, I could never say till now.
But today, on chocolate Day, I just want to say—
Without you, this heart feels incomplete.

Happy chocolate Day
Life will be more beautiful if you are with me.`}
            </div>
          </div>

          {/* Chocolate Day Illustration */}
          <div className="flex justify-center animate-in fade-in zoom-in delay-200">
            <img 
              src="/assets/generated/chocolate-day-scene.dim_1024x768.png" 
              alt="Chocolate Day - Boy proposing to girl"
              className="rounded-2xl shadow-romantic border-2 border-primary/20 max-w-full h-auto w-full md:w-4/5"
            />
          </div>

          <div className="flex justify-center gap-2">
            <Heart size={20} className="text-primary/60" fill="currentColor" />
            <Heart size={28} className="text-primary animate-pulse-heart" fill="currentColor" />
            <Heart size={20} className="text-primary/60" fill="currentColor" />
          </div>
        </div>

        <Button
          onClick={onContinue}
          size="lg"
          className="px-12 py-6 text-xl font-semibold rounded-full shadow-romantic hover:scale-110 transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground animate-in zoom-in delay-300"
        >
          Continue 💕
        </Button>
      </main>

      <footer className="absolute bottom-4 text-center text-sm text-muted-foreground">
        © 2026. Built with <Heart className="inline w-4 h-4 text-primary" fill="currentColor" /> using{' '}
        <a
          href="https://caffeine.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary transition-colors"
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}
