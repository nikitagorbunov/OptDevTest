import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import style from './CartCard.module.css'
import { ICartItem } from '../../redux/reducers/cartReducer';
import { addItemCart, removeItemCart, subItemCart } from '../../redux/actions/cartAction';
import { disableScrolling } from '../../utils/frameWork/Components';
import Button from '../button/Button';
import QuestionWindow from '../questionWindow/QuestionWindow';
import QuantityCounter from '../quantityCounter/QuantityCounter';
import ModalWindow from '../modalWindow/ModalWindow';

interface ICartCardProps {
  item: ICartItem;
}

const CartCard: React.FC<ICartCardProps> = ({ item }) => {
  const [isRemoveItemCart, setRemoveItemCart] = useState<boolean>(false)
  const { id, title, price, quantity } = item
  const totalSum = price * quantity!
  const dispatch = useDispatch()

  const removeItemCartWindow = (
    <QuestionWindow
      text={'Удалить товар из корзины?'}
      yesButton={() => {
        dispatch(removeItemCart(id))
        setRemoveItemCart(false)
      }}
      noButton={() => setRemoveItemCart(false)}
    />
  )

  useEffect(() => {
    disableScrolling(isRemoveItemCart)
  }, [isRemoveItemCart]);

  return (
    <>
      { isRemoveItemCart ? <ModalWindow content={removeItemCartWindow} close={setRemoveItemCart} /> : null }
      <div className={style.cartCard}>
        <p className={style.cartCard__title}>{title}</p>
        <div className={style.cartCard__info}>
          <p className={style.cartCard__info__item}>Стоймость: {totalSum}р.</p>
          <QuantityCounter
            quantity={quantity!}
            className={style.cartCard__info__item}
            subButton={() => quantity === 1 ? setRemoveItemCart(true) : dispatch(subItemCart(item))}
            addButton={() => dispatch(addItemCart(item))}
          />
          <Button text={'Удалить'} onClick={() => setRemoveItemCart(true)} className={style.cartCard__deleteButton + ' ' + style.cartCard__info__item}/>
        </div>
      </div>
    </>
  );
};

export default CartCard;
