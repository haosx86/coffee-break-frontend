import type { Coffee } from '../types/Coffee'
import { PUBLIC_API_BASE } from '$env/static/public';

const FIRST_COFFEE_ENDPOINT = `${PUBLIC_API_BASE}/coffee`

export const loadFirstCoffee = async () => {
  return (await fetch(FIRST_COFFEE_ENDPOINT)).json() as Promise<Coffee>
}
