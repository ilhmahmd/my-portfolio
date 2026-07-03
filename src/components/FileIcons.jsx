import folderIcon from "../assets/icons/folder.png";
import documentIcon from "../assets/icons/document.png";
import meIcon from "../assets/icons/me.png";

export function FolderIcon({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 group focus:outline-none"
    >
      <div className="w-16 h-14 sm:w-[72px] sm:h-16 rounded-lg shadow-lg relative transition-transform duration-200 group-hover:-translate-y-1 overflow-hidden">
        <img src={folderIcon} alt={label} className="w-full h-full object-cover" />
      </div>
      <span className="text-xs sm:text-sm text-text-dim group-hover:text-text transition-colors">
        {label}
      </span>
    </button>
  );
}

export function ImageIcon({ label, src, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 group focus:outline-none"
    >
      <div className="w-16 h-20 sm:w-20 sm:h-24 overflow-hidden shadow-lg transition-transform duration-200 group-hover:-translate-y-1">
        {src ? (
          <img src={src} alt={label} className="w-full h-full object-cover" />
        ) : (
          <img src={meIcon} alt={label} className="w-full h-full object-cover" />
        )}
      </div>
      <span className="text-xs sm:text-sm text-text-dim group-hover:text-text transition-colors">
        {label}
      </span>
    </button>
  );
}

export function FileIcon({ label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2 group focus:outline-none"
    >
      <div className="w-12 h-14 sm:w-14 sm:h-16 relative transition-transform duration-200 group-hover:-translate-y-1 group-focus-visible:ring-2 ring-offset-2 ring-offset-bg ring-accent overflow-hidden rounded-md">
        <img src={documentIcon} alt={label} className="w-full h-full object-cover" />
      </div>
      <span className="text-xs sm:text-sm text-text-dim group-hover:text-text transition-colors">
        {label}
      </span>
    </a>
  );
}
