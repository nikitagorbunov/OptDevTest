import React, {useState} from 'react';
import style from './DescriptionWindow.module.css'
import { RED_BUTTON } from '../../styles/button/buttonTypes';
import { useDispatch } from 'react-redux';
import { IItem } from '../catalogCard/CatalogCard';
import { addItemsCart } from '../../redux/actions/cartAction';
import Button from '../button/Button';
import QuantityCounter from '../quantityCounter/QuantityCounter';

interface IDescriptionProps {
  title: string;
  img: string;
  price: number;
  description: string;
  item: IItem;
  closeModal(value: boolean): void;
}

const DescriptionWindow: React.FC<IDescriptionProps> = ({ title, price, img, description, item, closeModal }) => {
  const [quantity, setQuantity] = useState<number>(1)
  const dispatch = useDispatch();
  const buttonOnClick = () => {
    dispatch(addItemsCart(item, quantity))
    closeModal(false)
  }

  return (
    <div className={style.description}>
      <div className={style.description__img}>
        <img src={img} alt="img"/>
      </div>
      <p className={style.description__title}>{title}</p>
      <p className={style.description__area}>{description}</p>
      <p>Цена: {price}р.</p>
      <Button text={'Купить'} onClick={() => buttonOnClick()} className={RED_BUTTON} />
      <QuantityCounter
        quantity={quantity}
        className={style.description__counter}
        subButton={() => quantity > 1 && setQuantity(quantity - 1)}
        addButton={() => setQuantity(quantity + 1)}
      />
    </div>
  );
};

export default DescriptionWindow;
