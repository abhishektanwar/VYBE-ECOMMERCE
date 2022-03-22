import React from 'react'
import './page-hero-header.css'
const PageHeroHeader = (props) => {
  const {title,subTitle} = props;
  return (
    <div className="product-listing-header margin-top-60">
        <h2>{title}</h2>
        <h4>{subTitle}</h4>
      </div>
  )
}

export default PageHeroHeader
