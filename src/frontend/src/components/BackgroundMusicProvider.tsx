import { ReactNode, useRef, useState, useEffect } from 'react';
import { BackgroundMusicContext, BackgroundMusicContextValue } from '@/hooks/useBackgroundMusic';

interface BackgroundMusicProviderProps {
  children: ReactNode;
}

export function BackgroundMusicProvider({ children }: BackgroundMusicProviderProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Create audio element once with the new "Ma" song
    const audio = new Audio('/assets/audio/ma.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    // Update state when audio plays/pauses
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.pause();
      audio.src = '';
    };
  }, []);

  const play = () => {
    if (audioRef.current && hasStarted) {
      audioRef.current.play().catch(err => {
        console.error('Failed to play audio:', err);
      });
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const startAfterGesture = () => {
    if (!hasStarted && audioRef.current) {
      setHasStarted(true);
      audioRef.current.play().catch(err => {
        console.error('Failed to start audio:', err);
      });
    }
  };

  const value: BackgroundMusicContextValue = {
    isPlaying,
    isMuted,
    play,
    pause,
    togglePlay,
    toggleMute,
    startAfterGesture,
  };

  return (
    <BackgroundMusicContext.Provider value={value}>
      {children}
    </BackgroundMusicContext.Provider>
  );
}
