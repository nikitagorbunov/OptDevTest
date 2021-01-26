import React, { useState, useEffect } from 'react';
import style from './CatalogCard.module.css'
import { disableScrolling } from '../../utils/frameWork/Components';
import { YELLOW_BUTTON } from '../../styles/button/buttonTypes';
import {useDispatch} from 'react-redux';
import {addItemCart} from '../../redux/actions/cartAction';
import Button from '../button/Button';
import DescriptionWindow from '../descriptionWindow/DescriptionWindow';
import ModalWindow from '../modalWindow/ModalWindow';

export interface IItem {
  id: number;
  title: string;
  price: number;
  img: string;
  description: string,
}

interface ICatalogCardProp {
  item: IItem;
}

const CatalogCard: React.FC<ICatalogCardProp> = props => {
  const [isDescription, setDescription] = useState<boolean>(false)
  const { title, price, img, description, } = props.item
  const dispatch = useDispatch()
  const buttonOnClick = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation()
    dispatch(addItemCart(props.item))
  }

  const descriptionWindow = (
    <DescriptionWindow
      item={props.item}
      title={title}
      price={price}
      description={description}
      img={img}
      closeModal={setDescription}
    />
  )

  useEffect(() => {
    disableScrolling(isDescription)
  }, [isDescription]);

  return (
    <>
      { isDescription ? <ModalWindow content={descriptionWindow} close={setDescription} /> : null }
      <div className={style.catalogCard} onClick={() => setDescription(true)}>
        <div className={style.catalogCard__img}>
          <img src={img} alt="img"/>
        </div>
        <p>{title}</p>
        <p>{`Цена: ${price}р.`}</p>
        <Button text={'Купить'} onClick={buttonOnClick} className={YELLOW_BUTTON} />
      </div>
    </>

  );
};

export default CatalogCard;
