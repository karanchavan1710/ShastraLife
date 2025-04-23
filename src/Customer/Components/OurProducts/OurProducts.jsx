import React, { useEffect } from 'react'
import OurProductCard from '../Common/OurProductsCards/OurProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../Redux/Slice/ProductSlice'

const OurProducts = () => {
  const dispatch = useDispatch()
  const { items, status } = useSelector((state) => state.products)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts())
    }
  }, [status, dispatch])

  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 !gap-4 !p-2'>
      {items?.map((item) => (
        <OurProductCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default OurProducts
