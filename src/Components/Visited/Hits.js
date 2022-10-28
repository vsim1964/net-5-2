import React from 'react';

const Titles = (props) => {
  const hits = [
    {id: 1, name: 'Name-1', title: 'Title-1'},
    {id: 2, name: 'Name-2', title: 'Title-2'},
    {id: 3, name: 'Name-3', title: 'Title-3'},
  ];
  return (
      <>
        <div>{props.children(hits)}</div>
      </>
  );
};

export default Titles;
