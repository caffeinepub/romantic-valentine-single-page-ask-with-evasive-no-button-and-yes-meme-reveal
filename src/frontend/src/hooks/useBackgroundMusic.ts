import { useContext, createContext } from 'react';

export interface BackgroundMusicContextValue {
  isPlaying: boolean;
  isMuted: boolean;
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  toggleMute: () => void;
  startAfterGesture: () => void;
}

export const BackgroundMusicContext = createContext<BackgroundMusicContextValue | null>(null);

export function useBackgroundMusic() {
  const context = useContext(BackgroundMusicContext);
  if (!context) {
    throw new Error('useBackgroundMusic must be used within BackgroundMusicProvider');
  }
  return context;
}
