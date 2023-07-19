import { useState } from 'react';

const GusetList: React.FC = () => {
  const [name, setName] = useState('');
  // we need to tell ts what values is going to be inside that array
  const [guests, setGusets] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGusets([...guests, name]);
  };

  return (
    <div>
      <h3>Guset List</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GusetList;
