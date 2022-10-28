import React from 'react';
import Titles from './Titles';
import HeaderNews from './HeaderNews';

const News = () => {
  return (
      <>
        <HeaderNews/>

        <div>
          <Titles>
            {
              (titles) => {
                return (
                    <ul>
                      { titles.map((title) => <li key={title.id}> {title.name} </li>) }
                    </ul>
                )}
            }
          </Titles>
        </div>

      </>
  );
};

export default News;
