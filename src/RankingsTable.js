import React, {useState, useEffect} from 'react';

const RankingsTable = () => {
  const [rankings, setRankings] = useState([])

  useEffect(() => {
    const fetchRankings = async () => {
      fetch('https://rankingtrivianight.onrender.com')
      .then(response => {
        response.json().then(data => setRankings(data))
      })
    }

    fetchRankings();
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {rankings.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RankingsTable;
