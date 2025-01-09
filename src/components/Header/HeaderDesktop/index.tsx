
import Logo from '../../../assets/logo.svg';
import Search from '../../../assets/search-icon.svg';
import User from '../../../assets/user-icon.svg';
import Cart from '../../../assets/cart-icon.svg';

import styles from './Header.module.css';

export function HeaderDesktop() {
  
  const cartCount = 1;
  
  return (
    <header className={styles?.container}>
      <div>
        <img src={Logo} alt="Logo - Corebiz" />
      </div>

      <div className={styles.containerFormMinicart}>
        <div className={styles.searchContainer}>
          <form className={styles.form}>
            <input
              type="text"
              placeholder="O que está procurando?"
            />
            <button type="submit">
              <img src={Search} alt="Ícone botão de pesquisa" />
            </button>
          </form>
        </div>
        
        <div className={styles.links}>
          <a href="#hash" className={styles.login}>
            <img src={User} alt="Ícone Minha Conta" />
            Minha Conta
          </a>
          <a href="#hash" className={styles.minicart}>
            <img src={Cart} alt="Ícone Meu Carrinho" />
            {cartCount > 0 && (
              <span className={styles.cartCounter}>{cartCount}</span>
            )}
          </a>
        </div>
      </div>
    </header>
  );
}
