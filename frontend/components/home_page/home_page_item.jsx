import React from "react";
import { Link } from "react-router-dom";

class HomePageItem extends React.Component{
    constructor(props){
        super(props);

        this.imgSource = this.imgSource.bind(this)
    }

    imgSource(){
        // return ['https://i.etsystatic.com/37862971/r/il/ad8eba/5557104233/il_794xN.5557104233_bzr3.jpg', "mushy badge"]
        switch(this.props.product.name){
            case "Kawaii Candy Snake Plushie Set":
                return ['https://i.etsystatic.com/28201213/r/il/852767/5700342097/il_794xN.5700342097_kgb4.jpg', 'snake plushie', 0]
            case 'Strawberry Cat Convertible Bag Set':
                return ['https://i.etsystatic.com/28319596/r/il/0b632a/4864776424/il_794xN.4864776424_1dan.jpg', 'strawberry set bags', 1]
            case 'Black Cat and Plant Huggie Earrings':
                return ['https://i.etsystatic.com/26353633/r/il/23653b/5255852841/il_1140xN.5255852841_irhv.jpg', 'cat plant earrings', 2]
            case 'Crochet Mushroom Crossbody Bag':
                return ['https://i.etsystatic.com/37862971/r/il/ad8eba/5557104233/il_794xN.5557104233_bzr3.jpg', "mushy badge", 3]
            case 'Flower Cow Acrylic Keychain Set':
                return ['https://i.etsystatic.com/29881738/r/il/669a63/5127921020/il_1140xN.5127921020_j0oa.jpg', 'flower cow keychain', 4]
            case 'Japanese Street Landscape Pink and Green Phone Case Set':
                return ['https://i.etsystatic.com/27829035/r/il/ef983b/5697628061/il_794xN.5697628061_6v48.jpg', 'japanese phone cases', 5] 
            case 'Lily of the Valley Jewelry Set':                
                return ['https://i.etsystatic.com/34927393/r/il/5febf7/4986113032/il_794xN.4986113032_5b1h.jpg', 'valley lilly necklace', 6]
            case 'Strawberry Earrings':
                return ['https://i.etsystatic.com/37278676/r/il/ccef91/4530389414/il_794xN.4530389414_g3x4.jpg', 'strawberry earrings', 7]
            default:
                return null;
        }
        // switch (this.props.product.name) {
            // case 'Arrow':
            //     return ['https://i.etsystatic.com/37862971/r/il/ad8eba/5557104233/il_794xN.5557104233_bzr3.jpg', 'The tool used to attain a stand ability']
            // case 'Old diary':
            //     return ['https://i.etsystatic.com/37862971/r/il/ad8eba/5557104233/il_794xN.5557104233_bzr3.jpg', "Dio's diary detailing how to attain an even greater power, which ultimately allowed Pucci to reset the universe and allow some to remember the entirety of their first life, and being able to change fate in the second universe"]
            // case 'Weird mask':
            //     return ['https://i.etsystatic.com/37862971/r/il/ad8eba/5557104233/il_794xN.5557104233_bzr3.jpg', 'Imperfect pillar men mask for attaining the ultimate life form']
            // case 'Blue sword':
            //     return ['https://i.etsystatic.com/37862971/r/il/ad8eba/5557104233/il_794xN.5557104233_bzr3.jpg', 'Master Sword']
            // case 'Ocarina':
            //     return ['https://i.etsystatic.com/37862971/r/il/ad8eba/5557104233/il_794xN.5557104233_bzr3.jpg', 'Ocarina of time']
            // case 'Strong pouches':
            //     return  ['https://i.etsystatic.com/37862971/r/il/ad8eba/5557104233/il_794xN.5557104233_bzr3.jpg', 'Pokeballs!']
            // case 'Beautiful restored blade':
            //     // Katara Necklace img below
            //     return ['https://i.etsystatic.com/37862971/r/il/ad8eba/5557104233/il_794xN.5557104233_bzr3.jpg', "Rengoku's nichirin blade"]
            // case 'Old powerful wand':
            //     return ['https://i.etsystatic.com/37862971/r/il/ad8eba/5557104233/il_794xN.5557104233_bzr3.jpg', "Elder wand"]
            // default:
            //     break;
        // }
    } 

    render(){
        const imgAltAndPlacement = this.imgSource();

        return imgAltAndPlacement !== null ? (
            <div className={`grid-brick grid-brick-${imgAltAndPlacement[2]}`}>
                <Link to={`/products/${this.props.product.id}`}>
                    <div className="grid-image">
                        <img src={imgAltAndPlacement[0]} alt={imgAltAndPlacement[1]} />
                    </div>
                    <p className="grid-item-price">
                        {'$'+this.props.product.price}
                    </p>
                </Link>
            </div>
        ) : (
            null
        )
    }
}

{/* <div className={`grid-brick grid-brick-${this.props.idx}`}>
    <Link to='/'>
        {this.props.product.description}
    </Link>
</div> */}

export default HomePageItem;