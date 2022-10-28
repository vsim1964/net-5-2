import React from 'react';

const Weather = ({src, tNow, tMorning, tDay}) => {
  return (
      <>
        <h3>Погода</h3>
        <img src={src} alt="Осадки"/>
        <p>{tNow}</p>
        <p>{tMorning}</p>
        <p>{tDay}</p>

      </>
  );
};

export default Weather;
