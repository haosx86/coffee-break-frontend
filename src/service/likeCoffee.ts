import type { Coffee } from '../types/Coffee'
import { PUBLIC_API_BASE } from '$env/static/public';

const LIKE_COFFEE_ENDPOINT = `${PUBLIC_API_BASE}/coffee/like/{id}`

export const likeCoffee = async (id: string) => {
  return (await fetch(
    LIKE_COFFEE_ENDPOINT.replace('{id}', id),
    { method: 'PATCH'}
  )).json() as Promise<Coffee>
}
