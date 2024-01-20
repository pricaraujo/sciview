import React, {Component} from 'react'
import Card from './CardUI'

import img1 from './../../assets/taylor-fearless-tour.jpg'
import img2 from './../../assets/taylor-red-tour.jpg'
import img3 from './../../assets/taylor-redtour2.jpg'

class Cards extends Component {
    render() {
        return(
            <div className= "container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Fearless"/>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={img2} title="Red"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="Redtv"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards