import React,{Component} from 'react';
import ListingDisplay from './listingDisplay';
import './listing.css';
import axios from 'axios';
import CuisineFilter from '../filter/cuisineFilter';
import CostFilter from '../filter/costFilter';


const url = "http://3.17.216.66:4000/restaurant?mealtype_id="
class Listing extends Component {

    constructor(props){
        super(props)

        this.state={
            restaurantList:''
        }
    }

    setDataAsPerFilter=(data)=>{
        this.setState({restaurantList:data})
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
                        <CuisineFilter mealId={this.props.match.params.mealId}
                        restPerCuisine = {(data) => {this.setDataAsPerFilter(data)}}/>
                        <CostFilter mealId={this.props.match.params.mealId}
                        restPerCost = {(data) => {this.setDataAsPerFilter(data)}}/>
                       
                    </div>
                    <ListingDisplay listData={this.state.restaurantList}/>
                </div>
                
            </div>
        )
    }

    componentDidMount(){
        let MealId = this.props.match.params.mealId;
        axios.get(`${url}${MealId}`)
        .then((res) => {this.setState({restaurantList:res.data})})
    }

}

export default Listing;