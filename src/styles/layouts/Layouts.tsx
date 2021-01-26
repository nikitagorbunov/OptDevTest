import React from 'react';
import style from './Layouts.module.css'

interface IMainLayoutsProps {
  children: React.ReactNode
  className?: string;
}

export const MainLayouts: React.FC<IMainLayoutsProps> = ({ children, className }) => {
  return (
    <div className={style.mainLayouts + ' ' + className}>
      { children }
    </div>
  );
};

export  default MainLayouts
