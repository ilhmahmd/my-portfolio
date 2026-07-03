import { useEffect, useState } from "react";

const ROLES = [
  "Tech Enthusiast",
  "Junior Graphic Designer",
  "Junior UI/UX Designer",
  "Videographer",
  "Vibe Coder",
];

const TYPE_SPEED = 55;
const DELETE_SPEED = 35;
const HOLD_TIME = 2000;

export default function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | holding | deleting

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout;

    if (phase === "typing") {
      if (text.length < currentRole.length) {
        timeout = setTimeout(() => {
          setText(currentRole.slice(0, text.length + 1));
        }, TYPE_SPEED);
      } else {
        timeout = setTimeout(() => setPhase("holding"), HOLD_TIME);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("deleting"), HOLD_TIME);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentRole.slice(0, text.length - 1));
        }, DELETE_SPEED);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, roleIndex]);

  return (
    <span aria-live="polite" className="leading-none">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-accent ml-1 align-middle animate-pulse" />
    </span>
  );
}
