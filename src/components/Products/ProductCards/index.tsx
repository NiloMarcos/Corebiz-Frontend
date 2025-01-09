import { LazyLoadImage } from "react-lazy-load-image-component";

import { useCart } from "../../../context/CartContext";

import { RenderStars } from "./RenderStars";

import styles from "./ProductCards.module.css";

import "react-lazy-load-image-component/src/effects/blur.css";

interface Installments {
  quantity: number;
  value: number;
}

interface IProductCards {
  productId: number;
  imageUrl: string;
  installments: Array<Installments>;
  listPrice: number | null;
  imgProduct: string;
  price: number;
  productName: string;
  stars: number;
}

export function ProductCard({ product }: { product: IProductCards }) {
  const { incrementCart } = useCart();

  function handleAddProductInMinicart() {
    const minicart = localStorage.getItem("minicart");
  
    const productsInMinicart = minicart ? JSON.parse(minicart) : [];
  
    const updatedMinicart = [...productsInMinicart, product];
  
    localStorage.setItem("minicart", JSON.stringify(updatedMinicart));
  
    incrementCart();
  }

  return (
    <div className={styles.container}>
      {product.listPrice && (
        <>
          <div className={styles.flagOff}></div>
          <span className={styles.text}>OFF</span>
        </>
      )}

      <LazyLoadImage
        src={product.imageUrl}
        alt={product.productName}
        effect="blur"
        height={200}
        className={styles.productImage}
      />

      <div className={styles.containerGray}>
        <h2 className={styles.title}>{product.productName}</h2>

        <div className={styles.stars}>{RenderStars(product.stars)}</div>

        {product.listPrice ? (
          <p className={styles.listPrice}>
            de{" "}
            {(Number(product.listPrice) / 100).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        ) : (
          <div className={styles.separatePrice}></div>
        )}

        <p className={styles.price}>
          por{" "}
          {(product.price / 100).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>

        {product.installments.length > 0 ? (
          <div className={styles.installments}>
            <p className={styles.textInstallments}>
              ou em {product.installments[0].quantity}x de{" "}
              {(product.installments[0].value / 100).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        ) : (
          <div className={styles.separateInstallments}></div>
        )}

        <div className={styles.containerButton}>
          <button className={styles.button} onClick={handleAddProductInMinicart}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
