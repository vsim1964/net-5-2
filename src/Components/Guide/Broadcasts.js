import React from 'react';

const Broadcasts = (props) => {
  const  broadcasts= [
    {id: 1, name: 'Name-1', anons: 'Anons-1'},
    {id: 2, name: 'Name-2', anons: 'Anons-2'},
    {id: 3, name: 'Name-3', anons: 'Anons-3'},
  ];
  return (
      <>
        <div>{props.children(broadcasts)}</div>
      </>
  );
};

export default Broadcasts;
