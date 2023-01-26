import React from 'react'
import { Image } from 'react-bootstrap'
import './Cards.css'

export default function Cards(props) {

    const image = {
      height: "100%",
      width: "100%"
    }

    return (
      <div
      className="box d-flex flex-column"
      >
        <div className="transparent-card">
          <Image
          style={image}
          alt={props.alt} 
          src={props.src}
          />
        </div>
        <a href={props.href}>{props.title}</a>
      </div>
    )
}