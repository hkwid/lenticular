import React from 'react';
import { useMotion } from 'react-use';

const Index = () => {
  const state = useMotion();
  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <div
        style={{
          width: '10px',
          height: '10px',
          background: state.rotationRate.beta > 30 ? 'red' : 'black'
        }}
      />
    </div>
  );
};
export default Index;
