import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function DownloadZipControl() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        asChild
        size="lg"
        className="rounded-full bg-primary/90 backdrop-blur-sm hover:bg-primary shadow-romantic px-6 py-6"
        aria-label="Download Valentine surprise page"
      >
        <a
          href="/assets/downloads/valentine-surprise-page.zip"
          download="valentine-surprise-page.zip"
          className="flex items-center gap-2"
        >
          <Download className="h-5 w-5" />
          <span className="font-semibold">Download</span>
        </a>
      </Button>
    </div>
  );
}
