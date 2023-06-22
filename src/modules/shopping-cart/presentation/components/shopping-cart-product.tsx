/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Product } from '../../domain/entities/product'

interface ShoppingCartProductProps {
  product: Product
}

export const ShoppingCartProduct: React.FC<ShoppingCartProductProps> = ({
  product,
}) => {
  const productName =
    product.name.length > 100
      ? product.name.substring(0, 100).concat('...')
      : product.name

  return (
    <div className="flex h-fit w-full gap-4 border-b border-t border-b-zinc-200 border-t-zinc-200 px-2 py-4">
      <img
        src={product.image}
        alt=""
        className="h-25 aspect-square w-20 rounded-md object-cover"
      />
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex w-full flex-col gap-1">
          <h3 className="font-semibold">{productName}</h3>
          <span className="text-xs capitalize text-green-600">
            Frete Grátis
          </span>
        </div>
        <div className="flex h-full items-center justify-between">
          <select
            name="quantity"
            id="quantity"
            className="rounded-md border border-zinc-300 bg-transparent p-1 text-sm"
            onChange={(e) => alert(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <span className="block font-bold">R$ {product.price}</span>
        </div>
      </div>
    </div>
  )
}
