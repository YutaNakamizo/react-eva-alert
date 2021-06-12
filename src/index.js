import React from 'react';

export const Test = ({
  text,
  ...props
}) => {
  return (
    <div
      {...props}
    >
      {text || 'No text was passed.'}
    </div>
  );
};

