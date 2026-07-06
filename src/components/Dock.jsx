import figmaIcon from "../assets/icons/figma.png";
import reactIcon from "../assets/icons/react.png";
import spotifyIcon from "../assets/icons/spotify.png";
import cssIcon from "../assets/icons/css.png";
import githubIcon from "../assets/icons/github.png";
import gmailIcon from "../assets/icons/gmail.png";
import htmlIcon from "../assets/icons/html.png";
import laravelIcon from "../assets/icons/laravel.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import premiereIcon from "../assets/icons/premiere.png";

const TOOLS = [
  { name: "Figma", level: "Intermediate", icon: figmaIcon, href: "https://www.figma.com/design/7hHFOjd2odYqcPYasEnbbh/2026?node-id=0-1&t=E7S4oGwVxC5JkH7j-1" },
  { name: "React", level: "Basic", icon: reactIcon },
  { name: "Laravel", level: "Basic", icon: laravelIcon },
  { name: "HTML5", level: "Intermediate", icon: htmlIcon },
  { name: "CSS3", level: "Intermediate", icon: cssIcon },
  { name: "Premiere Pro", level: "Intermediate", icon: premiereIcon },
];

const SOCIALS = [
  { name: "Gmail", href: "mailto:ilhmahmd2@gmail.com", icon: gmailIcon },
  { name: "LinkedIn", href: "https://linkedin.com/in/ilhamahmadmau/", icon: linkedinIcon },
  { name: "GitHub", href: "https://github.com/ilhmahmd", icon: githubIcon },
  { name: "Spotify", href: "https://open.spotify.com/user/e2jq8kxc52jc7a7ddz6uheivc?si=fef6f7ea51024bc4", icon: spotifyIcon },
];

function DockButton({ item }) {
  const content = (
    <div className="relative group/button">
      <div
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shadow-md transition-transform duration-150 hover:-translate-y-1 overflow-hidden"
        title={item.name}
      >
        <img src={item.icon} alt={item.name} className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-full bg-panel-light text-text-dim text-[10px] sm:text-xs whitespace-nowrap opacity-0 group-hover/button:opacity-100 transition-opacity pointer-events-none">
        <span className="font-semibold text-text">{item.name}</span>
        {item.level && <span>: {item.level}</span>}
      </div>
    </div>
  );

  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.name}>
        {content}
      </a>
    );
  }
  return content;
}

export default function Dock() {
  return (
    <div className="w-full flex flex-col items-center gap-4 sm:gap-2">
      {/* Tools section - stacked on mobile, hidden on desktop */}
      <div className="flex flex-wrap justify-center gap-2 sm:hidden">
        {TOOLS.map((t) => (
          <DockButton key={t.name} item={t} />
        ))}
      </div>

      {/* Main dock - tools and socials together on desktop, only socials on mobile */}
      <div className="flex items-center gap-2 sm:gap-3 bg-panel/80 backdrop-blur-sm px-3 sm:px-4 py-2.5 sm:py-3 rounded-2xl shadow-xl">
        {/* Show tools only on desktop */}
        <div className="hidden sm:contents">
          {TOOLS.map((t) => (
            <DockButton key={t.name} item={t} />
          ))}
          <div className="w-px h-7 bg-text-dim/30 mx-1" />
        </div>
        
        {/* Always show socials */}
        {SOCIALS.map((s) => (
          <DockButton key={s.name} item={s} />
        ))}
      </div>
    </div>
  );
}