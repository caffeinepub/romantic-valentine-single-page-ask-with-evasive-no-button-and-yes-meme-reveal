import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useBackgroundMusic } from '@/hooks/useBackgroundMusic';

export function BackgroundMusicControls() {
  const { isPlaying, isMuted, togglePlay, toggleMute } = useBackgroundMusic();

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <Button
        onClick={togglePlay}
        size="icon"
        variant="outline"
        className="rounded-full bg-card/80 backdrop-blur-sm border-primary/20 hover:bg-card hover:border-primary/40 shadow-romantic"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4 text-primary" />
        ) : (
          <Play className="h-4 w-4 text-primary" />
        )}
      </Button>
      
      <Button
        onClick={toggleMute}
        size="icon"
        variant="outline"
        className="rounded-full bg-card/80 backdrop-blur-sm border-primary/20 hover:bg-card hover:border-primary/40 shadow-romantic"
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
      >
        {isMuted ? (
          <VolumeX className="h-4 w-4 text-primary" />
        ) : (
          <Volume2 className="h-4 w-4 text-primary" />
        )}
      </Button>
    </div>
  );
}
