import React from 'react'
import { Button, Card, Header, Image, MainContainer } from './Cards.style'
import defaultImg from '../../assets/default-image.jpg'
import { useNavigate } from 'react-router-dom'

const Cards = ({ recipes }) => {
  const navigate = useNavigate()
  return (
    <MainContainer wrap="wrap">
      {recipes.map(({ recipe }, index) => (
        <Card key={index}>
          <Header>{recipe.label}</Header>
          <Image src={recipe.image || defaultImg} />
          <Button
            onClick={() => navigate('detail', { state: recipe, replace: true })}
          >
            Vie More
          </Button>
        </Card>
      ))}
    </MainContainer>
  )
}

export default Cards
