import React from "react";
import { Link } from "react-router-dom";

class HomePageItem extends React.Component{
    constructor(props){
        super(props);
    }

    imgSource(){
        return ['https://i.etsystatic.com/37862971/r/il/ad8eba/5557104233/il_794xN.5557104233_bzr3.jpg', "mushy badge"]
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