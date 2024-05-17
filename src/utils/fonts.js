import { Amiri, Palanquin } from "next/font/google";

export const amiri = Amiri({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const palanquin = Palanquin({
  weight: ["400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
