import React from 'react';
import style from './Button.module.css'


interface IButtonProp {
  text: string;
  className?: string;
  onClick(event: React.MouseEvent<HTMLElement>): void;
}

const Button: React.FC<IButtonProp> = ({text, className, onClick}) => {
  return (
    <div
      className={ style.button + ' ' + className }
      onClick={onClick}>
      {text}
    </div>
  );
};

export default Button;
