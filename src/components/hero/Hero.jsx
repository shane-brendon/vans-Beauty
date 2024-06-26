import Image from "next/image";
import Button from "../lib/button/Button";
import styles from "./hero.module.scss";
import { amiri } from "@/src/utils/fonts";
import { palanquin } from "@/src/utils/fonts";

function Hero() {
  return (
    <section className={`${styles.hero} ${amiri.className}`}>
      <div className="container">
        <div>
          <h1>Give Your Nails Sweet Treat</h1>
          <div className={`${palanquin.className} ${styles.description}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className={styles.btn}>
            <Button text={"Book Appointement"}></Button>
            <Button text={"Our Service"}></Button>
          </div>
        </div>
        <div className={styles.image}>
          <Image src={"/coat-nail.jpg"} width={435} height={650} />
          <Image src={"/peddicure.jpg"} width={400} height={265} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
