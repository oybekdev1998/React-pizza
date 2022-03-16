import React from 'react'

import { useDispatch, useSelector } from "react-redux";

import { Categories, PizzaBlock, SortPopup } from '../components'

import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas'

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
  {name:'популярности', type: 'popular'},
  {name:'цене', type: 'price'},
  {name:'алфавиту', type: 'alphabet'}
]

const Home = () => {  
  const dispatch = useDispatch()  

  React.useEffect(() => { dispatch(fetchPizzas()) }, [dispatch])
    
  const items = useSelector(({pizzas}) =>  pizzas.items )

  const onSelectCategory = React.useCallback((index) =>{
    dispatch(setCategory(index))  
  }, [dispatch])

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem ={onSelectCategory} items={categoryNames} />
        {
         <SortPopup items={sortItems} /> 
        }

      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        { items && items.map((obj, index) => ( <PizzaBlock key={index} {...obj} /> )) }
      </div>
    </div>
  )
}

export default Home;