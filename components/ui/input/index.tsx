import React, { InputHTMLAttributes } from 'react';
import cn from 'classnames';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  className?: string;
}

const Input = ({ className, ...rest }: Props) => {
  const rootClassName = cn(
    'flex w-full h-11 flex-col justify-center items-center px-3.5 rounded input focus:outline-none bg- border  border-fg-line ',
    className
  );




  return (
    <label className='text-fg-text w-full'>
      <input
        className={rootClassName}
        autoComplete='off'
        autoCorrect='off'
        autoCapitalize='off'
        spellCheck='false'
        {...rest}
      />
    </label>
  );
};

export default Input;
