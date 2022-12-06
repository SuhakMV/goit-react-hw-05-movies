import PropTypes from 'prop-types';
import './Button.styles.css';

export default function Button(props) {
  return (
    <button className="Button" type="button" onClick={props.onClick}>
      Load more
    </button>
  );
}

Button.protoType = {
  onClick: PropTypes.func,
};
