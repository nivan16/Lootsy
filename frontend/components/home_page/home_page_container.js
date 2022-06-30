import { connect } from "react-redux";
import { requestProducts } from "../../actions/product_actions";
import HomePageIndex from "./home_page_index";

const mapStateToProps = state => ({
    products: Object.values(state.entities.products)
});

const mapDispatchToProps = dispatch => ({
    requestProducts: () => dispatch(requestProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageIndex);