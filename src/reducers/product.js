

const  productLists = [
    {
        name:'Fresh Lime',
        description:'',
        code:'1',
        price:'100',
        src:'/images/1.png',
        total:10,
    },
    {
        name:'Pineaple',
        description:'',
        code:'2',
        price:'100',
        src:'/images/2.png',
        total:10,
    },
    {
        name:'Cola',
        description:'',
        code:'3',
        price:'100',
        src:'/images/3.png',
        total:10,
    },
    {
        name:'Enegy drink',
        description:'',
        code:'4',
        price:'100',
        src:'/images/4.png',
        total:10,
    },
    {
        name:'Jungle drink',
        description:'',
        code:'5',
        price:'100',
        src:'/images/5.png',
        total:10,
    },
    {
        name:'Coconut water',
        description:'',
        code:'6',
        price:'100',
        src:'/images/6.png',
        total:10,
    },
    {
        name:'Soda',
        description:'',
        code:'7',
        price:'100',
        src:'/images/7.png',
        total:10,
    },
    {
        name:'Cola',
        description:'',
        code:'8',
        price:'100',
        src:'/images/3.png',
        total:10,
    },
    {
        name:'Fresh Lime',
        description:'',
        code:'9',
        price:'100',
        src:'/images/1.png',
        total:10,
    },
  ];

function products(state = productLists, action) {
    switch (action.type) {
        case 'UPDATE':
            return state.map((item) => {
                if (item.code === action.id) {
                    return {
                        ...item,
                        total: item.total-1,
                    }
                } else return item;
            })
        default:
            return state;
    }
}
  
export default products;
