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
    <Card>
      <p className="min-h-24 w-full bg-neutral-100 px-4 py-4 text-xl font-semibold rounded-md tracking-wide leading-8 text-gray-700 border border-gray-300 shadow-inner">
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
            // next char to type
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
      <textarea
        value={userType}
        onChange={handleUserType}
        placeholder="Start typing here.."
        className={`min-h-36 w-full resize-none text-base bg-white px-4 py-3 rounded-lg mt-4 shadow-sm transition-all border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          completed ? "opacity-50 pointer-events-none" : ""
        } text-gray-800 font-medium`}
        disabled={completed}
      ></textarea>
      {completed ? (
        <>
          <div className="mb-7 mt-6">
            <ResultText>Speed: {wpm} WPM</ResultText>
            <ResultText>Accuracy: {accuracy}%</ResultText>
            <ResultText>Time Taken: {TOTAL_TIME - timer} seconds</ResultText>
          </div>
          <div className="flex justify-center">
            <button
              onClick={tryAgain}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-all rounded-full text-white text-sm font-semibold tracking-wide shadow-lg"
            >
              Try Again
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-500 text-lg italic my-10 text-center">
          Type the above sentence to test your Speed.
        </p>
      )}
    </Card>
  );
};

export default TestCard;
