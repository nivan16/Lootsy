import React from 'react';
import { Link } from 'react-router-dom';

class CategoryPage extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.requestProducts(this.props.category.replaceAll('-',' '));
    }

    componentDidUpdate(prevProps){
        if( prevProps.match.params.category !== this.props.category){
            this.props.requestProducts(this.props.category.replaceAll('-',' '));
        }
    }



    render(){
        console.log("I've rendered!")
        //Figure out why the product isnt rendering even though it exists in the state
        if(!this.props.products[0]) return null;
        return (
            <div className='category-page-container'>
                <div className='category-page-index max-body-width body-padding'>
                    {
                        this.props.products.map( (product, idx) =>                        
                            <div className='category-page-product'>
                                <Link to={`/products/${product.id}`}>
                                    {product.name}
                                </Link>
                            </div>                        
                        )
                    }
                </div>
            </div>
        );
    }

}
export default CategoryPage;