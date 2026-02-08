import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { NehaCoverScreen } from '@/components/NehaCoverScreen';
import { NehaNoteScreen } from '@/components/NehaNoteScreen';

type Screen = 'cover' | 'note' | 'question' | 'celebration';

function App() {
    const [currentScreen, setCurrentScreen] = useState<Screen>('cover');
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const noButtonRef = useRef<HTMLButtonElement>(null);

    const moveNoButton = () => {
        if (!containerRef.current || !noButtonRef.current) return;

        const container = containerRef.current.getBoundingClientRect();
        const button = noButtonRef.current.getBoundingClientRect();

        // Calculate safe bounds (keep button fully visible)
        const maxX = container.width - button.width - 40;
        const maxY = container.height - button.height - 40;
        const minX = 20;
        const minY = 20;

        // Generate random position within safe bounds
        const newX = Math.random() * (maxX - minX) + minX;
        const newY = Math.random() * (maxY - minY) + minY;

        setNoButtonPosition({ x: newX, y: newY });
    };

    const handleYesClick = () => {
        setCurrentScreen('celebration');
    };

    useEffect(() => {
        // Initialize No button position when question screen is shown
        if (currentScreen === 'question' && containerRef.current && noButtonRef.current) {
            const container = containerRef.current.getBoundingClientRect();
            const button = noButtonRef.current.getBoundingClientRect();
            const centerX = (container.width - button.width) / 2;
            const centerY = (container.height - button.height) / 2 + 60;
            setNoButtonPosition({ x: centerX, y: centerY });
        }
    }, [currentScreen]);

    // Cover screen
    if (currentScreen === 'cover') {
        return <NehaCoverScreen onOpenNote={() => setCurrentScreen('note')} />;
    }

    // Note screen
    if (currentScreen === 'note') {
        return <NehaNoteScreen onContinue={() => setCurrentScreen('question')} />;
    }

    // Celebration screen
    if (currentScreen === 'celebration') {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-secondary to-accent p-4 overflow-hidden relative">
                {/* Floating hearts decoration */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(12)].map((_, i) => (
                        <Heart
                            key={i}
                            className="absolute text-primary/20 animate-float"
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

                <main className="relative z-10 flex flex-col items-center justify-center max-w-2xl mx-auto text-center space-y-8">
                    <div className="space-y-4 animate-in fade-in duration-700">
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary animate-pulse-heart">
                            Good choice
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground/80 font-sans">
                            I knew you'd say yes! 💕
                        </p>
                    </div>

                    <div className="w-full max-w-md animate-in zoom-in duration-500 delay-300">
                        <img
                            src="/assets/generated/valentine-good-choice-meme.dim_1024x1024.png"
                            alt="Good choice meme"
                            className="w-full h-auto rounded-2xl shadow-romantic border-4 border-primary/20"
                        />
                    </div>

                    <div className="flex items-center gap-2 text-primary animate-pulse-heart">
                        <Heart size={32} fill="currentColor" />
                        <Heart size={24} fill="currentColor" />
                        <Heart size={32} fill="currentColor" />
                    </div>
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

    // Question screen (with evasive No button)
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-secondary to-accent p-4 overflow-hidden relative">
            {/* Floating hearts decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <Heart
                        key={i}
                        className="absolute text-primary/10 animate-float"
                        size={Math.random() * 40 + 20}
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
                <div className="space-y-6 animate-in fade-in slide-in-from-top duration-700">
                    <div className="flex justify-center">
                        <Heart size={80} className="text-primary animate-pulse-heart" fill="currentColor" />
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary leading-tight">
                        Will you be my Valentine?
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground/70 font-sans max-w-xl mx-auto">
                        There's only one right answer... 💖
                    </p>
                </div>

                {/* Button container with relative positioning for the evasive No button */}
                <div
                    ref={containerRef}
                    className="relative w-full max-w-md h-64 flex items-center justify-center animate-in fade-in zoom-in duration-500 delay-300"
                >
                    {/* Yes button - always centered */}
                    <Button
                        onClick={handleYesClick}
                        size="lg"
                        className="absolute px-12 py-6 text-2xl font-semibold rounded-full shadow-romantic hover:scale-110 transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground z-10"
                    >
                        Yes! 💕
                    </Button>

                    {/* No button - moves on hover */}
                    <Button
                        ref={noButtonRef}
                        onMouseEnter={moveNoButton}
                        onPointerEnter={moveNoButton}
                        variant="outline"
                        size="lg"
                        className="absolute px-12 py-6 text-2xl font-semibold rounded-full transition-all duration-200 ease-out border-2 border-muted-foreground/30 hover:border-muted-foreground/50"
                        style={{
                            left: `${noButtonPosition.x}px`,
                            top: `${noButtonPosition.y}px`
                        }}
                    >
                        No
                    </Button>
                </div>

                <p className="text-sm text-muted-foreground italic font-sans animate-in fade-in duration-700 delay-500">
                    (Hint: The "No" button is a bit shy... 😉)
                </p>
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

export default App;
