import React,{Component} from 'react';
import './listing.css';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/costFilter';
import Header from '../../header';

const url = "http://localhost:9700/restaurant?mealtype_id="

class ListingApi extends Component{
    constructor(props){
        super(props)

        this.state={
            restaurantList:''
        }
    }

    setDataPerFilter = (data) => {
        this.setState({restaurantList:data})
    }
    render(){
        return(
            <>
            <Header/>
              <div className="row">
                    <div id="mainListing">
                         <div id="filter">
                            <center>
                                 <h3>Filter</h3>
                            </center>
                            <hr/>
                            <CuisineFilter 
                            mealId = {this.props.match.params.mealId}
                            restPerCuisine={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                            <CostFilter
                             mealId = {this.props.match.params.mealId}
                             restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                        </div>
                        <ListingDisplay listData={this.state.restaurantList}/>
                    </div>
                </div>
            </>
        )
    }

    // call api with axios 
    componentDidMount(){
        let mealId = this.props.match.params.mealId;
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${url}${mealId}`)
        .then((res) => {this.setState({restaurantList:res.data})})
    }
    
}

export default ListingApi;