// 1. PINTAR un LISTADO 
// 2. AÑADIR NUEVA FRASE 

import '../styles/App.scss';
import quoteList from '../data/quote.json';
import { useState } from 'react';


function App() {
  
  //VARIABLES DE ESTADO 
  const [data, setData] = useState(quoteList);

  // he aquí el return de la funcion app (lo que renderiza)
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
        {/* quote list */}
        <ul className="quote__list">{htmlData}</ul>

        {/* new quote */}
        <form className="new-quote__form">
          <h2 className="new-quote__title">Añadir una nueva frase</h2>
          <input
            className="new-quote__input"
            type="text"
            name="quote"
            id="quote"
            placeholder="Frase"
            //onChange={handleNewContact}
            //value={newContact.name}
          />
          <input
            className="new-character__input"
            type="text"
            name="character"
            id="character"
            placeholder="Personaje"
            //onChange={handleNewContact}
            //value={newContact.name}
          />
          <input
            className="new-quote__btn"
            type="submit"
            value="Añadir nueva frase"
            //onClick={handleClick}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
