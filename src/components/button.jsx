function Button({ className='btn-primary', text, variant = "normal", onClick }) {
  return (
    <div className={`btn-wrapper ${variant}`}>
      {variant === 'popup' && <div className='btn-shadow'></div>}
      <button className={className} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;
