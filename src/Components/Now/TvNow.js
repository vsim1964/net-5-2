import React from 'react';
import NowBroadcasts from './NowBroadcasts';

const TvNow = () => {
  return (
      <>
        <h3>Эфир</h3>
        <div>
          <NowBroadcasts>
            {
              (nowBroadcasts) => {
                return (
                    <dl>
                      { nowBroadcasts.map((hit) => (
                          <div>
                            <dt key={nowBroadcasts.id}> {nowBroadcasts.name} </dt>
                            <dd> {nowBroadcasts.anons} </dd>
                          </div>
                      ))}
                    </dl>
                )}
            }
          </NowBroadcasts>
        </div>
      </>
  );
};

export default TvNow;
