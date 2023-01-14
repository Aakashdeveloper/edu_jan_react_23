import React,{Component} from 'react';
import ListingDisplay from './listingDisplay';
import './listing.css'

class Listing extends Component {

    constructor(props){
        super(props)

        this.state={
            restaurantList:''
        }
    }

    render() {
        return(
            <div className="row">
                <div id="mainListing">
                    <div id="filter">
                        <center>
                            <h2>Filters</h2>
                        </center>
                        <hr/>
                       
                    </div>
                    <ListingDisplay listData={this.state.restaurantList}/>
                </div>
                
            </div>
        )
    }

}

export default Listing;