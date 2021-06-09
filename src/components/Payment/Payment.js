import React, { Component } from 'react'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card'


class Payment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            receive: '',
            code:'',
            img:''
        }
    }

    onClickPurchase = ()=>{
        let {code} = this.state;
        this.selectProduct(code)
    }
    
    selectProduct = (id)=>{
        const {payment,products,dispatch} = this.props
        const item = products.filter(function(itm){
            return itm.code == id
          });
          if(item.length > 0){
            if(((item[0].total - 1) >= 0) && (payment > 0 && payment>=item[0].price)){
              dispatch({ type: 'PURCHASE_PAYMENT', value: parseInt(item[0].price)})
              dispatch({ type: 'UPDATE', id: id})
              this.setState({
                  receive:item[0].name,
                  img:item[0].src
              })
            }
          }
    }

    selectProductKey = (key)=>{
        let {code} = this.state;
        this.setState({
            code:code+key
        })
    }

    onClickDel = ()=>{
        let {code} = this.state;
        
        if(code.length > 0){
            let codeDel = code.substr(0,code.length-1)
            this.setState({
                code:codeDel
            })
        }else{
            this.setState({
                code:''
            })
        }
        
    }
    render(){
        // const {errorMessage} = this.state
        let {receive,code,img} = this.state
        return (
            <Container className="payment-container">
                <Row>
                    <Col md={12}  className="text-center">
                    <Form.Label>Balance </Form.Label>
                    </Col>
                </Row>
                <Row>
                
                <Col md={12}><Form.Control type="input" ref={(input) => this.getTitle = input} value={this.props.payment} readOnly={true} placeholder="" /></Col>
              </Row>
              <Row className="mt-2">
                <Col md={12} className="text-center">
                  <Form.Label>Payment  </Form.Label>
                </Col>
              </Row>
              <Row className="mt-2">
              
                <Col md={12}>
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="mr-2" aria-label="First group">
                        <Button onClick={() => this.props.dispatch({ type: 'ADD_PAYMENT', value: 50})}>50$</Button> 
                    </ButtonGroup>
                    <ButtonGroup className="mr-2" aria-label="Second group">
                        <Button onClick={() => this.props.dispatch({ type: 'ADD_PAYMENT', value: 100})}>100$</Button> 
                    </ButtonGroup>
                    <ButtonGroup  className="mr-2" aria-label="Third group">
                        <Button onClick={() => this.props.dispatch({ type: 'ADD_PAYMENT', value: 150})}>150$</Button>
                    </ButtonGroup>
                    <ButtonGroup  className="mr-2" aria-label="Four group">
                        <Button onClick={() => this.props.dispatch({ type: 'ADD_PAYMENT', value: 200})}>200$</Button>
                    </ButtonGroup>
                </ButtonToolbar>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col md={12} className="text-center">
                    <Form.Label>Select Product  </Form.Label>
                </Col>
              </Row>
              <Row className="mt-2">
                  <Col md={12}>
                    <ButtonGroup vertical className="ml-4 mt-4 w-100" >
                        {/* <ButtonGroup >
                            <Form.Control type="text" className="form-control-lg mb-2 " placeholder="" value="" />
                        </ButtonGroup> */}
                        <ButtonGroup >
                            <Button onClick={() => this.selectProduct('1')} className="btn btn-outline-secondary btn-lg py-3" variant="default" >1</Button>
                            <Button onClick={() => this.selectProduct('2')} className="btn btn-outline-secondary btn-lg py-3" variant="default" >2</Button>
                            <Button onClick={() => this.selectProduct('3')} className="btn btn-outline-secondary btn-lg py-3" variant="default" >3</Button>
                        </ButtonGroup>
                        <ButtonGroup >
                            <Button onClick={() => this.selectProduct('4')} className="btn btn-outline-secondary btn-lg py-3" variant="default" >4</Button>
                            <Button onClick={() => this.selectProduct('5')} className="btn btn-outline-secondary btn-lg py-3" variant="default" >5</Button>
                            <Button onClick={() => this.selectProduct('6')} className="btn btn-outline-secondary btn-lg py-3" variant="default" >6</Button>
                        </ButtonGroup>
                        <ButtonGroup >
                            <Button onClick={() => this.selectProduct('7')} className="btn btn-outline-secondary btn-lg py-3" variant="default" >7</Button>
                            <Button onClick={() => this.selectProduct('8')} className="btn btn-outline-secondary btn-lg py-3" variant="default" >8</Button>
                            <Button onClick={() => this.selectProduct('9')} className="btn btn-outline-secondary btn-lg py-3" variant="default" >9</Button>
                        </ButtonGroup>
                    </ButtonGroup>
                  </Col>
              </Row>
              <Row className="mt-2">
                <Col md={12} className="text-center">
                    <Form.Label> Or Key Product Code  </Form.Label>
                </Col>
              </Row>
              <Row className="mt-2">
              <Col md={12}>
                    <ButtonGroup vertical className="ml-4 mt-4 w-100" >
                        <ButtonGroup >
                            <Form.Control type="text" className="form-control-lg mb-2" placeholder="" value={code} />
                        </ButtonGroup>
                        <ButtonGroup >
                            <Button onClick={() => this.selectProductKey('1')} className="btn btn-outline-secondary btn-lg py-3" variant="default" >1</Button>
                            <Button onClick={() => this.selectProductKey('2')} className="btn btn-outline-secondary btn-lg py-3" variant="default" >2</Button>
                            <Button onClick={() => this.selectProductKey('3')} className="btn btn-outline-secondary btn-lg py-3" variant="default" >3</Button>
                        </ButtonGroup>
                        <ButtonGroup >
                            <Button onClick={() => this.selectProductKey('4')} className="btn btn-outline-secondary btn-lg py-3" variant="default" >4</Button>
                            <Button onClick={() => this.selectProductKey('5')} className="btn btn-outline-secondary btn-lg py-3" variant="default" >5</Button>
                            <Button onClick={() => this.selectProductKey('6')} className="btn btn-outline-secondary btn-lg py-3" variant="default" >6</Button>
                        </ButtonGroup>
                        <ButtonGroup >
                            <Button onClick={() => this.selectProductKey('7')} className="btn btn-outline-secondary btn-lg py-3" variant="default" >7</Button>
                            <Button onClick={() => this.selectProductKey('8')} className="btn btn-outline-secondary btn-lg py-3" variant="default" >8</Button>
                            <Button onClick={() => this.selectProductKey('9')} className="btn btn-outline-secondary btn-lg py-3" variant="default" >9</Button>
                        </ButtonGroup>
                        <ButtonGroup >
                            <Button onClick={() => this.onClickDel()} className="btn btn-outline-secondary btn-lg py-3" variant="default" >Del.</Button>
                            <Button onClick={() => this.selectProductKey('0')} className="btn btn-outline-secondary btn-lg py-3" variant="default" >0</Button>
                            <Button onClick={() => this.onClickPurchase('9')} className="btn  btn-lg py-3" variant="primary" >Push</Button>
                        </ButtonGroup>
                    </ButtonGroup>
                  </Col>
              </Row>

              { receive != '' && <Row className="mt-2">
                                <Col md={6} className="text-center">
                                    <Form.Label>Receive </Form.Label>
                                </Col>
                                <Col md={6} className="text-center">
                                    <Card >
                                    <div className="text-center">
                                        <Card.Img variant="top" src={img} className="w-120" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{receive}</Card.Title>
                                    </Card.Body>
                                </Card>
                                </Col>
                            </Row> 
              }
            </Container>
        )
    }

}

const mapStateToProps = function(state) {
    return {
        payment: state.payment ,
        products: state.products,
    }
  }
  

export default connect(mapStateToProps)(Payment);