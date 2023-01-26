import React from 'react'
import { Card } from 'react-bootstrap'

import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

export default function Contact() {

  const card = {
    height: "auto"
  }

  const container = {
    width: "100%", 
    height: "auto",
    alignItems: "center"
  }

  const title = {
    fontWeight: "bold",
    fontSize: "24px",
    textTransform: "uppercase"
  }

  const link = {
    marginLeft: "6px",
    marginRight: "12px"
  }

  return (
    <main
    className="d-flex mt-4"
    id="canvas_container"
    >
      <Card
      className="container p-4"
      style={card}
      >
        <p style={title}>Redes Sociais</p>
        <div 
        className="d-flex flex-row"
        style={container}
        >
          <AiFillInstagram /> <a href="https://www.instagram.com/mulekotd/" style={link}>Instagram</a>
          <BsLinkedin /> <a href="https://www.linkedin.com/in/mulekotd/" style={link}>Linkedin</a>
          <BsGithub /> <a href="https://github.com/Mulekotd" style={link}>Github</a>
        </div>

        <p className="mt-4" style={title}>Telefone</p>
        <span><em>Celular:</em> (21) 97138-9552</span>
        <span><em>Fixo:</em> (21) 3254-3592</span>
      </Card>
    </main>
  )
}