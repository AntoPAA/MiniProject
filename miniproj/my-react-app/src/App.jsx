import { useState } from 'react'
import './App.css'
import Listitem from './components/listItem'

function App() {
  const [category, setcategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSortAscending = () => {
    setSortOrder('asc');
  };

  const handleSortDescending = () => {
    setSortOrder('desc');
  };


  return (
    <div>
      <div className="button-category">
        <button className="button-all" onClick={() => setcategory('all')}>all</button>
        <button className="button-spooky" onClick={() => setcategory('spooky')}>spooky</button>
        <button className="button-funny" onClick={() => setcategory('funny')}>funny</button>
        <button className="button-creative" onClick={() => setcategory('creative')}>creative</button>
        <button className="button-asc" onClick={handleSortAscending}>⬇️💰</button>
        <button className="button-desc" onClick={handleSortDescending}>⬆️💰</button>
      </div>
      <Listitem data={data} category={category} sortOrder={sortOrder} />
    </div>
  )
}

export default App

const data = [

  {
    id: 1,
    name: "Jake Blake",
    tryit: "Is recommended",
    price: 85,
    categorie: 'funny',
    img: 'https://www.events-tour.com/medias/images/costume-halloween-adulte-homme-diable-taille-l-xl.jpg',

  },
  {
    id: 2,
    name: "Trisha Collins",
    tryit: "Is recommended",
    price: 75,
    categorie: 'spooky',
    img: 'https://www.tralala-fetes.fr/3255-large_default/deguisement-faucheuse-femme-halloween.jpg',
  },
  {
    id: 3,
    name: "Steve Stivenson",
    tryit: "Is recommended",
    price: 105,
    categorie: 'funny',
    img: 'https://www.izdeguiz.com/17231-large_default/deguisement-psychopathe-halloween-garcon.jpg',
  },
  {
    id: 4,
    name: "Mike Michaels",
    tryit: "Is recommended",
    price: 135,
    categorie: 'spooky',
    img: 'https://fr.shopping.rakuten.com/photo/1921644734_L.jpg',
  },
  {
    id: 5,
    name: "Denis Young",
    tryit: "Is recommended",
    price: 65,
    categorie: 'creative',
    img: 'https://www.festi.fr/media/catalog/product/cache/1/image/720x/9df78eab33525d08d6e5fb8d27136e95/deguisement-zombie-chemise-avec-relief-halloween-garçon_DEGUIAMSG15Gris_1.jpg',
  },
  {
    id: 6,
    name: "Chris Michaels",
    tryit: "Is recommended",
    price: 85,
    categorie: 'creative',
    img: 'https://www.tralala-deguisement.fr/677-large_default/deguisement-zombie-policier-homme-halloween.jpg',
  },
];