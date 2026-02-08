import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { TeddyDecor } from './TeddyDecor';

interface NehaCoverScreenProps {
  onOpenNote: () => void;
}

export function NehaCoverScreen({ onOpenNote }: NehaCoverScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-secondary to-accent p-4 overflow-hidden relative">
      {/* Teddy decorations */}
      <TeddyDecor count={15} />
      
      {/* Floating hearts decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/15 animate-float"
            size={Math.random() * 35 + 25}
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

      <main className="relative z-10 flex flex-col items-center justify-center max-w-3xl mx-auto text-center space-y-12">
        <div className="space-y-8 animate-in fade-in slide-in-from-top duration-700">
          <div className="flex justify-center">
            <Heart size={100} className="text-primary animate-pulse-heart" fill="currentColor" />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-serif font-bold text-primary leading-tight tracking-wide">
            Neha
          </h1>
          
          <div className="flex justify-center gap-3">
            <Heart size={24} className="text-primary/60" fill="currentColor" />
            <Heart size={32} className="text-primary animate-pulse-heart" fill="currentColor" />
            <Heart size={24} className="text-primary/60" fill="currentColor" />
          </div>
        </div>

        <Button
          onClick={onOpenNote}
          size="lg"
          className="px-16 py-8 text-2xl font-semibold rounded-full shadow-romantic hover:scale-110 transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground animate-in zoom-in delay-300"
        >
          Open Note 💌
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
