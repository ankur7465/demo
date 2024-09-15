import React from 'react';

// The List component
export default function List() {
  const numbers = [1, 2, 3, 4, 5];

  const updatedNums = numbers.map((number, index) => (
    <li key={index}>{number}</li>
  ));

  return (
    <div>
      <ul>
        {updatedNums}
      </ul>
    </div>
  );
}
