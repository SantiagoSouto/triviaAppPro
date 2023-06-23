import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const TriviaCard = ({ question, options, correctOption, onNext }) => {

  const handleNext = () => {
    onNext();
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.question}>{question}</h3>
      <ul style={styles.options}>
        {options.map((option, index) => (
          <li key={index} style={styles.option}>
            <span>{(index+1) + ')'}</span>
            {option}
            {(option === correctOption) ? <span className='correct'><FontAwesomeIcon icon={faCheck} style={styles.icon} /></span> : <span className='incorrect'><FontAwesomeIcon icon={faTimes} style={styles.icon} /></span>}
          </li>
        ))}
      </ul>
      <button style={styles.nextButton} onClick={handleNext}>Next</button>
    </div>
  );
};

const styles = {
    card: {
      color: 'black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
      width: '75vw',
      height: '50vh'
    },
    question: {
      marginBottom: '12px',
      fontWeight: 'bold',
      height: '50%'
    },
    options: {
      listStyle: 'none',
      paddingLeft: '0',
    },
    option: {
      marginBottom: '8px',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      backgroundColor: '#f5f5f5',
    },
    icon: {
      marginRight: '8px',
    },
    iconSpan: {
      display: 'inline-flex',
      alignItems: 'center',
    },
    nextButton: {
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      backgroundColor: '#333',
      color: '#ffffff',
    }
  };

export default TriviaCard;
