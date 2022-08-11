import { connect } from "react-redux";
import { requestProducts } from '../../actions/product_actions';
import CategoryPage from './category_page';

const mapStateToProps = (state, ownProps) => {
    return {
    products: Object.values(state.entities.products),
    category: ownProps.match.params.category
}};

const mapDispatchToProps = dispatch => ({
    requestProducts: category => dispatch(requestProducts(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);