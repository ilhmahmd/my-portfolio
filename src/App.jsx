import { useState, useEffect } from "react";
import StatusBar from "./components/StatusBar";
import TypingRole from "./components/TypingRole";
import { FolderIcon, ImageIcon, FileIcon } from "./components/FileIcons";
import Dock from "./components/Dock";
import WorksModal from "./components/WorksModal";
import ImageModal from "./components/ImageModal";
import GradientBackground from "./components/GradientBackground";
import Loader from "./components/Loader";
import meImage from "./assets/icons/me.jpeg";

const RESUME_URL = "https://drive.google.com/file/d/1diILsJ3m76ytWAdZ9Wq7APlUogVByi9Y/view?usp=sharing";

export default function App() {
  const [showWorks, setShowWorks] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [isLoading, setIsLoading] = useState(() => {
    // Check if user has visited before
    const hasVisited = sessionStorage.getItem("hasVisited");
    return !hasVisited;
  });

  useEffect(() => {
    if (!isLoading) {
      sessionStorage.setItem("hasVisited", "true");
    }
  }, [isLoading]);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <GradientBackground />
      {isLoading && (
        <Loader onLoadComplete={handleLoadComplete} />
      )}
      {!isLoading && (
        <div 
          className="min-h-screen w-full text-text px-5 sm:px-10 lg:px-16 py-6 sm:py-8 flex flex-col relative"
        >
          <StatusBar />

      <main className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-10 sm:gap-6 mt-10 sm:mt-0">
        <div className="max-w-xl ml-0 sm:ml-12 lg:ml-20" style={{ animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          <h1 className="text-6xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            <span className="font-light text-accent">hi, i'm</span> <span className="text-text font-bold">Ilham Ahmad Maulana</span>
          </h1>

          <div className="mt-5 flex items-center gap-3 bg-panel/80 border border-panel-light rounded-xl px-3 py-1 max-w-md">
            <span className="text-accent text-4xl" style={{ transform: "scaleX(-1)" }}>⌕</span>
            <span className="text-base sm:text-2xl text-text-dim min-h-[1em]">
              <TypingRole />
            </span>
          </div>

          <p className="mt-12 text-sm sm:text-base text-text-dim max-w-sm" style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>
            I get curious about things, then I make them.
          </p>
        </div>

        <div className="flex flex-row sm:flex-col gap-6 sm:gap-8 self-start sm:self-auto" style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <div style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
            <FolderIcon label="Works" onClick={() => setShowWorks(true)} />
          </div>
          <div style={{ animation: "fadeInUp 0.6s ease-out 0.5s both" }}>
            <ImageIcon label="me.jpg" onClick={() => setShowImage(true)} />
          </div>
          <div style={{ animation: "fadeInUp 0.6s ease-out 0.6s both" }}>
            <FileIcon label="Resume.pdf" href={RESUME_URL} />
          </div>
        </div>
      </main>

      <footer className="mt-10 sm:mt-12 flex justify-center" style={{ animation: "fadeInUp 0.6s ease-out 0.7s both" }}>
        <Dock />
      </footer>

      {showWorks && (
        <WorksModal
          onClose={() => setShowWorks(false)}
        />
      )}
      {showImage && <ImageModal src={meImage} onClose={() => setShowImage(false)} />}
        </div>
      )}
    </>
  );
}
