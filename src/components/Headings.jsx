import keyboard from "../assets/keyboard.svg";
import hourglass from "../assets/hourglass.svg";
const Headings = ({ timer }) => {
  return (
    <>
      <h1 className=" flex  items-center gap-3">
        <img src={keyboard} className="w-10 h-10" alt="keyboard pic" />
        <span className="font-extrabold text-4xl tracking-wide text-blue-800 drop-shadow-sm">
          Typing Speed Tester
        </span>
      </h1>
      <p className="text-lg font-semibold text-gray-700 flex items-center gap-2 mt-6">
        <img
          src={hourglass}
          className="w-[17.7px] h-[17.7px]"
          alt="stats pic"
        />
        <span>Time Left: {timer}s</span>
      </p>
    </>
  );
};

export default Headings;
