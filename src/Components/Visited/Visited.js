import React from 'react';
import Hits from './Hits';

const Visited = () => {
  return (
      <>
        <h3>Посещаемое</h3>
        <div>
          <Hits>
            {
              (hits) => {
                return (
                    <dl>
                      { hits.map((hit) => (
                          <div>
                            <dt key={hit.id}> {hit.name} </dt>
                            <dd> {hit.title} </dd>
                          </div>
                      ))}
                    </dl>
                )}
            }
          </Hits>
        </div>
      </>
  );
};

export default Visited;
