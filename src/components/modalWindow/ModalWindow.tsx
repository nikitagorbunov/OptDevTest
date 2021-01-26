import React from 'react';
import style from './ModalWindow.module.css'

interface IModalWindowProps {
  content: React.ReactNode;
  close(value: boolean): void
}

const ModalWindow: React.FC<IModalWindowProps> = ({ content, close }) => {
  return (
    <div className={style.description} onClick={ () => close(false)}>
      <div onClick={ event => event.stopPropagation()}>
      {content}
      </div>
    </div>
  );
};

export default ModalWindow;
