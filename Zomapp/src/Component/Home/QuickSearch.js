import React,{Component} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay';

const quickUrl = "http://3.17.216.66:4000/quicksearch"

class QuickSearch extends Component {

    constructor(){
        super()

        this.state={
            mealType:''
        }
    }

    render(){
        return(
            <div id="quickSearch">
                <span id="quickHeading">Quick Search</span>
                <span id="quickSubHeading">Find Restaurants By Meal Type</span>
                <QuickDisplay mealData={this.state.mealType}/>
            </div>
        )
    }

    // api calling on page load 
    componentDidMount(){
        fetch(quickUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}

export default QuickSearch;