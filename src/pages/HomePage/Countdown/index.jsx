import React, { useEffect, useState } from "react";
import "./Countdown.css";

import countdown from "../../../assets/image/countdown.png";

const Countdown = () => {
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    useEffect(() => {
        let countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

        // Get today's date and time
        let now = new Date().getTime();

        let interval = setInterval(function () {
            // Get today's date and time
            let now = new Date().getTime();

            // Find the distance between now and the count down date
            let distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            let minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setDays(days);
            setHours(`0${hours}`.slice(-2));
            setMinutes(`0${minutes}`.slice(-2));
            setSeconds(`0${seconds}`.slice(-2))

            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <section className="countdown">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="countdown-content">
                            <h3>
                                ƯU ĐÃI GIẢM GIÁ ĐẶC BIỆT CHO CÁC MẶT HÀNG RAU
                            </h3>
                            <p>
                                Cơm không ăn gạo vẫn còn đó. Nhưng thấy ưu đãi
                                mà không ngó thì khó lòng ngủ yên!
                            </p>
                            <div className="countdown-clock">
                                <span className="countdown-time">
                                    <span>{days}</span>
                                    <small>Ngày</small>
                                </span>
                                <span className="countdown-time">
                                    <span>{hours}</span>
                                    <small>Giờ</small>
                                </span>
                                <span className="countdown-time">
                                    <span>{minutes}</span>
                                    <small>Phút</small>
                                </span>
                                <span className="countdown-time">
                                    <span>{seconds}</span>
                                    <small>Giây</small>
                                </span>
                            </div>
                            <div className="countdown-btn">
                                <a
                                    className="btn btn-inline"
                                    href="./page/shop.html"
                                >
                                    <i className="fa-solid fa-basket-shopping"></i>
                                    <span>MUA NGAY</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                        <div className="countdown-image">
                            <img src={countdown} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Countdown;
