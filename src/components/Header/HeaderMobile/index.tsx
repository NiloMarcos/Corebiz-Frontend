import Logo from '../../../assets/logo.svg';

import Search from '../../../assets/search-icon.svg';

import Cart from '../../../assets/cart-icon.svg';

import { useCart } from "../../../context/CartContext";

import { Minicart } from '../../Minicart';

import styles from './Header.module.css'

import { menuItemsMobile } from '../../../mocks/menuItemsMobile';

import { MenuMobile } from './MenuMobile/MenuMobile';

interface IVisibileMinicart {
  handleOpenOrCloseMinicart: () => void;
  minicartIsVisible: boolean
}

export function HeaderMobile({ minicartIsVisible, handleOpenOrCloseMinicart }: IVisibileMinicart) {
  const { cartCount } = useCart();
  
  return (
    <header className={styles.containerMobile}>
      <div className={styles.contentMobile}>
        <MenuMobile menuItems={menuItemsMobile} />

        <a href="/" className={styles.logo}>
          <img src={Logo} alt="Logo - Corebiz" />
        </a>

        <div className={styles.links}>
          <button onClick={handleOpenOrCloseMinicart} className={styles.minicart}>
            <img src={Cart} alt="Ícone Meu Carrinho" />
            {cartCount > 0 && (
              <span className={styles.cartCounter}>{cartCount}</span>
            )}
          </button>
        </div>

        {minicartIsVisible ? <Minicart handleCloseMinicart={handleOpenOrCloseMinicart} /> : <></>}
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