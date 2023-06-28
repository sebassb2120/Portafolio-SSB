import "./Textimonios.css";

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



export function Testimonios() {
  let testimonios = [
    {
      id: "1",
      imagClie:
        "https://firebasestorage.googleapis.com/v0/b/musicssb-c8514.appspot.com/o/girl1.jpg?alt=media&token=1b46650b-6906-47db-b06e-d5fe434c4ec5",
      nomClien: "Luisa",
      TesClien:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ratione odit, sequi magni id nulla repellat ex, quod quia soluta autem eos error provident quidem in quasi aspernatur eum mollitia.",
    },
    {
      id: "2",
      imagClie:
        "https://firebasestorage.googleapis.com/v0/b/musicssb-c8514.appspot.com/o/girl1.jpg?alt=media&token=1b46650b-6906-47db-b06e-d5fe434c4ec5",
      nomClien: "Luisa",
      TesClien:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ratione odit, sequi magni id nulla repellat ex, quod quia soluta autem eos error provident quidem in quasi aspernatur eum mollitia.",
    },
    {
      id: "3",
      imagClie:
        "https://firebasestorage.googleapis.com/v0/b/musicssb-c8514.appspot.com/o/girl1.jpg?alt=media&token=1b46650b-6906-47db-b06e-d5fe434c4ec5",
      nomClien: "Luisa",
      TesClien:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ratione odit, sequi magni id nulla repellat ex, quod quia soluta autem eos error provident quidem in quasi aspernatur eum mollitia.",
    },
    {
      id: "4",
      imagClie:
        "https://firebasestorage.googleapis.com/v0/b/musicssb-c8514.appspot.com/o/girl1.jpg?alt=media&token=1b46650b-6906-47db-b06e-d5fe434c4ec5",
      nomClien: "Luisa",
      TesClien:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ratione odit, sequi magni id nulla repellat ex, quod quia soluta autem eos error provident quidem in quasi aspernatur eum mollitia.",
    },
  ];

  return (
    <>
      <section id="testimonio">
        <h5>Review from Clients</h5>
        <h2>Testimonials</h2>
      </section>

      <Swiper className="container testimolials_container">
            {
                testimonios.map(function (testimonio) {
                    return (
                        <SwiperSlide className="testimonials">
                            <div className="client_avatar">
                                <img src={testimonio.imagClie} alt="" />
                            </div>
                            <h5 className="client_name">{testimonio.nomClien}</h5>
                            <small className="client_review">{testimonio.TesClien}</small>
                        </SwiperSlide>
                    );
                })
            }
      </Swiper>
    </>
  );
}
