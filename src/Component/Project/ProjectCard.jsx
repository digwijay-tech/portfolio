/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCard = (props) => {
  return (
    <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={props.image} alt="image" />
            <div className="proj-txtx">
                <h4>{props.name} </h4>
                <span>{props.description}</span>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCard