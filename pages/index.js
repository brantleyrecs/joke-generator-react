// import { Button } from 'bootstrap';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import getJoke from '../api/jokeData';
import JokeGenerator from '../components/jokeButtons';

function Home() {
  const [btn, setBtn] = useState('Get Joke');
  const [joke, setJoke] = useState({});

  const setButton = (text) => {
    setBtn(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });

      setButton('Get Punchline');
    });
  };

  return (
    <>
      <JokeGenerator joke={joke} btn={btn} />
      {
        btn === 'Get Joke' || btn === 'Get A New Joke'
          ? <Button type="button" onClick={getAJoke}>{btn}</Button>
          : <Button type="button" onClick={() => setButton('Get A New Joke')}>{btn}</Button>
      }
    </>
  );
}

export default Home;
