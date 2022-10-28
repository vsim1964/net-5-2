import React from 'react';

const Search = (props) => {
  return (
      <form>
        <label htmlFor="">Найдется всё. Нпапример, {props.example}</label>
        <input type="search"/>
        <input type="submit" value="Найти"/>
      </form>
  );
};

export default Search;
