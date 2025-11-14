import keyboard from "../assets/keyboard.svg";
import hourglass from "../assets/hourglass.svg";

const Headings = ({ timer }) => {
  return (
    <div className="w-full">
      {/* Main Heading */}
      <h1 className="flex justify-center items-center gap-3">
        <img
          src={keyboard}
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          alt="keyboard icon"
        />
        <span className="font-extrabold text-xl sm:text-2xl md:text-4xl tracking-wide text-blue-800 drop-shadow-sm">
          Typing Speed Tester
        </span>
      </h1>

      {/* Timer Section */}
      <p className="flex justify-center  items-center gap-2 mt-4 sm:mt-6 text-base sm:text-lg font-semibold text-gray-700">
        <img
          src={hourglass}
          className="w-4 h-4 sm:w-[17px] sm:h-[17px] md:w-[20px] md:h-[20px]"
          alt="stats icon"
        />
        <span>Time Left: {timer}s</span>
      </p>
    </div>
  );
};

export default Headings;
