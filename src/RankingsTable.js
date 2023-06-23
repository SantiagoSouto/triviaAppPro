import React, {useState, useEffect} from 'react';

const RankingsTable = () => {
  const [rankings, setRankings] = useState([])

  useEffect(() => {
    const fetchRankings = async () => {
      const response = await fetch('https://rankingtrivianight.onrender.com');
      const data = await response.json();
      setRankings(data);
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
