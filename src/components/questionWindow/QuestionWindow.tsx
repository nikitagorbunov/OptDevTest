import React from 'react';
import style from './QuestionWindow.module.css'
import Button from '../button/Button';
import {GREEN_BUTTON, RED_BUTTON} from '../../styles/button/buttonTypes';

interface IQuestionWindowProps {
  text: string;
  yesButton(event: React.MouseEvent<HTMLElement>): void;
  noButton(event: React.MouseEvent<HTMLElement>): void;
}

const QuestionWindow: React.FC<IQuestionWindowProps> = ({text, yesButton, noButton}) => {
  return (
    <div className={style.questionWindow}>
      <div className={style.questionWindow__messageContainer}>
        <p>{text}</p>
      </div>
      <div className={style.questionWindow__buttonContainer}>
        <Button text={'Да'} onClick={yesButton} className={GREEN_BUTTON}/>
        <Button text={'Нет'} onClick={noButton} className={RED_BUTTON}/>
      </div>
    </div>
  );
};

export default QuestionWindow;
