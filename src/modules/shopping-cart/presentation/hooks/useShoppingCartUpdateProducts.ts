import { useSetRecoilState } from 'recoil'
import { shoppingCartProductsState } from '../state/atoms/shopping-cart-products'
import { Product } from '../../domain/entities/product'

export const useShoppingCartUpdateProducts = () => {
  const setShoppingCartProducts = useSetRecoilState(shoppingCartProductsState)

  return (product: Product): void => {
    setShoppingCartProducts((oldProducts) => {
      return oldProducts.map((p) => (p.id === product.id ? product : p))
    })
  }
}
