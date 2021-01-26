import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Cart.module.css'
import { MainLayouts } from '../../styles/layouts/Layouts';
import { AppState } from '../../redux/reducers/rootReducer';
import { ICartItem } from '../../redux/reducers/cartReducer';
import { cleanCart } from '../../redux/actions/cartAction';
import { RED_BUTTON } from '../../styles/button/buttonTypes';
import { disableScrolling } from '../../utils/frameWork/Components';
import CartCard from '../cartCard/CartCard';
import Button from '../button/Button';
import ModalWindow from '../modalWindow/ModalWindow';
import QuestionWindow from '../questionWindow/QuestionWindow';


const Cart: React.FC = () => {
  const [isClearCart, setClearCart] = useState<boolean>(false)
  const cartItems: ICartItem[] = useSelector( (state: AppState) => state.cart.cartItems )
  const totalSum: number = cartItems.reduce((acc, item) => acc + (item.price * item.quantity!), 0)
  const dispatch = useDispatch()
  const clearCartWindow = (
    <QuestionWindow
      text={'Отчистить корзину?'}
      yesButton={() => dispatch(cleanCart())}
      noButton={() => setClearCart(false)}
    />
  )

  useEffect(() => {
    disableScrolling(isClearCart)
  }, [isClearCart]);

  if(!cartItems.length) {
    return (
      <MainLayouts>
        <p className={style.cartEmpty}>В корзине пока что пусто :(</p>
      </MainLayouts>
    )
  }

  return (
    <MainLayouts>
      { isClearCart ? <ModalWindow content={clearCartWindow} close={setClearCart} /> : null }
      <div className={style.cartHeader}>
        <Button text={'Очистить'} onClick={() => setClearCart(true)} className={RED_BUTTON}/>
        <p className={style.cartHeader__text}>Итоговая сумма: {totalSum}р.</p>
      </div>
      {cartItems.map( (item, index) => <CartCard key={index} item={item}/>)}
    </MainLayouts>
  );
};

export default Cart;
