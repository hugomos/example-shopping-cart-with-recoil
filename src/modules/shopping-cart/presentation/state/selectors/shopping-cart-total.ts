import { selector } from 'recoil'
import { shoppingCartProductsState } from '../atoms/shopping-cart-products'

export const shoppingCartTotalState = selector({
  key: '@shopping-cart/total',
  get: ({ get }) => {
    const products = get(shoppingCartProductsState)
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    )
  },
})
