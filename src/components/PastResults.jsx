import Card from "./Card";
import ResultGraph from "../assets/ResultGraph.svg";

const PastResults = ({ pastResults }) => {
  return (
    <Card>
      <h2 className=" flex justify-center items-center gap-3 mb-7 ">
        <img src={ResultGraph} className="w-9 h-9" alt="" />
        <span className="font-bold text-2xl text-blue-800">Past Results</span>
      </h2>

      <ul className="space-y-4 pb-7 divide-y divide-gray-200">
        {pastResults?.map(({ wpm, accuracy, time, date }, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center pt-2 text-gray-700 text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <span className="font-bold">{idx + 1}.</span>
              <div className="grid grid-cols-[150px_1fr_150px_1fr_120px] gap-x-1 justify-items-center	">
                <span>Speed: {wpm} WPM</span>
                <span>|</span>
                <span>Accuracy: {accuracy}%</span>
                <span>|</span>
                <span>Time: {time}s</span>
              </div>
            </div>
            <data className="md:flex hidden" value={date}>
              {date}
            </data>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default PastResults;
