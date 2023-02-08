import React from 'react'
import moduleStyle from './item.module.css'

function Item({photo}) {
    // const photos = props.photos

  return (
    <div className={moduleStyle.item}>
        {/* <p>{photos[0].id}</p> */}
        <img src={photo.thumbnailUrl} alt="이미지" />
        <p>{photo.title}</p>
      </div>
  )
}

export default Item


/* rfc(축약식) rfce(원래문법) -젠코딩시 이용하세요 */