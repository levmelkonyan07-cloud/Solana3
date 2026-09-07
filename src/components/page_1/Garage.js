import React from 'react';
import A1 from './A1';
import A2 from './A2';
import A3 from './A3';
import A4 from './A4';
import A5 from './A5';
import A6 from './A6';

export default function Garage() {
  return (
    <div className="garage">
      <A1 />
      <div className="photo">
        <A2 />
        <A3 />
      </div>
      <A4 />
      <A5 />
      <A6 />
    </div>
  )
}
