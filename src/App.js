import React, {useState, useEffect} from 'react';
import TriviaCard from './TriviaCard';
import { futbolQuestions, nbaQuestions, uruguayQuestions, musicaQuestions } from './utils/getTriviaQuestions'


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryOptions, setCategoryOptions] = useState([]);

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
  };

  const triviaData = [
    ...futbolQuestions,
    ...nbaQuestions,
    ...uruguayQuestions,
    ...musicaQuestions
    // Add more trivia questions here...
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Trivia App</h1>
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
          {triviaData
            .filter((trivia) => trivia.category === selectedCategory)
            .map((trivia, index) => (
              <TriviaCard
                key={index}
                question={trivia.question}
                options={trivia.options}
                correctOption={trivia.correctOption}
              />
            ))}
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
    fontFamily: 'Arial, sans-serif', // Example font family
  },
  header: {
    marginBottom: '16px',
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
