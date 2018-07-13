import React from "react";
import "./main.css";
//add client component returns new input fields
function Addclient(props) {
  return (
    <div className="form-row">
      <div className="col-md-4">
        <label htmlFor="clientName">Client Name</label>
        <input type="text" className="form-control" id="clientName" />
      </div>
      <div className="col-md-4">
        <label htmlFor="clientWebsite">Client Website</label>
        <input
          type="url"
          className="form-control"
          id="clientWebsite"
          placeholder="http://www.example.com"
          pattern="http://www.*.com"
        />
      </div>
      <div className="col-md-2">
        <button
          type="button"
          aria-label="Close"
          onClick={() => props.onClientRemove()}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
}

//add vendor component returns new input fields to add new vendor
function AddVendor(props) {
  return (
    <div className="form-row">
      <div className="col-md-4">
        <label htmlFor="vendortName">Vendor Name</label>
        <input type="text" className="form-control" id="clientName" />
      </div>
      <div className="col-md-4">
        <label htmlFor="vendorWebsite">Vendor Website</label>
        <input
          type="text"
          className="form-control"
          id="vendortWebsite"
          placeholder="http://www.example.com"
          pattern="http://www.*.com"
        />
      </div>
      <div className="col-md-2">
        <button
          type="button"
          aria-label="Close"
          onClick={() => props.onVendorRemove()}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
}
//update the client/vendor component
function updateClientVendor() {
  return (
    <div className="card shadow">
      <div className="card-body">
        <p className="card-text">Google</p>
      </div>
    </div>
  );
}
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addClient: [],
      addVendor: [],
      allData: []
    };
    this.createClient = this.createClient.bind(this);
    this.createVendor = this.createVendor.bind(this);
    this.removeClient = this.removeClient.bind(this);
    this.removeVendor = this.removeVendor.bind(this);
  }
  //Add new Client input fields method
  createClient() {
    this.setState(currenState => {
      return {
        addClient: currenState.addClient.concat(
          <Addclient onClientRemove={this.removeClient} />
        )
      };
    });
  }
  //creating new vendor input fields method
  createVendor() {
    this.setState(currenState => {
      return {
        addVendor: currenState.addVendor.concat(
          <AddVendor onVendorRemove={this.removeVendor} />
        )
      };
    });
  }
  //removing a client method
  removeClient(id) {
    this.setState({
      addClient: [] //should filter all the results expect the deleted client
    });
  }
  removeVendor() {
    this.setState({
      addVendor: [] //should filter all the results expect the deleted vendor
    });
  }
  updateData() {
      //update the grid with data filled in the form to the container
  }
  render() {
    const { addClient, addVendor, allData } = this.state;
    return (
      <div className="container mt-5">
        <div className="row border border-light shadow">
          <div className="col-12">
            <a
              href=""
              className="float-right"
              data-toggle="modal"
              data-target="#addClients"
            >
              Edit
            </a>
            {/* modal for adding vendors and clients */}
            <div
              className="modal fade"
              id="addClients"
              tabIndex="-1"
              role="dialog"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <p className="modal-title" id="endClient">
                      Your link to End-Client
                    </p>
                  </div>
                  <div className="modal-body">
                    <small>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris
                    </small>
                    <div className="form-row">
                      <div className="col-md-4">
                        <label htmlFor="endClientName">End Client Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="endClientName"
                          value="Google"
                          readOnly
                        />
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="endClientWebsite">
                          End Client Website
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="endClientWebsite"
                          value="http://www.google.com"
                          readOnly
                        />
                      </div>
                    </div>
                    <a href="javascript:void(0)" onClick={this.createClient}>
                      Add Another Client
                    </a>

                    {addClient.map((client, index) => {
                      return <div key={index}>{client}</div>;
                    })}
                    <br />
                    <a href="javascipt:void(0)" onClick={this.createVendor}>
                      Add Another Vendor
                    </a>
                    {addVendor.map((vendor, index) => {
                      return <div key={index}>{vendor}</div>;
                    })}
                  </div>
                  <div className="modal-footer justify-content-center">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Cancle
                    </button>
                    <button type="button" className="btn btn-primary" onClick={this.updateData}>
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-around align-items-center mb-5 update">
                    {allData.map((data, i) => {
                        return <div key={i}>{data}</div>
                        
                    })}
            <div className="card shadow">
              <div className="card-body">
                <p className="card-text">Google</p>
              </div>
            </div>
            <div className="card shadow">
              <div className="card-body">
                <p className="card-text">RIGAPS</p>
              </div>
            </div>
            <div className="card shadow">
              <div className="card-body">
                <p className="card-text">Accenture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
