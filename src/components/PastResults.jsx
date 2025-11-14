import Card from "./Card";
import ResultGraph from "../assets/ResultGraph.svg";

const PastResults = ({ pastResults }) => {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      {/* Heading */}
      <h2 className="flex justify-center items-center gap-3 mb-6 text-center">
        <img
          src={ResultGraph}
          className="w-8 h-8 sm:w-9 sm:h-9"
          alt="results icon"
        />
        <span className="font-bold text-xl sm:text-2xl text-blue-800">
          Past Results
        </span>
      </h2>

      {/* Results List */}
      <ul className="space-y-5 pb-6">
        {pastResults?.map(({ wpm, accuracy, time, date }, idx) => (
          <li
            key={idx}
            className="
              flex flex-row 
              justify-between 
              md:items-center 
              gap-2 
              pt-3 
              border-t border-gray-200
              text-gray-700 
              text-sm sm:text-base 
              font-medium
            "
          >
            {/* Left Section */}
            <div className="flex items-start md:items-center gap-3">
              <span className="font-bold text-blue-700">{idx + 1}.</span>

              {/* Responsive Statistics */}
              <div
                className="
                  grid 
                  grid-cols-1 
                  sm:grid-cols-[150px_150px_150px] 
                  gap-y-1 sm:gap-y-0 
                  sm:gap-x-6
                  text-gray-700
                "
              >
                <span>Speed: {wpm} WPM</span>
                <span>Accuracy: {accuracy}%</span>
                <span>Time: {time}s</span>
              </div>
            </div>

            {/* Right Section: Date (hidden on mobile) */}
            <data
              value={date}
              className=" text-gray-600 sm:hidden block md:block sm:opacity-80 opacity-50 text-[11px] sm:text-sm"
            >
              {date}
            </data>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default PastResults;
