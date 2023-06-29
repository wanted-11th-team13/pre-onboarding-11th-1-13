// ** React.memo **
// 해당 프로퍼티가 변경된 경우에만 다시 랜더링된다.

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, label, type, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      data-testid={`${label}-button`}
      type={type}
    >
      {title}
    </button>
  );
};

export default React.memo(Button);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
