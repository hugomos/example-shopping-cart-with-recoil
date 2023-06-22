import { Product } from '@/modules/shopping-cart/domain/entities/product'
import { atom } from 'recoil'

export const shoppingCartProductsState = atom<Product[]>({
  key: '@shopping-cart/products',
  default: [],
})
