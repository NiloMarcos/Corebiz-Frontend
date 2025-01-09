import { Header } from "../../components/Header";

import { Banner } from "../../components/Banner";

import { Products } from "../../components/Products";

import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Products />
      <Footer />
    </main>
  );
}