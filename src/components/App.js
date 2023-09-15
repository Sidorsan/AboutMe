import React from 'react';
import Main from "./Main";
import Header from './Header';
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";


function App() {
  const [selectedCard, setSelectedCard] = React.useState(null);
  function closeAllPopups() {
    setSelectedCard(null);
  }

  return (
    <div className='page'>
      <Header brand='Александр Сидоренко'></Header>
      <Main
        onCardClick={setSelectedCard}
      />
      <Footer />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>

  );
}


export default App;