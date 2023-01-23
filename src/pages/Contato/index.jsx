import React from 'react'
import { Card } from 'react-bootstrap'

import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

export default function Contact() {

  return (
    <main
    className="d-flex mt-4"
    id="canvas_container"
    >
      <Card
      className="container p-4"
      style={{height: "auto"}}
      >
        <p style={{fontWeight: "bold", fontSize: "24px", textTransform: "uppercase"}}>Redes Sociais</p>
        <div 
        className="d-flex flex-row"
        style={{width: "100%", height: "auto", alignItems: "center"}}
        >
          <AiFillInstagram /> <a href="https://www.instagram.com/mulekotd/" style={{marginLeft: "6px", marginRight: "12px"}}>Instagram</a>
          <BsLinkedin /> <a href="https://www.linkedin.com/in/mulekotd/" style={{marginLeft: "6px", marginRight: "12px"}}>Linkedin</a>
          <BsGithub /> <a href="https://github.com/Mulekotd" style={{marginLeft: "6px", marginRight: "12px"}}>Github</a>
        </div>

        <p className="mt-4" style={{fontWeight: "bold", fontSize: "24px", textTransform: "uppercase"}}>Telefone</p>
        <span><em>Celular:</em> (21) 97138-9552</span>
        <span><em>Fixo:</em> (21) 3254-3592</span>
      </Card>
    </main>
  )
}