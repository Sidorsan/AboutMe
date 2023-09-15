import React from 'react';
import foto from './foto';

import About from './About';
import PortfolioItem from './PortfolioItem';
import ContactForm from './ContactForm';


function Main({
  onCardClick,
}) {
  const [state, setState] = React.useState(true);

  function openForm() {
    setState(false);
  }
  function closeForm() {
    setState(true);
  }
  return (

    <main className='main'>
      <About title='React-разработчик'>
        <p>
          Разрабатываю на самом крутом в мире фреймворке
          <br />
          самые крутые в мире SPA!
        </p>
        <p>С удовольствием и вам что-нибудь разработаю ;)</p>
      </About>

      <section className='portfolio'>
        <ul className='portfolio__container'>
          {foto.map((work) => (
            <PortfolioItem key={work.id} work={work} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
      <section className='story'>
        <h1 className='story__title'>Моя история любви к&nbsp;программированию</h1>
        <p className='story__description'>&nbsp;&nbsp;&nbsp;&nbsp;Мой интерес к&nbsp;программированию появился, когда я&nbsp;начал задумываться о&nbsp;том, чем&nbsp;бы я&nbsp;хотел заниматься в&nbsp;этой жизни и&nbsp;что мне действительно интересно. Я&nbsp;работал на&nbsp;заводе в&nbsp;графике 5/2. Некогда было подумать о&nbsp;том, что хочется, жил как запрограммированный зомби. Но&nbsp;однажды ко&nbsp;мне пришла мысль что в&nbsp;жизни пора <nobr>что-то</nobr> менять. Я&nbsp;начал думать, искать свое предназначение и&nbsp;однажды меня озарило&nbsp;&mdash; &laquo;учи программирование&raquo;. Вот с&nbsp;того момента я&nbsp;медленно, но, верно, продвигаюсь к&nbsp;своей цели. Цель моя это выйти на&nbsp;фриланс с&nbsp;доходом 50&nbsp;000&nbsp;руб. в&nbsp;месяц с&nbsp;загруженностью 4 часа в&nbsp;день.</p>
      </section>
      <section className='test'>
        <iframe src="https://vk.com/video_ext.php?oid=12290040&id=456239018" width="100%" height="240" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameBorder="0" allowFullScreen></iframe>
        <ul className='test__answers'>
          <li className='test__item'>
            <a className='test__item_link' href='https://github.com/Sidorsan/AboutMe' target='_blank' rel="noreferrer">
              &bull; Ссылка на публичный репозиторий с исходниками этого приложения
            </a>
          </li>
          <li className='test__item'>
            <a className='test__item_link' href='https://docs.google.com/document/d/1gA1Iu_efXolDNkvLqt8tTh2AYWOJcww6qMFbsC_LY28/edit?usp=sharing' target='_blank' rel="noreferrer">
              &bull; Ссылка на ответы ко 2-му заданию
            </a>
          </li>
        </ul>

      </section>

      <section className='contacts'>
        {state ? (
          <button
            className='button'
            onClick={() => openForm()}
          >
            Напишите мне
          </button>
        ) : (
          <div>
            <hr />
            <ContactForm
              onSubmit={() => closeForm()}
            />
          </div>
        )}
      </section>
    </main>


  );
}



export default Main;