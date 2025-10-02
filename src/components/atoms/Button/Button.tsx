import type { JSX } from 'react';
import './Button.css';
interface ButtonProps {
  /**
   * Is this the primary call to action?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps): JSX.Element => {
  const mode = primary ? 'primary' : 'secondary';
  const sizeClass = `button--${size}`;
  const modeClass = `button--${mode}`;

  return (
    <button
      type='button'
      className={`button ${sizeClass} ${modeClass}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
