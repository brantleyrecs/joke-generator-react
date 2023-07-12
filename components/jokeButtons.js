import PropTypes from 'prop-types';

export default function JokeGenerator({ joke, btn }) {
  return (
    <>
      <h3>{ joke.setup }</h3>
      <br />
      <h5>{ btn !== 'Get Punchline' ? joke.punchline : ''}</h5>
      <br />
    </>
  );
}

JokeGenerator.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }),
  btn: PropTypes.string,
};

JokeGenerator.defaultProps = {
  joke: '',
  btn: '',
};
