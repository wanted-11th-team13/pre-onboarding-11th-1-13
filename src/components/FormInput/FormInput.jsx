import PropTypes from 'prop-types';

export function FormInput({ type, name, ...restProps }) {
  return <input type={type} name={name} {...restProps} />;
}

// typeCheck
FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
};
