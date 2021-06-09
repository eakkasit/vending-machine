import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'


class Product extends Component {
    render(){
        const {products} = this.props
        const listItems = products.map((product,index) =>
            <Col md={4} xs={12} key={index} className="p-2">
                <Card >
                    <div className="text-center">
                        <Card.Img variant="top" src={product.src} className="w-120" />
                    </div>
                    
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            <div className="product-code">
                                <Row>
                                    <Col md={6}  className="text-left">
                                        <span>Code : </span>
                                    </Col>
                                    <Col md={6}  className="text-left">
                                        <span>{product.code}</span>
                                    </Col>
                                </Row>
                            </div>
                            <div className="Price">
                                <Row>
                                    <Col md={6}  className="text-left">
                                        <span>Price : </span>
                                    </Col>
                                    <Col md={6}  className="text-left">
                                        <span>{product.price}</span>
                                    </Col>
                                </Row>
                            </div>
                            <div className="Amount">
                                <Row>
                                    <Col md={6} className="text-left">
                                        <span>Amount : </span>
                                    </Col>
                                    <Col md={6}  className="text-left">
                                        <Form.Label>{product.total}</Form.Label>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                
            </Col>
        );
        return (
            <Container className="product-container">
                <Row>
                    {listItems}
                </Row>
            </Container>
        )
    }

}

const mapStateToProps = function(state) {
    return {
      products: state.products,
    }
  }
  

export default connect(mapStateToProps)(Product);
