import React from 'react'

const Gallery4 = () => {
    return (
            <div className="gallery-wrap gallery-wrap--dense">
            <div className="gallery gallery--stack gallery--stack-inverse gallery--stack-dark" id="gallery-4">
                <div className="gallery__item" style={{ backgroundImage: 'url(/look01/01.jpg)' }}></div>
                <div className="gallery__item" style={{ backgroundImage: 'url(/look01/02.jpg)' }}></div>
                <div className="gallery__item" style={{ backgroundImage: 'url(/look01/03.jpg)' }}></div>
                <div className="gallery__item" style={{ backgroundImage: 'url(/look01/04.jpg)' }}></div>
                <div className="gallery__item" style={{ backgroundImage: 'url(/look01/05.jpg)' }}></div>
                <div className="gallery__item" style={{ backgroundImage: 'url(/look01/06.jpg)' }}></div>
                <div className="caption">
                    <p>AI-generated art captivates with varied creations, sometimes senseless, yet impressively enigmatic.</p>
                </div>
            </div>
        </div>
    )
}

export default Gallery4