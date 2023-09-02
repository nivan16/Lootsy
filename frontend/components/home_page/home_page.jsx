import React from 'react';
import HomePageItem from './home_page_item';
import { Link } from 'react-router-dom';

class HomePage extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        //should this be specific products?
        this.props.requestProducts();
    }

    render(){
        if (!(this.props.products)){
            return null;
        }
        return (
            <>

                <div className='home-page-category-wrapper'>

                    <div className='home-page-title-wrapper max-body-width body-padding'>
                        <h1 className='home-page-title'>Loot that is meant for you.</h1>
                    </div>

                    <div className='home-page-categories max-body-width body-padding'>
                        <div className='home-page-category'>
                            <Link to='/'>
                                <div className='home-page-category-img-container'>
                                    <img src="https://www.japaneseswords4samurai.com/wp-content/uploads/2022/09/Witcher.jpg" alt="" />
                                </div>
                                <div className='home-page-category-img-description-container'>
                                    <p className='home-page-category-img-description'>
                                    Quality Weapons
                                    </p>
                                </div>
                            </Link>
                        </div>

                        <div className='home-page-category'>
                            <Link to='/'>
                                <div className='home-page-category-img-container'>
                                    <img src="https://i.etsystatic.com/10204022/r/il/3490cc/4854099637/il_300x300.4854099637_fxnf.jpg"/>
                                </div>
                                <div className='home-page-category-img-description-container'>
                                    <p className='home-page-category-img-description'>
                                        Enchanted Jewelry
                                    </p>
                                </div>
                            </Link>
                        </div>


                        <div className='home-page-category'>
                            <Link to='/'>
                                <div className='home-page-category-img-container'>
                                    <img src="https://i.etsystatic.com/43966513/r/il/501276/5172976012/il_300x300.5172976012_pviy.jpg"
                                        alt="Quality Armor Sale" 
                                    />
                                </div>
                                <div className='home-page-category-img-description-container'>
                                    <p className='home-page-category-img-description'>
                                        Sturdy Armor
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div> 

                <div className='home-page-grid-wrapper max-body-width body-padding'>
                    <div className='home-page-grid'>
                        {
                            this.props.products.map( (product, idx) => (
                                <HomePageItem key={product.id} product={product} idx={idx}/>
                            ))
                        }
                    </div>
                </div>

                <div className='home-page-about-container'>
                    <div className='home-page-about max-body-width body-padding'>
                        <div className='home-page-about-header'>
                            <h2>What is Lootsy?</h2>
                            <a href="#">Read our tale of origin here</a>
                        </div>

                        <div className='home-page-about-messages-container'>
                            <div className='home-page-about-message'>
                                <h3>A community doing good</h3>
                                <p>
                                    Lootsy is a global marketplace that allows
                                    people to buy, sell, and collect loot. We are a
                                    constantly expanding community that pushes for 
                                    positive change for all size guilds, people, and
                                    the planet.
                                </p>
                            </div>
                            <div className='home-page-about-message home-page-about-middle-message '>
                                <h3>Support Independent Adventurers</h3>
                                <p>
                                    Most large businesses stock up warehouses with loot
                                    from small guilds and independent adventurers. We
                                    instead simplify the process, helping you connect with
                                    these independent adventurers directly to find you unique
                                    loot.
                                </p>
                            </div>
                            <div className='home-page-about-message'>
                                <h3>Peace of mind</h3>
                                <p>
                                    Safety is the highest priority for our company.
                                    We contract adventurers with many guilds to ensure
                                    that all parties are safe as well as the loot being
                                    transported. If you ever need assistance, our team is
                                    always ready to help.
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