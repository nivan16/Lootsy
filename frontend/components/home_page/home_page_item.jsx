import React from "react";
import { Link } from "react-router-dom";

class HomePageItem extends React.Component{
    constructor(props){
        super(props);
    }

    imgSource(){
        switch (this.props.product.name) {
            case 'Arrow':
                return ['https://i.etsystatic.com/33058827/r/il/e5ac62/4020749003/il_340x270.4020749003_7skg.jpg', 'The tool used to attain a stand ability']
            case 'Old diary':
                return ['https://images-na.ssl-images-amazon.com/images/I/71FBoCJtNdL.jpg', "Dio's diary detailing how to attain an even greater power, which ultimately allowed Pucci to reset the universe and allow some to remember the entirety of their first life, and being able to change fate in the second universe"]
            case 'Weird mask':
                return ['https://i.etsystatic.com/32944134/r/il/f578c4/3555922910/il_1140xN.3555922910_co3c.jpg', 'Imperfect pillar men mask for attaining the ultimate life form']
            case 'Blue sword':
                return ['https://i.etsystatic.com/24130701/r/il/d34436/4020346851/il_1140xN.4020346851_607h.jpg', 'Master Sword']
            case 'Ocarina':
                return ['https://i.etsystatic.com/7573272/r/il/ab68cd/2324448702/il_794xN.2324448702_nol1.jpg', 'Ocarina of time']
            case 'Strong pouches':
                return  ['https://i.etsystatic.com/34463826/r/il/353034/3782570637/il_794xN.3782570637_8ici.jpg', 'Pokeballs!']
            case 'Beautiful restored blade':
                return ['https://www.japantrendshop.com/img/products/5802/5802-proplica-kyojuro-rengoku-replica-demon-slayer-sword-8.jpg', "Rengoku's nichirin blade"]
            default:
                break;
        }
    } 

    render(){
        const imgAndAlt = this.imgSource();
        return (
            <div className={`grid-brick grid-brick-${this.props.idx}`}>
                <Link to='/'>
                    <img src={imgAndAlt[0]} alt={imgAndAlt[1]} />
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