import React from "react";
import styles from "./openHours.module.scss";
import Image from "next/image";
import Button from "../lib/button/Button";

function OpenHours() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div>
          <Image width={2000} height={1200} src={"/background-fixed.jpg"} />
        </div>
        <div>
          <div className={styles.text}>
            <h5 className="tags">Working Hour</h5>
            <h2 className="block_title">Indulge Your Nails</h2>
            <ul>
              <li>
                <div className="day">Monday – Friday</div>
                <div className="time">09.00 AM – 19.00 PM</div>
              </li>
              <li>
                <div className="day">Saturday</div>
                <div className="time">09.00 AM – 19.00 PM</div>
              </li>
              <li>
                <div className="day">Sunday</div>
                <div className="time">09.00 AM – 19.00 PM</div>
              </li>
            </ul>
            <Button text={"Book now"} isFill />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpenHours;
