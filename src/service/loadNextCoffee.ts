import type { Coffee } from '../types/Coffee'
import { PUBLIC_API_BASE } from '$env/static/public';

const NEXT_COFFEE_ENDPOINT = `${PUBLIC_API_BASE}/coffee/after/{id}`

export const loadNextCoffee = async (id: string) => {
  return (await fetch(NEXT_COFFEE_ENDPOINT.replace('{id}', id))).json() as Promise<Coffee>
}
