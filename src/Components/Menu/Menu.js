import React from 'react';
const rubrics = [{id: 1, name: 'Видео'}, {id: 2, name: 'Карптинки'}, {id: 3, name: 'Маркет'}];

const Menu = () => {
  return (
      <ul>
        {
          rubrics.map((rubric) => (
              <li key={rubric.id}>{rubric.name}</li>
          ))
        }
      </ul>
  );
};

export default Menu;
