import React from 'react';
import styled from 'styled-components';

const Titles = (props) => {
  const titles = [
    {id: 1, name: 'A'},
    {id: 2, name: 'B'},
    {id: 3, name: 'C'},
    {id: 4, name: 'D'},
    {id: 5, name: 'E'},
  ];
  return (
      <>
        <div>{props.children(titles)}</div>
      </>
  );
};

export default Titles;
