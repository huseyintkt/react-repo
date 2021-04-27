import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import serialize from 'form-serialize'

class ProductList extends Component {

    state = {
        products : []
    }

    componentDidMount(){
        this.getProducts();
    }

    async getProducts(){
        const baseUrl = "http://localhost:3001/products";
        const response = await fetch(baseUrl);
        const data = await response.json();
        this.setState({
            products : data
        })
    }

    handleFormSubmitForAddProduct = (event) => {
        /**
         * Sayfanin yenilenmesini engeller.
         */
        event.preventDefault();
        /**
         * Form içerisindeki verileri nesne olarak almamızı sağlar.
         */
        const newProduct = serialize(event.target, { hash: true });
        this.addProduct(newProduct);
    }

    addProduct = async (product) => {
        await fetch('http://localhost:3001/products/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        })

        this.setState( state => ({
            products : state.products.concat([product])
        }))

        this.getProducts();
    }

    deleteProduct = async (product) => {
        const baseUrl = `http://localhost:3001/products/${product.id}`;

        await fetch(baseUrl, {
            method : "DELETE"
        })

        const newProductList = this.state.products.filter(
            p => p.id !== product.id
        );

        this.setState(state => ({
            products : newProductList
        }))
    }

    updateProduct = async (id, product) => {
        await fetch(`http://localhost:3001/product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        })

        this.getProducts();
    }

    render() {

        return (
        <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light container">
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <Link className="nav-link" to="/">Product List</Link>
                    <Link className="nav-link" to="/add-product">Add Product</Link>
                </div>
            </div>
        </nav>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    <div className="row">

                        {this.state.products.map(product => (

                        // <Product product={product} deleteProduct = {this.deleteProduct} />
                        <div className="col-md-6 mb-5">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>

                                <a href="#" onClick={() => this.deleteProduct(product)} className="btn btn-danger btn-sm mr-3">Delete</a>

                                <a href="/update-product/3" id={product.id} className="btn btn-primary btn-sm">Update</a>
                            </div>
                        </div>
                        </div>
                        ))}

                    </div>
                </div>

                <Switch>
                    <div className="col-md-4">
                        <Route path="/add-product" render={() => (
                            <>
                            <h3>Add Product</h3>
                            <hr />
                            <form onSubmit={this.handleFormSubmitForAddProduct}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" name="name" />
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <input type="text" className="form-control" name="description" />
                                </div>            
                                <button type="submit" className="btn btn-primary">Save</button>
                            </form>
                            </>
                        )}/>
                        <Route path="/update-product/:id" render={() => (
                           
                           <>
                           <h3>Update Product</h3>
                           <hr />
                           <form>
                               <div className="form-group">
                                   <label>Name</label>
                                   <input type="text" className="form-control" name="name" />
                               </div>
                               <div className="form-group">
                                   <label>Description</label>
                                   <input type="text" className="form-control" name="description" />
                               </div>            
                               <button type="submit" className="btn btn-primary">Save</button>
                           </form>
                           </>

                        )}/>
                    </div>
                </Switch>                
            </div>  
        </div>   
        </Router>
        )
    }
}

export default ProductList;