    import React , {useState} from 'react';
    import{ Swiper , SwiperSlide } from 'swiper/react';

    import 'swiper/css';
    import 'swiper/css/effect-coverflow';
    import 'swiper/css/navigation';

    import "./gameSwiper.css";
    
    import { EffectCoverflow , Navigation , Autoplay} from 'swiper/modules';

    function GameSwiper({games}) {
        const[active,setActive] = useState(false);

        const handleToggleVideo =()=>{
            setActive(!active);
        }

        return (
            <Swiper 
                effect={'coverflow'}
                grabCursor={true}
                navigation={true}
                loop={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate:35,
                    stretch:200,
                    depth:250,
                    modifier:1,
                    slideShadows:true,
                }}
                // autoplay={{
                //     delay:2500,
                //     disableOnInteraction:false,
                // }}
                modules={[EffectCoverflow , Navigation , Autoplay]}
                className='gameSwiper'
            >
                {
                    games.map(game=>(
                        <SwiperSlide key={game._id}>
                            <div className="gameSlider">
                                <img src={game.img} alt="Game Img" />
                                <div className="content">
                                    <h2>{game.title}</h2>
                                    <p>{game.description}</p>
                                    <div className="buttons">
                                        <a href="#" className="orderBtn">Order Now</a>
                                        <a href="#" className={`playBtn ${active ? 'active' : undefined}`} onClick={handleToggleVideo}>
                                            <span className='pause'>
                                                <i className="bi bi-pause-fill"></i>
                                            </span>
                                            <span className="play" onClick={handleToggleVideo}>
                                                <i className="bi bi-play-fill"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        )
    }

    export default GameSwiper
