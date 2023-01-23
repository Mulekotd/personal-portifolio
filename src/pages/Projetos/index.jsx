import React from 'react'
import { Card } from 'react-bootstrap'
import Cards from '/src/components/Cards'

//static images handling
const parrotcloud = new URL('/src/assets/images/parrotcloud.png', import.meta.url).href
const mostra = new URL('/src/assets/images/mostra_ifrj.png', import.meta.url).href

export default function Projects() {

  return (
    <main
    className="mt-4"
    id="canvas_container"
    >
      <Card
      className="d-flex flex-row container p-4"
      style={{justifyContent: "space-around", border: "none"}}
      >
        <Cards
        alt={"Parrotcloud"}
        src={parrotcloud}
        href={"https://mulekotd.github.io/store.parrotcloud/"}
        title={"Parrotcloud: Site de Publicação de Jogos"}
        />

        <Cards
        alt={"Mostra IFRJ"}
        src={mostra}
        href={"https://mostraifrjduquedecaxias.labculturadigital.com.br/"}
        title={"#Mostra IFRJ"}
        />
      </Card>
    </main>
  )
}