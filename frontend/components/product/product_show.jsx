import React from 'react'

class ProductShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.requestProduct(this.props.productId)
    }

    render() {
        if(!this.props.product) return null;

        return (
            <div className='product-show-container max-body-width body-padding'>
                <div>{this.props.product.name}</div>
                <div>{this.props.product.description}</div>
            </div>
        )
    }
};

export default ProductShow;
