// 1. PINTAR un LISTADO 
// 2. AÑADIR NUEVA FRASE 

import '../styles/App.scss';
import quoteList from '../data/quote.json';
import { useState } from 'react';


function App() {
  
  //VARIABLES DE ESTADO 
  const [data, setData] = useState(quoteList);

  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <h1 className="header__title">Frases de Friends</h1>
        <form>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar listado frases"
            //onChange={handleSearch}
            //value={search}
          />
        </form>
      </header>
      <main>

      </main>
      {/* quote list */}
      <ul className="quote__list">{htmlData}</ul>

    </div>
  );
  
}


export default App;
