import classNames from 'classnames';
import { useState } from 'react';
import Button from '../Button';

const allTypes = ['тонкое', 'традиционное'];
const allSizes = [26, 30, 40];

function PizzaBlock({ id, name, price, imageUrl, sizes, types, onAddPizzaClick, addedCartPizzas }) {
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  const handleTypeClick = (index) => {
    setActiveType(index);
  };
  const handleSizeClick = (index) => {
    setActiveSize(index);
  };

  const handleAddPizzaClick = () => {
    const cartPizza = { id, name, price, imageUrl, size: allSizes[activeSize], type: allTypes[activeType] };
    onAddPizzaClick(cartPizza);
  };

  return (
    <div className='pizza-block'>
      <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
      <h4 className='pizza-block__title'>{name}</h4>
      <div className='pizza-block__selector'>
        <ul>
          {allTypes.map((pizzaType, index) => (
            <li
              onClick={() => handleTypeClick(index)}
              className={classNames({
                active: activeType === index,
                disabled: !types.includes(index),
              })}
              key={pizzaType}
            >
              {pizzaType}
            </li>
          ))}
        </ul>
        <ul>
          {allSizes.map((pizzaSize, index) => (
            <li
              onClick={() => handleSizeClick(index)}
              className={classNames({
                active: activeSize === index,
                disabled: !sizes.includes(pizzaSize),
              })}
              key={pizzaSize}
            >
              {pizzaSize} см.
            </li>
          ))}
        </ul>
      </div>
      <div className='pizza-block__bottom'>
        <div className='pizza-block__price'>от {price} ₽</div>
        <Button onClick={handleAddPizzaClick} className='button--add' outline>
          <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>
          <span>Добавить</span>
          {addedCartPizzas && <i>{addedCartPizzas}</i>}
        </Button>
      </div>
    </div>
  );
}

export default PizzaBlock;
