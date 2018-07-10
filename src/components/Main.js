import React from "react";

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-12 border shadow h-50">
                        <div className="card shadow" style={{width: '18rem'}}>
                            <div className="card-body">
                                <p className="card-text">Google</p>
                            </div>
                        </div>
                        <div className="card shadow" style={{width: '18rem'}}>
                            <div className="card-body">
                                <p className="card-text">RIGAPS</p>
                            </div>
                        </div>
                        <div className="card shadow" style={{width: '18rem'}}>
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