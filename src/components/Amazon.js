import React from 'react'
import data from '../Data'
import { Card } from './Card'
export const Amazon = ({handleclick}) => {
  return (
    <section>
        {data.map((datas) => (
            <Card datas={datas} handleclick={handleclick} key={datas.id}/>
        ))}
    </section>
  )
}
