import React, {useState, useEffect} from 'react';
import TriviaCard from './TriviaCard';
import { futbolQuestions, nbaQuestions, uruguayQuestions, musicaQuestions } from './utils/getTriviaQuestions'


const App = () => {
  const triviaData = [
    ...futbolQuestions,
    ...nbaQuestions,
    ...uruguayQuestions,
    ...musicaQuestions
    // Add more trivia questions here...
  ];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    setCategoryOptions(shuffleArray(['Futbol', 'NBA', 'Historia contemporanea del Uruguay', 'Musica']));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setQuestions(triviaData.filter((trivia) => trivia.category === category));
    setCurrentIndex(0);
  };


  const onNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(null);
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Trivia Night</h1>
      <div style={styles.navbar}>
        {categoryOptions.map((category, index) => (
          <span
            key={index}
            style={category === selectedCategory ? styles.activeNavLink : styles.navLink}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </span>
        ))}
      </div>
      {selectedCategory && (
        <div style={styles.cardContainer}>
          {currentIndex !== null ? (
            <TriviaCard
              key={currentIndex}
              question={questions[currentIndex].question}
              options={questions[currentIndex].options}
              correctOption={questions[currentIndex].correctOption}
              onNext={onNext}
            />) : (
              <p>Muchas gracias por jugar. Selecciona otra categoría!</p>
            )}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#000',
    color: '#fff',
    width: '100%',
    height: '100vh',
    background: 'url(./background.jpg) center/cover', 
  },
  header: {
    marginBottom: '5%',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '16px',
  },
  navLink: {
    cursor: 'pointer',
    marginRight: '8px',
    padding: '8px',
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
    borderRadius: '4px',
    backgroundColor: '#f5f5f5',
  },
  activeNavLink: {
    cursor: 'pointer',
    marginRight: '8px',
    padding: '8px',
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: '4px',
    backgroundColor: '#333',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default App;
