import React from 'react'
import { Image } from 'react-bootstrap'
import './Cards.css'

export default function Cards(props) {

    return (
      <div
      className="d-flex flex-column"
      style={{alignItems: "center", width: "480px", height: "auto", border: "1px solid black", borderRadius: "6px", boxShadow: "rgba(0, 0, 0, 0.4) 0px 30px 90px"}}
      >
        <div className="transparent-card" style={{height: "260px", width: "100%"}}>
          <Image
          style={{height: "100%", width: "100%"}}
          alt={props.alt} 
          src={props.src}
          />
        </div>
        <a href={props.href}>{props.title}</a>
      </div>
    )
}