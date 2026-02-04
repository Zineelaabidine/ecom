 import { FaStar, FaRegStar, FaRegStarHalfStroke } from "react-icons/fa6"

export function renderStars(rating: number) {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={`full-${i}`} />)
  if (hasHalfStar) stars.push(<FaRegStarHalfStroke key="half" />)
  for (let i = 0; i < emptyStars; i++) stars.push(<FaRegStar key={`empty-${i}`} />)

  return stars
}