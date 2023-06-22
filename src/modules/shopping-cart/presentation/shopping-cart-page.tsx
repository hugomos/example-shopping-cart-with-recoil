'use client'
import React from 'react'
import { Product } from '../domain/entities/product'
import { ShoppingCartProduct } from './components/shopping-cart-product'
import { Button } from '@/presentation/components/button'

import { faker } from '@faker-js/faker'

const ShoppingCart: React.FC = () => {
  const products: Product[] = [
    {
      id: '1',
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      quantity: 3,
      image: 'https://source.unsplash.com/random/640x426/?product',
    },
    {
      id: '2',
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      quantity: 3,
      image: 'https://source.unsplash.com/random/640x426/?product',
    },
    {
      id: '3',
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      quantity: 3,
      image: 'https://source.unsplash.com/random/640x426/?product',
    },
  ]

  return (
    <div className="flex h-screen w-full flex-col">
      <div className="flex flex-1 flex-col gap-6">
        {products.map((product) => (
          <ShoppingCartProduct key={product.id} product={product} />
        ))}
      </div>
      <div className="w-full p-4">
        <div className="flex items-center justify-between py-2">
          <span className="font-semibold">Total com frete</span>
          <span className="font-semibold">R$ 100</span>
        </div>
        <Button title="Continuar a compra" variant="primary" />
      </div>
    </div>
  )
}

export default ShoppingCart
