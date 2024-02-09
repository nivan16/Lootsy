import { connect } from "react-redux";
import { requestProducts } from "../../actions/product_actions";
import HomePage from "./home_page";

const mapStateToProps = state => ({
    products: Object.values(state.entities.products)
});

const mapDispatchToProps = dispatch => ({
    requestProducts: homePageRequest => dispatch(requestProducts(homePageRequest))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);