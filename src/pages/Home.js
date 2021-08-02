import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, PizzaBlock, Skeleton, SortPopup } from '../components';
import { addPizzaToCart } from '../redux/actions/cart';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

function Home() {
  const dispatch = useDispatch();
  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const cartPizzas = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const handleCategoryClick = (activeIndex) => {
    dispatch(setCategory(activeIndex));
  };

  const handleSortClick = (activeIndex) => {
    dispatch(setSortBy(activeIndex));
  };

  const handleAddPizzaClick = (cartPizza) => {
    dispatch(addPizzaToCart(cartPizza));
  };

  const categories = useMemo(
    () => (
      <Categories
        activeCategory={category}
        onCategoryClick={handleCategoryClick}
        items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
      />
    ),
    [category]
  );
  const sortpopup = useMemo(
    () => (
      <SortPopup
        activeSort={sortBy}
        onSortClick={handleSortClick}
        items={[
          { name: 'популярности', type: 'rating' },
          { name: 'цене', type: 'price' },
          { name: 'алфавиту', type: 'name' },
        ]}
      />
    ),
    [sortBy]
  );

  return (
    <div className='container'>
      <div className='content__top'>
        {categories}
        {sortpopup}
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoaded
          ? pizzas.map((pizza) => (
              <PizzaBlock
                key={pizza.id}
                addedCartPizzas={cartPizzas[pizza.id] && cartPizzas[pizza.id].items.length}
                onAddPizzaClick={handleAddPizzaClick}
                {...pizza}
              />
            ))
          : Array(12)
              .fill(0)
              .map((val, index) => <Skeleton key={index} />)}
      </div>
    </div>
  );
}

export default Home;
