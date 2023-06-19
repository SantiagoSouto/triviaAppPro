import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const TriviaCard = ({ question, options, correctOption }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.question}>{question}</h3>
      <ul style={styles.options}>
        {options.map((option, index) => (
          <li key={index} style={styles.option}>
            {(option === correctOption) ? <span className='correct'><FontAwesomeIcon icon={faCheck} style={styles.icon} /></span> : <span className='incorrect'><FontAwesomeIcon icon={faTimes} style={styles.icon} /></span>}
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
    card: {
      border: '1px solid #ccc',
      borderRadius: '6px',
      padding: '16px',
      marginBottom: '16px',
      backgroundColor: '#f5f5f5',
      width: '50vw'
    },
    question: {
      marginBottom: '12px',
      fontWeight: 'bold',
    },
    options: {
      listStyle: 'none',
      paddingLeft: '0',
    },
    option: {
      cursor: 'pointer',
      marginBottom: '8px',
    },
    icon: {
      marginRight: '8px',
    },
    iconSpan: {
      display: 'inline-flex',
      alignItems: 'center',
    },
  };

export default TriviaCard;
