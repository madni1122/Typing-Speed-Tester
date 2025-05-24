import paragraphs from "../../paragraphs";
const fetchRandomSentence = () => {
  let Rnd_Idx = Math.floor(Math.random() * paragraphs.length);
  return paragraphs[Rnd_Idx];
};

export default fetchRandomSentence;
