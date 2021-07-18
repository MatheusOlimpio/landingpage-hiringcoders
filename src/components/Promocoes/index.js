import React from "react";
import * as Style from './styled';


export default function Promocoes() {
  const promotions = [
    {
      id: 1,
      champion: 'Jinks',
      img: './img/jinks.png',
      normal_price: 1000,
      promotional_price: 800
    },
    {
      id: 2,
      champion: 'Leona',
      img: './img/leona.png',
      normal_price: 2000,
      promotional_price: 1200
    },
    {
      id: 3,
      champion: 'Akaly',
      img: './img/akali.png',
      normal_price: 3000,
      promotional_price: 800
    }        
  ];
  return (
    <>
      <Style.Section>
        <Style.Title>Promoções</Style.Title>
        <Style.Champions>
          {promotions.map((promotion) => {
            return (
              <Style.Champion key={promotion.id}>
                <Style.ImageChampion src={promotion.img}></Style.ImageChampion>
                <Style.NormalPrice>{promotion.normal_price} RP</Style.NormalPrice>
                <Style.PromotionalPrice>{promotion.promotional_price} RP</Style.PromotionalPrice>
              </Style.Champion>
            )
          })}

        </Style.Champions>
      </Style.Section>
    </>
  )
}