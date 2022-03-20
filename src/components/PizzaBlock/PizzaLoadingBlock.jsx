import React from 'react'
import ContentLoader from "react-content-loader"

const PizzaLoadingBlock = () => {
  return (
    <ContentLoader
    className='pizza-block' 
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="272" rx="3" ry="3" width="280" height="37" /> 
    <rect x="0" y="320" rx="6" ry="6" width="280" height="84" /> 
    <circle cx="129" cy="129" r="129" /> 
    <rect x="0" y="417" rx="5" ry="5" width="99" height="33" /> 
    <rect x="127" y="412" rx="20" ry="20" width="144" height="45" />
  </ContentLoader>
  )
}

export default PizzaLoadingBlock