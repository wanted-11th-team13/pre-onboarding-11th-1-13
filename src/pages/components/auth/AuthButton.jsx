// ** React.memo **
// 해당 프로퍼티가 변경된 경우에만 다시 랜더링된다.

import React from 'react';
import PropTypes from 'prop-types';

const AuthButton = ({ disabled, buttonText }) => {
  return (
    <button
      disabled={disabled}
      data-testid={`${buttonText}-button`}
      type="submit"
    >
      {buttonText}
    </button>
  );
};

export default React.memo(AuthButton);

AuthButton.propTypes = {
  disabled: PropTypes.bool,
  buttonText: PropTypes.string,
};
