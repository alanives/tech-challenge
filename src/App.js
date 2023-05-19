import { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';

import BaseLayout from './components/BaseLayout';

const ENDPOINT = `http://${window.location.hostname}:3003`;

const App = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const socketIo = useRef(null);

  useEffect(() => {
    // Data fetching calls
    socketIo.current = io(ENDPOINT);
    socketIo.current.connect();

    socketIo.current.on('market-data', (response) => {
      console.log({ response });
      setData((current) => [...current, response]);
    });

    socketIo.current.on('client-connected', (response) =>
      setUser(response),
    );

    return () => {
      socketIo.current.disconnect();
    };
  }, []);

  // Pass down data to child component
  return <BaseLayout user={user} data={data} />;
};

export default App;
