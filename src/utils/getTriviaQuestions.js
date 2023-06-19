import futbolData from '../futbol.json';
import nbaData from '../nba.json';
import uruguayData from '../uruguay.json';
import musicaData from '../musica.json';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getQuestions(data) {
    const shuffledQuestions = shuffleArray(data).slice(0, 10);
    shuffledQuestions.forEach(element => {
        element.options = shuffleArray(element.options)
    });
    return shuffledQuestions;
}

export const futbolQuestions = getQuestions(futbolData);
export const nbaQuestions = getQuestions(nbaData);
export const uruguayQuestions = getQuestions(uruguayData);
export const musicaQuestions = getQuestions(musicaData);
