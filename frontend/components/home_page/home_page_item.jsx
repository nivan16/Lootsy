import React from "react";
import { Link } from "react-router-dom";

class HomePageItem extends React.Component{
    constructor(props){
        super(props);
    }

    imgSource(){
        switch (this.props.product.name) {
            case 'Arrow':
                return ['https://i.etsystatic.com/35709006/r/il/5a6e2e/4023274482/il_340x270.4023274482_d9nd.jpg', 'The tool used to attain a stand ability']
            case 'Old diary':
                return ['https://images-na.ssl-images-amazon.com/images/I/71FBoCJtNdL.jpg', "Dio's diary detailing how to attain an even greater power, which ultimately allowed Pucci to reset the universe and allow some to remember the entirety of their first life, and being able to change fate in the second universe"]
            case 'Weird mask':
                return ['https://i.etsystatic.com/32944134/r/il/f578c4/3555922910/il_1140xN.3555922910_co3c.jpg', 'Imperfect pillar men mask for attaining the ultimate life form']
            case 'Blue sword':
                return ['https://i.etsystatic.com/26444081/c/1148/912/38/0/il/6496d0/4004288203/il_340x270.4004288203_6jy4.jpg', 'Master Sword']
            case 'Ocarina':
                return ['https://i.etsystatic.com/7573272/r/il/ab68cd/2324448702/il_794xN.2324448702_nol1.jpg', 'Ocarina of time']
            case 'Strong pouches':
                return  ['https://i.etsystatic.com/36072165/r/il/e3e930/3927057514/il_340x270.3927057514_eb9z.jpg', 'Pokeballs!']
            case 'Beautiful restored blade':
                // Katara Necklace img below
                return ['https://i.etsystatic.com/23464188/c/3000/1688/0/0/il/40527b/2342132028/il_340x270.2342132028_buhs.jpg', "Rengoku's nichirin blade"]
            default:
                break;
        }
    } 

    render(){
        const imgAndAlt = this.imgSource();
        return (
            <div className={`grid-brick grid-brick-${this.props.idx}`}>
                <Link to={`/products/${this.props.product.id}`}>
                    <div className="grid-image">
                        <img src={imgAndAlt[0]} alt={imgAndAlt[1]} />
                    </div>
                    <p className="grid-item-price">
                        {'$'+this.props.product.price}
                    </p>
                </Link>
            </div>
        )
    }
}

{/* <div className={`grid-brick grid-brick-${this.props.idx}`}>
    <Link to='/'>
        {this.props.product.description}
    </Link>
</div> */}

export default HomePageItem;