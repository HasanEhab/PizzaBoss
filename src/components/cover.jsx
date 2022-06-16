import React from 'react'
import cover1 from "../assets/cover_1.png"
import cover2 from "../assets/cover_2.jpg"
import cover3 from "../assets/cover_3.jpg"
import "../css/cover.css"

function Cover() {
  return (
        <div  id='carouselExampleIndicators' className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="dot active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="dot"aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="dot"aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={cover1} className="d-block w-100 cover" alt="..."/>
                    <div className='carousel-item__desc'>
                        <p className='m-0'>delicious</p>
                        <p className='mb-lg-3 mb-2'>pizza <span className='text-warning'>!!</span></p>
                        <p  className='text-warning'>get it while it's hot</p>
                    </div>
                </div>
                <div className="carousel-item">
                <img src={cover2} className="d-block w-100" alt="..."/>
                    <div className='carousel-item__desc'>
                        <p className='mt-2 mt-lg-4'>Pizza should be the <br/>world’s currency.</p>
                    </div>
                </div>
                <div className="carousel-item">
                <img src={cover3} className="d-block w-100" alt="..."/>
                    <div className='carousel-item__desc'>
                        <p className='mt-2 mt-lg-4 '>whatever the question,<br/>pizza is the answer</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Cover