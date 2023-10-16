import React from "react";
import Card from "./Card";

const Listitem = ({ data, category, sortOrder }) => {
  let filter = data
  if (category !== 'all') {
    filter = data.filter((item) => item.categorie === category)
  }

  filter.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else if (sortOrder === 'desc') {
      return b.price - a.price;
    }
  });

  const allItem = filter.map((item, index) => {
    return (
      <div key={index}>
        <Card id={item.id} name={item.name} price={item.price} img={item.img} categorie={item.categorie} />
      </div>

    );
  });
  return (
    <div className='allItem'>
      {allItem}
    </div>
  );



};

export default Listitem