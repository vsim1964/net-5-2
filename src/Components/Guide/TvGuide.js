import React from 'react';
import Broadcasts from './Broadcasts';

const TvGuide = () => {
  return (
      <>
        <h3>Эфир</h3>
        <div>
          <Broadcasts>
            {
              (broadcasts) => {
                return (
                    <dl>
                      {broadcasts.map((hit) => (
                          <div>
                            <dt key={broadcasts.id}> {broadcasts.name} </dt>
                            <dd> {broadcasts.anons} </dd>
                          </div>
                      ))}
                    </dl>
                );
              }
            }
          </Broadcasts>
        </div>
      </>
  );
};

export default TvGuide;
