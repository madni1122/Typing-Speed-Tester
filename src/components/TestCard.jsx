import ResultText from "./ResultText";
import Card from "./Card";

const TestCard = ({
  sentence,
  userType,
  completed,
  handleUserType,
  wpm,
  accuracy,
  TOTAL_TIME,
  timer,
  tryAgain,
}) => {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      {/* Sentence Box */}
      <p
        className="
          min-h-28 
          w-full 
          bg-neutral-100 
          sm:px-5 px-3 
          sm:py-5 py-4 
          lg:text-2xl sm:text-xl text-base
          font-semibold 
          rounded-md 
          tracking-wide 
          leading-7 sm:leading-8 
          text-gray-700 
          border border-gray-300 
          shadow-inner
        "
      >
        {sentence.split("").map((char, idx) => {
          let baseStyle = "relative px-[1px]";
          let style = "text-neutral-500";

          if (idx < userType.length) {
            style =
              userType[idx] === char
                ? "text-green-600"
                : "text-red-500 underline decoration-red-400";
          }

          if (idx === userType.length && !completed) {
            style =
              "bg-yellow-200 text-black border-b-2 border-yellow-500 animate-pulse";
          }

          return (
            <span key={idx} className={`${baseStyle} ${style}`}>
              {char}
            </span>
          );
        })}
      </p>

      {/* Typing Input */}
      <textarea
        value={userType}
        onChange={handleUserType}
        placeholder="Start typing here..."
        className={`
          w-full
          resize-none 
          bg-white 
          sm:min-h-44 min-h-36
          sm:text-lg text-base
          px-4 py-3 
          rounded-lg 
          mt-4 
          shadow-sm 
          transition-all 
          border border-gray-300 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-400 
          font-medium 
          text-gray-800
          ${completed ? "opacity-50 pointer-events-none" : ""}
        `}
        disabled={completed}
      ></textarea>

      {/* Results */}
      {completed ? (
        <>
          <div className="mb-8 mt-6 text-center sm:text-left">
            <ResultText>Speed: {wpm} WPM</ResultText>
            <ResultText>Accuracy: {accuracy}%</ResultText>
            <ResultText>Time Taken: {TOTAL_TIME - timer} seconds</ResultText>
          </div>

          <div className="flex justify-center">
            <button
              onClick={tryAgain}
              className="
                px-8 sm:px-10 
                py-2.5 
                bg-blue-600 
                hover:bg-blue-700 
                transition-all 
                rounded-full 
                text-white 
                text-sm sm:text-base 
                font-semibold 
                tracking-wide 
                shadow-lg
              "
            >
              Try Again
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-500 sm:text-lg text-base italic my-10 text-center">
          Type the above sentence to test your speed.
        </p>
      )}
    </Card>
  );
};

export default TestCard;
