function Categories({ activeCategory, items = [], onCategoryClick }) {
  return (
    <div className='categories'>
      <ul>
        <li className={activeCategory === null ? 'active' : ''} onClick={() => onCategoryClick(null)}>
          Все
        </li>
        {items.map((item, index) => (
          <li className={activeCategory === index ? 'active' : ''} onClick={() => onCategoryClick(index)} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
