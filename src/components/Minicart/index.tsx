import { useEffect, useState, useRef } from "react";
import styles from "./Minicart.module.css";
import { useCart } from "../../context/CartContext";

interface Installment {
  quantity: number;
  value: number;
}

interface IProduct {
  productId: number;
  imageUrl: string;
  installments: Array<Installment>;
  listPrice: number | null;
  imgProduct: string;
  price: number;
  productName: string;
  stars: number;
}

interface MinicartProps {
  handleCloseMinicart: () => void;
}

export function Minicart({ handleCloseMinicart }: MinicartProps) {
  const { cartCount } = useCart();
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const minicart = localStorage.getItem("minicart");
    const items = minicart ? JSON.parse(minicart) : [];
    setCartItems(items);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleCloseMinicart();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleCloseMinicart]);

  return (
    <div className={styles.minicartOverlay}>
      <div className={styles.minicart} ref={modalRef}>
        <div className={styles.minicartHeader}>
          <button onClick={handleCloseMinicart}>X</button>
          <p>
            Minicart
            <span>
              {cartCount > 0 && (
                <span className={styles.cartCounter}>{cartCount}</span>
              )}
            </span>
          </p>
        </div>

        <div className={styles.minicartContent}>
          {cartItems.length > 0 ? (
            <ul className={styles.productList}>
              {cartItems.map((item) => (
                <li key={item.productId} className={styles.productItem}>
                  <img
                    src={item.imageUrl}
                    alt={item.productName}
                    className={styles.productImage}
                  />
                  <div className={styles.productDetails}>
                    <p className={styles.productName}>{item.productName}</p>
                    <p className={styles.productPrice}>
                      {(item.price / 100).toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                    <p className={styles.installments}>
                      {item.installments?.length > 0
                        ? `${item.installments[0].quantity}x de ${(item.installments[0].value / 100).toLocaleString(
                            "pt-br",
                            {
                              style: "currency",
                              currency: "BRL",
                            }
                          )}`
                        : ""}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.emptyCart}>O carrinho está vazio.</p>
          )}
        </div>

        <div className={styles.minicartFooter}>
          <button className={styles.buyMore}>Continuar comprando</button>
          <button className={styles.goToPayment}>Ir para o checkout</button>
        </div>
      </div>
    </div>
  );
}
