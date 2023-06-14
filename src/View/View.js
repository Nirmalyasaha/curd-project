import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap';

const View = () => {

  let api_url = "http://localhost:1000/product"

  let [product, setProduct] = useState([]);

  useEffect(() => {

    axios.get(api_url)
      .then((res) => {
        console.log("axios res:", res)
        setProduct(res.data)
      })

      .catch((err) => {
        console.log("asios err:", err);
      })

  }, [setProduct, api_url])





  return (
    <div>
      <Container>
        <Row>
          {
            product.map(prod => (
              <Col key={prod.id}>
                <Card border='dark' >
                  <Card.Body>
                    <Card.Title>PRODUCT NAME:{prod.pname}</Card.Title>
                    <Card.Text >
                      PRICE:: {prod.price}
                      <br></br>
                      DESC::  {prod.desc}
                    </Card.Text>
                    <Link to={`detail/${product.id}`}>
                      <Button>Go to Details </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))

          }
        </Row>
      </Container>
      
    </div>
  )
}

export default View

//// edit component e form baniye ante hobe 