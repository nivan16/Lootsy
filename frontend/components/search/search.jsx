// Button in search bar will use history.push with {pathname: '/search',  search: ''} to change the url, and will also update the
// state using componentWillUpdate with the a boolean of this.props.location !=== prevProps.location or something similar.

// The backend request for the search parameters will be made by taking the query string (from location.search because history is mutable)the 
// and inserting it into a get request using JQuery. The backend controller, which will most likely be the Products Controller #index, will handle this request.
// The SQL command will need to search for products that have the word/phrase in the name (only?) and then return the list of products, or lack thereof.

// Then, Node.js (frontend) will receive the http response, put it through the redux cycle, and the products index component will automatically update
// accordingly with the products state being updated.
