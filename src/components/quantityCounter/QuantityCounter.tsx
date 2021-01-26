import React from 'react';
import style from './QuantityCounter.module.css'

interface IQuantityCounterProps {
  quantity: number;
  className?: string;
  subButton(event: React.MouseEvent<HTMLElement>): void;
  addButton(event: React.MouseEvent<HTMLElement>): void;
}

const QuantityCounter: React.FC<IQuantityCounterProps> = ({ quantity, className, subButton, addButton }) => {
  return (
    <div className={style.counter + ' ' + className}>
      <p className={style.counter__buttonSub + ' ' + style.counter_hover} onClick={subButton}>-</p>
      <p className={style.counter__quantity}>{quantity}</p>
      <p className={style.counter__buttonAdd + ' ' + style.counter_hover} onClick={addButton}>+</p>
    </div>
  );
};

export default QuantityCounter
