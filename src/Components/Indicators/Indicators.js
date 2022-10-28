import React from 'react';

const Indicators = ({usd, eur, pet}) => {
  return (
      <>
        <p>USD MOEX {usd.now} {usd.diff}</p>
        <p>EUR MOEX {eur.now} {eur.diff}</p>
        <p>Нефть {pet.now} {pet.diff}</p>
      </>
  );
};

export default Indicators;
