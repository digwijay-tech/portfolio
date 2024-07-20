/* eslint-disable no-unused-vars */
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../Skill/Skill.css'
import reactlg from '../../assets/img/react.svg'
import bootstraplg from '../../assets/img/boot.svg'
import weblg from '../../assets/img/web.svg'
import javalg from '../../assets/img/java.svg'
import { Col, Container, Row } from 'react-bootstrap';
const Skill = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        },
      };
      return(
        <section className='skills' id='skill'> 
        <Container>
            <Row>
                <Col>
                <div className='skill-bx'>
                    <h2>Skills</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli.<br/> Volutpat maecenas volutpat blandit aliquam etiam.</p>
                    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className="item">
                            <img src={weblg} alt="img" />
                            <h5>Web Development</h5>
                        </div>
                        <div className="item">
                            <img src={javalg} alt="img" />
                            <h5>Java</h5>
                        </div>
                        <div className="item">
                            <img src={reactlg} alt="img" />
                            <h5>React JS</h5>
                        </div>
                        <div className="item">
                            <img src={bootstraplg} alt="img" />
                            <h5>Bootstrap</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        </section>
    )
}

export default Skill