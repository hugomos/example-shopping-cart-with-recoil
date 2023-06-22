import { useRecoilValue } from 'recoil'
import { shoppingCartProductsState } from '../state/atoms/shopping-cart-products'

export const useShoppingCartProducts = () => {
  const products = useRecoilValue(shoppingCartProductsState)
  return { products }
}
