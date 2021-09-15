import React, { useState } from "react";
let StateConcept = () => {
    let [statesagar, setstatesagar] = useState(
        {
            msg: "hello"
        }
    )
    let goodmorning = () => {
        setstatesagar({
            msg: 'good morning....'
        })
    }
    let goodAfternoon = () => {
        setstatesagar({
            msg: 'good afternoon....'
        })
    }
    return (
        <React.Fragment>
            <section className="mt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body">
                                    <h3>{statesagar.msg}</h3>
                                    <button className="btn btn-primary btn-md" onClick={goodmorning}>good Morning</button>
                                    <button className="btn btn-primary btn-md" onClick={goodAfternoon}>Good Afternoon</button>
                                    <button className="btn btn-primary btn-md" onClick={() => {
                                        setstatesagar({
                                            msg: 'good evening...'
                                        })
                                    }}>Good evening</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )

}

export default StateConcept;
