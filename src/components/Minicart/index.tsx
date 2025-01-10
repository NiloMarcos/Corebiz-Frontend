import { useEffect, useState, useRef } from "react";

import { useCart } from "../../context/CartContext";

import Trash from '../../assets/trash-solid.svg';

import styles from "./Minicart.module.css";

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
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleCloseMinicart();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleCloseMinicart]);

  const handleRemoveItem = (productId: number) => {
    const updatedCart = cartItems.filter((item) => item.productId !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("minicart", JSON.stringify(updatedCart));
  };

return (
    <div className={styles.minicartOverlay}>
      <div className={styles.minicart} ref={modalRef}>
        <div className={styles.minicartHeader}>
          <button onClick={handleCloseMinicart} type="button">
            X
          </button>
          <p>
            Minicart
            <span>
              {cartItems.length > 0 && (
                <span className={styles.cartCounter}>{cartItems.length}</span>
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
                        ? `${item.installments[0].quantity}x de ${(
                            item.installments[0].value / 100
                          ).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}`
                        : ""}
                    </p>
                  </div>
                  <button
                    className={styles.removeItem}
                    onClick={() => handleRemoveItem(item.productId)}
                    type="button"
                  >
                   <img src={Trash} alt="" />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.emptyCart}>
              <p>O carrinho está vazio.</p>
            </div>
          )}
        </div>

        <div className={styles.minicartFooter}>
          <button className={styles.buyMore} type="button">
            Continuar comprando
          </button>
          <button className={styles.goToPayment} type="button">
            Ir para o checkout
          </button>
        </div>
      </div>
    </div>
  );
}
