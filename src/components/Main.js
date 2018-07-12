import React from "react";

function Addclient() {
    return (
        <div className="form-row">
            <div className="col-md-4">
                <label htmlFor="clientName">Client Name</label>
                <input type="text" className="form-control" id="clientName" />
            </div>
            <div className="col-md-4">
                <label htmlFor="clientWebsite">Client Website</label>
                <input type="text" className="form-control" id="clientWebsite" />
            </div>
            <div className="col-md-2">
                <button type="button" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    )
}
function AddVendor() {
    return (
        <div className="form-row">
            <div className="col-md-4">
                <label htmlFor="vendortName">Vendor Name</label>
                <input type="text" className="form-control" id="clientName" />
            </div>
            <div className="col-md-4">
                <label htmlFor="vendorWebsite">Vendor Website</label>
                <input type="text" className="form-control" id="vendortWebsite" />
            </div>
            <div className="col-md-2">
                <button type="button" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    )
}
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addClient: [],
            addVendor: [],
        }
        this.createClient = this.createClient.bind(this);
        this.createVendor = this.createVendor.bind(this);
    }
    createClient() {
        this.setState((currenState) => {
            return {
                addClient: currenState.addClient.concat(<Addclient />)
            }
        })
    }
    createVendor() {
        this.setState((currenState) => {
            return {
                addVendor: currenState.addVendor.concat(<AddVendor />)
            }
        })
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row border border-light shadow">
                    <div className="col-12">
                        <a href="" className="float-right" data-toggle="modal" data-target="#addClients">
                            Edit
                        </a>
                        {/* modal for adding vendors and clients */}
                        <div className="modal fade" id="addClients" tabIndex="-1" role="dialog" >
                            <div className="modal-dialog modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title" id="endClient">Your link to End-Client</p>

                                    </div>
                                    <div className="modal-body">
                                        <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</small>
                                        <div className="form-row">
                                            <div className="col-md-4">
                                                <label htmlFor="endClientName">End Client Name</label>
                                                <input type="text" className="form-control" id="endClientName" />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="endClientWebsite">End Client Website</label>
                                                <input type="text" className="form-control" id="endClientWebsite" />
                                            </div>
                                        </div>
                                        <a href="javascript:void(0)" onClick={this.createClient}>Add Another Client</a>

                                        {this.state.addClient.map((client, index) => {
                                            return (<div key={index}>{client}</div>)
                                        })}
                                        <br />
                                        <a href="javascipt:void(0)" onClick={this.createVendor}>Add Another Vendor</a>
                                        {this.state.addVendor.map((vendor, index) => {
                                            return <div key={index}>{vendor}</div>


                                        })}
                                    </div>
                                    <div className="modal-footer justify-content-center">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancle</button>
                                        <button type="button" className="btn btn-primary">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-around align-items-center">
                        <div className="card shadow" >
                            <div className="card-body">
                                <p className="card-text">Google</p>
                            </div>
                        </div>
                        <div className="card shadow" >
                            <div className="card-body">
                                <p className="card-text">RIGAPS</p>
                            </div>
                        </div>
                        <div className="card shadow" >
                            <div className="card-body">
                                <p className="card-text">Accenture</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Main;