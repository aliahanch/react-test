import React, {Component} from 'react';
import {storeProducts , detailProduct} from "./data";

const ProductContext = React.createContext();

class Context extends Component {
    state={
        products:[],
        detailProduct:detailProduct,
        cart:[],

        cartSubTotal:0,
        cartTax:0,
        cartTotal:0

};
    componentDidMount() {
        this.setProducts()
    };

    getItem = (id) =>{
      const product = this.state.products.find(item => item.id === id);
      return product;
    };

    setProducts = () =>{
        let tempPro =[];
        storeProducts.forEach(i =>{
            const singleI = {...i};
            tempPro = [...tempPro,singleI];
        });
        this.setState(()=>{
            return {products:tempPro}
        });
    };

    hDetail = (id) => {
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct:product};
        })
    };

    addToCart = (id) =>{
       let tempPro = [...this.state.products];
       const index = tempPro.indexOf(this.getItem(id));
       const product = tempPro[index];
       product.inCart = true;
       product.count = 1;
       const  price = product.price;
       product.total = price;
       this.setState(
            {product:tempPro , cart:[...this.state.cart,product]}
       );

    };

    inc = id =>{

        let tempCart = [...this.state.cart];
        const selectPro = tempCart.find(i=>i.id ===id);

        const index = tempCart.indexOf(selectPro);

        let product = tempCart[index];
        product.count = product.count +1;
        product.total = product.count * product.price;

        this.setState({cart:[...tempCart]})
    };

    dec = id =>{
        let tempCart = [...this.state.cart];
        const selectPro = tempCart.find(i=>i.id ===id);

        const index = tempCart.indexOf(selectPro);

        let product = tempCart[index];
        product.count = product.count - 1;


        if(product.count===0){
            this.remove(id);
        }else {
            product.total = product.count * product.price;
            this.setState({cart:[...tempCart]})
        }


    };

    remove= id =>{
        let tempPro = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(i => i.id !==id);
        const index = tempPro.indexOf(this.getItem(id));

        let removedPro = tempPro[index];
        removedPro.inCart = false;
        removedPro.count = 0;
        removedPro.total = 0;

        this.setState({cart:[...tempCart],products:[...tempPro]})
    };
    clear = id =>{
        console.log('clear'+id);
    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                hDetail:this.hDetail,
                addToCart:this.addToCart,
                inc:this.inc,
                dec:this.dec,
                remove:this.remove,
                clear:this.clear


            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {Context , ProductConsumer};