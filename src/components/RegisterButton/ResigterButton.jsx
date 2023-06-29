import PropTypes from 'prop-types';

export function RegisterButton({ children, type, disabled, ...restProps }) {
  return (
    <button type={type} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
}
// Props

RegisterButton.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
  children: PropTypes.string,
};
