import React from 'react'

const Gallery1 = () => {
  return (
    <>
      <div className="gallery-wrap">
        <div className="gallery gallery--row" id="gallery-1">
          <div className="gallery__item gallery__item--s" style={{ backgroundImage: 'url(../public/dumiendu/look01/01.jpg)' }}></div>
          <div className="gallery__item gallery__item--m" style={{ backgroundImage: 'url(../public/dumiendu/look01/02.jpg)' }}></div>
          <div className="gallery__item gallery__item--l" style={{ backgroundImage: 'url(../public/dumiendu/look01/03.jpg)' }}></div>
          <div className="gallery__item gallery__item--xl gallery__item--center" style={{ backgroundImage: 'url(../public/dumiendu/look01/06.jpg)' }}></div>
          <div className="gallery__item gallery__item--l" style={{ backgroundImage: 'url(../public/dumiendu/look02/01.jpg)' }}></div>
          <div className="gallery__item gallery__item--m" style={{ backgroundImage: 'url(../public/dumiendu/look02/02.jpg)' }}></div>
          <div className="gallery__item gallery__item--s" style={{ backgroundImage: 'url(../public/dumiendu/look02/03.jpg)' }}></div>
          <div className="caption">
            Within this meticulously arranged AI-generated ensemble lies a tantalizing facade, captivating our gaze. Yet, as we search for the soul of human expression, we question whether algorithms can truly embody the essence of authentic art.
          </div>
        </div>
      </div>
      <section className="project project--details project--left">
        <span className="project__label project__label--default">Ethical Considerations</span>
        <p>The emergence of AI-generated art raises ethical questions and concerns. One of the key challenges is navigating the boundaries of authorship and ownership. Determining the role of AI algorithms and their creators in the artistic process, as well as addressing issues of attribution and intellectual property, requires careful deliberation. Additionally, ensuring that AI-generated art does not perpetuate bias, discrimination, or harmful content is crucial for fostering a responsible and inclusive artistic landscape.</p>
      </section></>
  )
}

export default Gallery1