import { useEffect, useState } from "react";

export default function StatusBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const formatted = time
    .toLocaleTimeString("en-US", {
      timeZone: "Asia/Jakarta",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .replace(":", " : ");

  return (
    <div className="flex items-center justify-between text-[11px] sm:text-xs tracking-[0.2em] text-text-dim uppercase">
      <span>Garut, West Java</span>
      <span>{formatted}</span>
    </div>
  );
}
