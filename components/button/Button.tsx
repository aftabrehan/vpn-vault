import React from 'react';

interface ButtonProps {
  children: any;
  customClass?: string;
  type?: string;
}

const defaultProps: ButtonProps = {
  children: <>Button</>,
  type: 'primary',
};

const Button = ({ type, children, customClass } = defaultProps) => {
  const primary = `py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-primary shadow hover:shadow-lg hover:shadow-primary transition-all outline-none ${customClass}`;
  const secondary = `font-medium tracking-wide py-3 px-4 sm:px-8 border border-primary text-primary bg-white outline-none rounded-l-full rounded-r-full capitalize hover:bg-primary hover:text-white transition-all shadow hover:shadow-lg hover:shadow-primary ${customClass}`;

  return (
    <button type="submit" className={type === 'primary' ? primary : secondary}>
      {children}
    </button>
  );
};

export default Button;
