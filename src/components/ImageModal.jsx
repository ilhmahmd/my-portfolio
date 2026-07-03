export default function ImageModal({ src, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-red-500/90 hover:bg-red-500 flex items-center justify-center text-white text-xs shadow-lg transition-colors"
        >
          ✕
        </button>
        <div className="rounded-2xl overflow-hidden border-2 border-text shadow-2xl aspect-[3/4]">
          {src ? (
            <img src={src} alt="me" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-panel-light flex items-center justify-center text-text-dim text-sm">
              me.jpg
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
