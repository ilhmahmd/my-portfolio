import movementImg from "../assets/works/movement.png";
import hazenImg from "../assets/works/hazen.png";
import novaImg from "../assets/works/nova-energy.png";
import pulseImg from "../assets/works/pulse-band.png";

const PROJECTS = [
  {
    file: "movement.jsx",
    name: "Movement Studio",
    accent: "from-green-700 to-black",
    img: movementImg,
    url: "https://movementstudio.space",
  },
  {
    file: "hazen.jsx",
    name: "Hazen Pictures",
    accent: "from-zinc-700 to-black",
    img: hazenImg,
    url: "https://hazen-pictures.vercel.app",
  },
  {
    file: "nova-energy.jsx",
    name: "Nova Energy",
    accent: "from-lime-400 to-lime-600",
    img: novaImg,
    url: "https://dev-nova-energy.vercel.app",
  },
  {
    file: "pulse-band.jsx",
    name: "PulseBand",
    accent: "from-gray-100 to-gray-300",
    img: pulseImg,
    url: "https://pulse-staging-mv.vercel.app",
  },
];


export default function WorksModal({ onClose, onSelectProject }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black/30 backdrop-blur-sm p-4 pt-20 sm:pt-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-bg-deep rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 sm:py-5 bg-panel">
          <h2 className="text-xl sm:text-2xl font-semibold">Latest works</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-6 h-6 rounded-full bg-red-500/90 hover:bg-red-500 flex items-center justify-center text-white text-xs transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-5 sm:p-7 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
          {PROJECTS.map((p) => (
            <a
              key={p.file}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start gap-2 text-left group"
            >
              <div
                className={`w-full aspect-square rounded-lg bg-gradient-to-br ${p.accent} shadow-lg overflow-hidden flex items-center justify-center transition-transform duration-200 group-hover:-translate-y-1`}
              >
                {p.img ? (
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xs text-black/40 font-mono px-2 text-center">
                    {p.name}
                  </span>
                )}
              </div>
              <span className="text-xs sm:text-sm text-text-dim group-hover:text-text font-mono transition-colors">
                {p.file}
              </span>
            </a>
          ))}
        </div>

        <div className="px-5 sm:px-7 py-5 sm:py-5">
          <span className="inline-block text-xs sm:text-sm bg-panel px-3 py-2 rounded-lg text-text-dim">
            <strong className="text-text">case study</strong> coming soon
          </span>
        </div>
      </div>
    </div>
  );
}
