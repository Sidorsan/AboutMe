import React from 'react';

function PortfolioItem( props ) {
  const handleCardClick = () => {
    props.onCardClick(props.work);
  };
  return (
    <li href={props.work.link} className='portfolio__item'>
      <img
        className='portfolio__item_screenshots'
        src={props.work.screenshot}
        alt={props.work.title}
        onClick={handleCardClick}
      />
      <div className='portfolio__item_title'>{props.work.title}</div>
    </li>
  );
}

export default PortfolioItem;