import { useEffect, useState } from "react";

const FloatingTimer = ({ timer }) => {
  const [pop, setPop] = useState(false);

  useEffect(() => {
    if (timer <= 0) return; // hide when finished

    setPop(true);
    const t = setTimeout(() => setPop(false), 200); // remove animation class

    return () => clearTimeout(t);
  }, [timer]);

  if (timer === 0) return null; // hide when test resets or finishes

  return (
    <span
      className={`
        sm:hidden 
        fixed 
        bottom-3 right-3 
        bg-blue-600 
        text-white 
        font-bold 
        px-3 py-2 
        rounded-full 
        shadow-lg 
        text-sm 
        tracking-wide 
        ${pop ? "timer-pop" : ""}
      `}
    >
      {timer}s
    </span>
  );
};

export default FloatingTimer;
