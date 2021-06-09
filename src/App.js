import './App.css';
import Product from './components/Product/Product'
import Payment from './components/Payment/Payment'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Container>
        <Row className="p-4">
          <Col md={8} className="product-left">
            <Product />
          </Col>
          <Col md={4} className="product-right">
            <Payment />
          </Col>
        </Row>
      </Container>
        
    </div>
  );
}


export default (App);
