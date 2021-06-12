import React from 'react';

export interface TestProps {
  text?: string,
};

export const Test: React.FC<TestProps> = ({
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

