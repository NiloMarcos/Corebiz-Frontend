import { Header } from "../../components/Header";

import { Banner } from "../../components/Banner";

import { Products } from "../../components/Products";

import { Newsletter } from "../../components/Footer/Newsletter";

import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Products />
      <Newsletter />
      <Footer />
    </main>
  );
}