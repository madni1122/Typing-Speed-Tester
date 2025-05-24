const getResults = (userType, sentence, time, TOTAL_TIME) => {
  let correctType = userType
    .split("")
    .filter((char, idx) => char === sentence[idx]).length;
  let estimatedWords = correctType / 5;
  let timeTaken = TOTAL_TIME - time;
  let WPM = timeTaken > 0 ? Math.round((estimatedWords / timeTaken) * 60) : 0;

  let accuracy = userType.length
    ? Math.round((correctType / userType.length) * 100)
    : 0;

  return [WPM, accuracy, timeTaken];
};
export default getResults;
