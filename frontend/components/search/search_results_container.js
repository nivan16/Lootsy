import { connect } from "react-redux";
import { requestProducts } from "../../actions/product_actions";

import SearchResults from "./search_results";

const mapStateToProps = (state, ownProps) => ({
    products: state.entities.products,
    owners: state.entities.users
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    requestProducts: searchQuery => dispatch(requestProducts(searchQuery))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);