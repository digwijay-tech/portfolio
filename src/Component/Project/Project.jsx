/* eslint-disable no-unused-vars */
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CuSpotimg from '../../assets/img/im.png'
import realimg from '../../assets/img/real.png'
import Movieimg from '../../assets/img/mov.png'
import portfolioimg from '../../assets/img/Portfolio.png'
import ProjectCard from './ProjectCard'
import './Project.css'
const Project = () => {
    const projects=[


        {
            title : 'Portfolio',
            description :"wiehfuwhrwuf",
            img : portfolioimg,
        },
        {
            title : 'RealEst',
            description :"wiehfuwhrwuf",
            img : realimg,
        },
        {
            title : 'movie-booking',
            description :"wiehfuwhrwuf",
            img : Movieimg,
        },
    ]
  return (
    <section className='project' id='project'>
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>dihfriedgnviedgvbedilugrvbnedlxuigvnei</p>
                </Col>
                <Row>
                {    projects.map((project,index) => {
                        return(
                           <>
                           
                           <ProjectCard
                           key={index}
                           name={project.title}
                           description={project.description}
                           image={project.img}
                           />
                           
                           </> 
                        )
                    })}
                </Row>
            </Row>
        </Container>
    </section>
  )
}

export default Project