    import React from 'react';
    import{ SwiperSlide } from 'swiper/react';

    import 'swiper/css';
    import 'swiper/css/effect-coverflow';
    import 'swiper/css/navigation';

    function GameSlide({game , active , toggleVideo}) {
    return (
        <div className="gameSlider">
            <img src={game.img} alt="Game Img" />
            <div className={`video ${active ? 'active' : undefined}`}>
                <iframe 
                    width="1280"
                    height="720"
                    src={game.trailer}
                    title={game.title}
                    allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
                    allowFullScreen
                ></iframe>
            </div>
            <div className="content">
                <h2>{game.title}</h2>
                <p>{game.description}</p>
                <div className="buttons">
                    <a href="#" className="orderBtn">Order Now</a>
                    <a href="#" className={`playBtn ${active ? 'active' : undefined}`} onClick={toggleVideo}>
                        <span className='pause'>
                            <i className="bi bi-pause-fill"></i>
                        </span>
                        <span className="play" onClick={toggleVideo}>
                            <i className="bi bi-play-fill"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>

    )
    }

    export default GameSlide
