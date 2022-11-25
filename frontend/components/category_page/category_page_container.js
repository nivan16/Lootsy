import { connect } from "react-redux";
import { requestProducts } from '../../actions/product_actions';
import CategoryPage from './category_page';

const mapStateToProps = (state, ownProps) => ({
    products: state.entities.products,
    users: state.entities.users,
    category: ownProps.match.params.category
});

const mapDispatchToProps = dispatch => ({
    requestProducts: category => dispatch(requestProducts(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);