import React from 'react';


function About(props) {
  return (
    <section className='about'>
      <div className='about__bg'></div>
      <div className='about__container'>
        <h1 className='about__title'>{props.title}</h1>
        <div className='about__description'>{props.children}</div>
      </div>
    </section>
  );
}

export default About;