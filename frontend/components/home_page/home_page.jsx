import React from 'react';
import HomePageItem from './home_page_item';
import { Link } from 'react-router-dom';

class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.productSort = this.productSort.bind(this);
    }
    
    componentDidMount(){
        //should this be specific products?
        this.props.requestProducts({
            home: 'homePageRequest'
        });
    }

    productSort() {
        let sortedProducts = {};

        this.props.products.forEach( product => {
            sortedProducts[product.name] = product
        })

        return sortedProducts;
    }

    render(){
        
        if (!(this.props.products) || this.props.products.length === 0){
            return null;
        }

        let sortedProducts = this.productSort();
        /*  
            **Done!**
            I have to change categories, 

            **Done!**
            Fix formating of the seeds and reviews for the enter key spacing(probably with \n or something),

            Fix/add more reviews to the new products & changing the names of the lorumepsum & original u1-u10 users!

            **Done!**
            Also, just have the description to automatically be open, while still offering the user the ability to hide it.

            **Done!**
            I also need to limit the products called by the homepage on both the initial render/refresh as well as component did mount
                to *ONLY* the products actually being used. Currently, either the totality of the products table is being sent to the front end
                or the O(n)^2 algorithm (im pretty sure, or O(n)^n ) i currently have for tying the products to the application view is slowing down the initial hard render of the 
                website immensely

            Change Footer Icon from magic wand to cupcake

            Review Button Colors

            Product Pictures!!!

        */

        return (
            <>
                <div className='home-page-category-wrapper'>
                    <div className='home-page-title-wrapper max-body-width body-padding'>
                        <h1 className='home-page-title'>Keep calm and stay cute.</h1>
                    </div>

                    <div className='home-page-categories max-body-width body-padding'>

                        <div className='home-page-category'>
                            <Link to='/c/plushies'>
                                <div className='home-page-category-img-container'>
                                    <img src="https://i.etsystatic.com/35707709/r/il/600962/4059201713/il_fullxfull.4059201713_2fp9.jpg"
                                        alt="plushie" 
                                    />
                                </div>

                                <div className='home-page-category-img-description-container'>
                                    <p className='home-page-category-img-description'>
                                        Plushies
                                    </p>
                                </div>
                            </Link>
                        </div>

                        <div className='home-page-category'>
                            <Link to='/c/jewelry'>
                                <div className='home-page-category-img-container'>
                                    <img src="https://cdn.shopify.com/s/files/1/0520/4623/3759/products/Sakura-Mochi-Earrings-Flat_grande.png" alt="jewelry" />
                                </div>

                                <div className='home-page-category-img-description-container'>
                                    <p className='home-page-category-img-description'>
                                        Jewelry
                                    </p>
                                </div>
                            </Link>
                        </div>

                        <div className='home-page-category'>
                            <Link to='/c/keychains'>
                                <div className='home-page-category-img-container'>
                                    <img src="https://i.pinimg.com/originals/85/b6/d5/85b6d55597106e0ab5e6a7df8bb1399b.png" alt='keychains'/>
                                </div>

                                <div className='home-page-category-img-description-container'>
                                    <p className='home-page-category-img-description'>
                                        Keychains
                                    </p>
                                </div>
                            </Link>
                        </div>

                        <div className='home-page-category'>
                            <Link to='/c/gaming-accessories'>
                                <div className='home-page-category-img-container'>
                                    <img src="https://blog.displate.com/wp-content/uploads/2022/01/Pink-Gaming-Setup_39.jpg" alt='gaming accessories'/>
                                </div>

                                <div className='home-page-category-img-description-container'>
                                    <p className='home-page-category-img-description'>
                                        Gaming
                                    </p>
                                </div>
                            </Link>
                        </div>                        
                    </div>
                </div> 


                <div className='home-page-grid-wrapper max-body-width body-padding'>
                    <div className='home-page-grid-title-container'>
                        <h2 className='home-page-grid-title'>
                            popular gifts right now
                        </h2>
                    </div>

                    <div className='home-page-grid'>
                        {
                            this.props.products.map( (product, idx) => (
                                <HomePageItem key={product.id} product={product} idx={idx}/>
                            ))

                            // this.props.products.slice(0, 8).map( (product, idx) => (
                            //     <HomePageItem key={product.id} product={product} idx={idx}/>
                            // ))
                        }
                    </div>
                </div>
                
                <div className='home-page-editor-favorites-wrapper max-body-width body-padding'>
                    <div className='home-page-editor-favorites-title-container'>
                        <h2 className='home-page-editor-favorites-title'>
                            shop our favorites
                        </h2>

                    </div>
                    <div className='home-page-editor-favorites'>
                        <div className='home-page-favorite'>
                            <Link to={`/products/${sortedProducts['Sakura Resin Custom Keycaps']?.id}`}>
                                <div className='home-page-favorite-image-container'>
                                    <img src="https://i.etsystatic.com/15174309/r/il/266d99/3581177974/il_794xN.3581177974_308b.jpg" alt="mushy badge" />
                                </div>

                                <p className="home-page-favorite-price">
                                    {'$'+ sortedProducts['Sakura Resin Custom Keycaps']?.price}
                                </p>
                            </Link>
                        </div>

                        <div className='home-page-favorite'>
                            <Link to={`/products/${sortedProducts['Cute Gameboy Keychain']?.id}`}>
                                <div className='home-page-favorite-image-container'>
                                    <img src="https://i.etsystatic.com/14085821/r/il/623c62/3215094120/il_794xN.3215094120_ik2q.jpg" alt="mushy badge" />         
                                </div>
                                
                                <p className="home-page-favorite-price">
                                    {'$'+ sortedProducts['Cute Gameboy Keychain']?.price}
                                </p>
                            </Link>
                        </div>
                        
                        <div className='home-page-favorite'>
                            <Link to={`/products/${sortedProducts['Pink Cinnamoroll Phone Case']?.id}`}>
                                <div className='home-page-favorite-image-container'>
                                    <img src="https://i.etsystatic.com/41582462/r/il/426cf4/5389971410/il_794xN.5389971410_jfu0.jpg" alt="mushy badge" />
                                </div>

                                <p className="home-page-favorite-price">
                                    {'$'+ sortedProducts['Pink Cinnamoroll Phone Case']?.price}
                                </p>
                            </Link>
                        </div>

                        <div className='home-page-favorite'>
                            <Link to={`/products/${sortedProducts['Pink Kirby Mouse Pad']?.id}`}>
                                <div className='home-page-favorite-image-container'>
                                    <img src="https://i.etsystatic.com/42608576/r/il/69351f/5530269020/il_794xN.5530269020_fyza.jpg" alt="mushy badge" />
                                </div>

                                <p className="home-page-favorite-price">
                                    {'$'+ sortedProducts['Pink Kirby Mouse Pad']?.price}
                                </p>
                            </Link>
                        </div>

                        <div className='home-page-favorite home-page-last-favorite'>
                            <Link to={`/products/${sortedProducts['Pink and White Embroidered Floral Canvas Bag Set']?.id}`}>
                                <div className='home-page-favorite-image-container'>
                                    <img src="https://i.etsystatic.com/35871599/r/il/ab9a60/5308166034/il_794xN.5308166034_pvim.jpg" alt="mushy badge" /> 
                                </div>

                                <p className="home-page-favorite-price">
                                    {'$'+ sortedProducts['Pink and White Embroidered Floral Canvas Bag Set']?.price}
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='home-page-about-container'>
                    <div className='home-page-about max-body-width body-padding'>
                        <div className='home-page-about-header'>
                            <h2>What is Cutesy?</h2>
                            <a href="#">Read our wonderfully adorable story.</a>
                        </div>

                        <div className='home-page-about-messages-container'>
                            <div className='home-page-about-message'>
                                <h3>a community being cute</h3>
                                <p>
                                    Cutesy is a global online marketplace, where people come 
                                    together to make, sell, buy, and collect enchantingly 
                                    darling items. We’re also a community pushing for positive
                                    change for small businesses, people, and the planet. 
                                </p>
                            </div>
                            <div className='home-page-about-message home-page-about-middle-message '>
                                <h3>support independent cuties</h3>
                                <p>
                                    There’s no Cutesy warehouse – just millions of cuties
                                    selling the things they love. We make the whole process
                                    easy, helping you connect directly with our lovely
                                    makers to find something extraordinary.
                                </p>
                            </div>
                            <div className='home-page-about-message'>
                                <h3>peace of mind</h3>
                                <p>
                                    Your privacy is the highest priority of our dedicated 
                                    team. And if you ever need assistance, we are always
                                    ready to step in for support.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
};

export default HomePage;