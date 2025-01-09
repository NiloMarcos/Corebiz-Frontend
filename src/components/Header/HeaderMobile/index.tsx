
import Logo from '../../../assets/logo.svg';
import Search from '../../../assets/search-icon.svg';
import Cart from '../../../assets/cart-icon.svg';
import Hamburguer from '../../../assets/menu-icon.svg';

import styles from './Header.module.css'

export function HeaderMobile() {
  const cartCount = 1;
  
  return (
    <header className={styles.containerMobile}>
      <div className={styles.contentMobile}>
        <button type='button' className={styles.hamburguer}>
          <img src={Hamburguer} alt="Icone do menu" />
        </button>

        <a href="/" className={styles.logo}>
          <img src={Logo} alt="Logo - Corebiz" />
        </a>

        <div className={styles.links}>
          <a href="#hash" className={styles.minicart}>
            <img src={Cart} alt="Ícone Meu Carrinho" />
            {cartCount > 0 && (
              <span className={styles.cartCounter}>{cartCount}</span>
            )}
          </a>
        </div>
      </div>

      <div className={styles.containerFormMinicartMobile}>
        <div className={styles.searchContainerMobile}>
          <form className={styles.formMobile}>
            <input
              type="text"
              placeholder="O que está procurando?"
            />
            <button type="submit">
              <img src={Search} alt="Ícone botão de pesquisa" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}