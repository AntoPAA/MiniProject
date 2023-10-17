import { useState } from 'react'
import './App.css'
import Listitem from './components/listItem'
import Section from './components/Section';
import Sec from './components/Sec';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Aboutus from './components/aboutUs';

function App() {
  const [category, setcategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSortbas = () => {
    setSortOrder('asc');
  };

  const handleSorthaut = () => {
    setSortOrder('desc');
  };


  return (
    <div>
      <Navbar />
      <Section />
      <Sec />
      <div className="button-category">
        <button className="button-all" onClick={() => setcategory('all')}>all</button>
        <button className="button-spooky" onClick={() => setcategory('spooky')}>spooky</button>
        <button className="button-funny" onClick={() => setcategory('funny')}>funny</button>
        <button className="button-creative" onClick={() => setcategory('creative')}>creative</button>
        <button className="button-creative" onClick={() => setcategory('Terrifiant')}>Terrifiant</button>
        <button className="button-asc" onClick={handleSortbas}>⬇️💰</button>
        <button className="button-desc" onClick={handleSorthaut}>⬆️💰</button>
      </div>

      <Listitem data={data} category={category} sortOrder={sortOrder} />
      <Aboutus />
      <Footer />
    </div>
  )
}

export default App

const data = [

  {
    id: 1,
    name: "Papa Kim",
    tryit: "Is recommended",
    price: 15,
    categorie: 'funny',
    img: 'https://i.ebayimg.com/images/g/YdkAAOSwbw1aBy31/s-l1200.jpg',

  },
  {
    id: 2,
    name: "Scream",
    tryit: "Is recommended",
    price: 25,
    categorie: 'spooky',
    img: 'https://cdn.deguisetoi.fr/images/rep_art/moy_v5/257/7/257704/deguisement-scream-homme_257704.jpg',
  },
  {
    id: 3,
    name: "Pastis Man 1 pastis offert avec",
    tryit: "Is recommended",
    price: 30,
    categorie: 'funny',
    img: 'https://cdn.deguisetoi.fr/images/rep_art/gra/318/5/318549/deguisement-super-pastis-man_318549_1.jpg',
  },
  {
    id: 4,
    name: "medecin zombie",
    tryit: "Is recommended",
    price: 26.5,
    categorie: 'spooky',
    img: 'https://cdn.deguisetoi.fr/images/rep_art/gra/223/2/223291/deguisement-zombie-docteur-enfant-halloween_223291.jpg',
  },
  {
    id: 5,
    name: "Pikachu",
    tryit: "Is recommended",
    price: 50,
    categorie: 'creative',
    img: 'https://www.costumepartyworld.com/media/catalog/product/cache/4/image/363x/040ec09b1e35df139433887a97daa66f/g/i/giant-pikachu.jpg',
  },
  {
    id: 6,
    name: "FUIS LOIN",
    tryit: "Is recommended",
    price: 45,
    categorie: 'creative',
    img: 'https://spencers.scene7.com/is/image/Spencers/01600428-a?$Detail$',
  },
  {
    id: 7,
    name: "PHP",
    tryit: "Is recommended",
    price: 850,
    categorie: 'Terrifiant',
    img: 'https://m.media-amazon.com/images/I/91IM87eeuCL._AC_CLa%7C2140%2C2000%7C619F8fH03WL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY1000_.png',
  },
  {
    id: 8,
    name: "Alien",
    tryit: "Is recommended",
    price: 30,
    categorie: 'funny',
    img: 'https://beauf-attitude.com/cdn/shop/products/CostumeDroleHomme_2_1024x.jpg?v=1696794872',
  },
  {
    id: 9,
    name: "Julien Cauchemar",
    tryit: "Is recommended",
    price: 900,
    categorie: 'Terrifiant',
    img: 'https://m.media-amazon.com/images/I/51-fJGTSsmL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 10,
    name: "Harley Quin",
    tryit: "Is recommended",
    price: 24,
    categorie: 'spooky',
    img: 'https://static.alipson.fr/m176/p453176/p1_FULL.jpg',

  },
  {
    id: 11,
    name: "Michael Myers",
    tryit: "Is recommended",
    price: 20,
    categorie: 'spooky',
    img: 'https://i.mmo.cm/is/image/mmoimg/mw-product-max/costume-dhalloween-michael-myers-2018--mw-140006-1.jpg',

  },
  {
    id: 12,
    name: "IT",
    tryit: "Is recommended",
    price: 22,
    categorie: 'spooky',
    img: 'https://cdn.deguisetoi.fr/images/rep_art/gra/317/8/317849/deguisement-grand-heritage-ca-adulte_317849.jpg',

  },
  {
    id: 13,
    name: "Freddy",
    tryit: "Is recommended",
    price: 25,
    categorie: 'spooky',
    img: 'https://m.media-amazon.com/images/I/51j8wCd5F8L._AC_UF894,1000_QL80_.jpg',

  },
  {
    id: 14,
    name: "Let Him Cook",
    tryit: "Is recommended",
    price: 35,
    categorie: 'funny',
    img: 'https://themoviesjackets.com/wp-content/uploads/2023/07/Breaking-Bad-Walter-White-Halloween-Costumes.jpg',

  },
  {
    id: 15,
    name: "Frankenstein",
    tryit: "Is recommended",
    price: 10,
    categorie: 'spooky',
    img: 'https://spirit.scene7.com/is/image/Spirit/01667476-a?$fullsize1200$',

  },
  {
    id: 16,
    name: "Jack Skellington",
    tryit: "Is recommended",
    price: 30,
    categorie: 'spooky',
    img: 'https://www.morphsuits.fr/media/catalog/product/6/1/61_1eobnlpl._ac_ul1500_.jpg?width=810&height=810&store=morphsuitsfr_storeview&image-type=image',

  },
  {
    id: 17,
    name: "American Nightmare",
    tryit: "Is recommended",
    price: 20,
    categorie: 'spooky',
    img: 'https://www.happyfete.com/images/tres-grand/m/a/n/Masque-american-nightmare-led.jpg',

  },
  {
    id: 18,
    name: "Clown",
    tryit: "Is recommended",
    price: 17.5,
    categorie: 'spooky',
    img: 'https://www.morphsuits.fr/media/catalog/product/m/c/mckchr-horror-clown-kids-02.jpg?width=810&height=810&store=morphsuitsfr_storeview&image-type=image',

  },
  {
    id: 19,
    name: "git push --force",
    tryit: "Is recommended",
    price: 8500,
    categorie: 'Terrifiant',
    img: 'https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C61fCSG-a80L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY1000_.png',

  },
  {
    id: 20,
    name: "il te bat ",
    tryit: "Is recommended",
    price: 37,
    categorie: 'funny',
    img: 'https://www.cdiscount.com/pdt2/7/1/4/1/350x350/mp44752714/rw/1pc-sumo-costume-adulte-fantaisie-drole-de-lutte-p.jpg',

  },
  {
    id: 21,
    name: "mon dieu",
    tryit: "Is recommended",
    price: 28,
    categorie: 'creative',
    img: 'https://www.themovieshop.com/ProductImage.ashx?img=29119&size=large',

  },
  {
    id: 22,
    name: "j'ai peur",
    tryit: "Is recommended",
    price: 85000,
    categorie: 'Terrifiant',
    img: 'https://media.s-bol.com/qX1WAX4ljBVr/lr7q4l/911x1200.jpg',

  },
  {
    id: 23,
    name: "vraiment effrayant",
    tryit: "Is recommended",
    price: 85000000,
    categorie: 'Terrifiant',
    img: 'https://m.media-amazon.com/images/I/71tQpV+6fWL._AC_UF1000,1000_QL80_.jpg',

  },
  {
    id: 24,
    name: "Faucheuse",
    tryit: "Is recommended",
    price: 22,
    categorie: 'spooky',
    img: 'https://www.ballons-a-gogo.com/images/cache/1125x1125/6620/deguisement-de-la-mort-homme-325828.jpg',

  },
];