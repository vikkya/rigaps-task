import React from "react";

class Main extends React.Component {
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
                                            <label for="endClientName">End Client Name</label>
                                            <input type="text" className="form-control" id="endClientName" />
                                        </div>
                                        <div className="col-md-4">
                                            <label for="endClientWebsite">End Client Website</label>
                                            <input type="text" className="form-control" id="endClientWebsite" />
                                        </div>
                                        </div>
                                        <p>Add Another Client</p>
                                        <div className="form-row">
                                        <div className="col-md-4">
                                            <label for="clientName">Client Name</label>
                                            <input type="text" className="form-control" id="clientName" />
                                        </div>
                                        <div className="col-md-4">
                                            <label for="clientWebsite">Client Website</label>
                                            <input type="text" className="form-control" id="clientWebsite" />
                                        </div>
                                        </div>
                                        <p>Add Another Vendor</p>
                                        <div className="form-row">
                                        <div className="col-md-4">
                                            <label for="vendortName">Vendor Name</label>
                                            <input type="text" className="form-control" id="clientName" />
                                        </div>
                                        <div className="col-md-4">
                                            <label for="vendorWebsite">Vendor Website</label>
                                            <input type="text" className="form-control" id="vendortWebsite" />
                                        </div>
                                        </div>
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