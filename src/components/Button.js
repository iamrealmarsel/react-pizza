import classNames from 'classnames';

function Button({ children, outline, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}
    >
      {children}
    </button>
  );
}

export default Button;
