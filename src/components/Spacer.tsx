import React from 'react';
import "../index.css";

export interface SpacerProps {
  size?: number | string;
  axis?: 'horizontal' | 'vertical';
  grow?: boolean;
}

const Spacer: React.FC<SpacerProps> = ({ size = 1, axis = 'vertical', grow = false }) => {
  const width = axis === 'horizontal' ? size : 0;
  const height = axis === 'vertical' ? size : 0;

  return (
    <div
      style={{
        width: typeof width === 'number' ? `${width * 0.25}rem` : width,
        height: typeof height === 'number' ? `${height * 0.25}rem` : height,
        flexGrow: grow ? 1 : 0,
        flexShrink: 0,
      }}
    />
  );
};

export default Spacer;