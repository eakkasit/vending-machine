import { createStore } from 'redux'
import rootReducer from '../reducers'

var products = [
    {
        name:'Product 1',
        description:'',
        code:'',
        price:'100',
        src:'/',
        total:10,
    },
    {
        name:'Product 1',
        description:'',
        code:'',
        price:'100',
        src:'/',
        total:10,
    },
    {
        name:'Product 1',
        description:'',
        code:'',
        price:'100',
        src:'/',
        total:10,
    },
    {
        name:'Product 1',
        description:'',
        code:'',
        price:'100',
        src:'/',
        total:10,
    },
    {
        name:'Product 1',
        description:'',
        code:'',
        price:'100',
        src:'/',
        total:10,
    },
    {
        name:'Product 1',
        description:'',
        price:'100',
        src:'/',
        total:10,
    },
    {
        name:'Product 1',
        description:'',
        code:'',
        price:'100',
        src:'/',
        total:10,
    },
    {
        name:'Product 1',
        description:'',
        code:'',
        price:'100',
        src:'/',
        total:10,
    },
    {
        name:'Product 1',
        description:'',
        code:'',
        price:'100',
        src:'/',
        total:10,
    },
  ];
var payment = 100;
const initStore = () => {
    const store = createStore(rootReducer);
    store.dispatch(products);
    store.dispatch(payment);
    return store;
  };
  
export default initStore;