import React,{Component} from 'react';
import axios from 'axios';

const url = "http://localhost:9700/filter"

class CostFilter extends Component {
    filterCost = (event) => {
        let mealId = this.props.mealId;
        let cost = event.target.value.split('-');
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl;
        if(event.target.value === ""){
            costUrl = `${url}/${mealId}`;
        }else{
            costUrl = `${url}/${mealId}?hcost=${hcost}&lcost=${lcost}`;
        }
        axios.get(costUrl)
            .then((res) => {this.props.restPerCost(res.data)})
    }

    render(){
        return(
            <>
                <center>Cost Filter</center>
                <div style={{marginLeft:'15%'}} onChange={this.filterCost}>
                    <label className="radio">
                        <input type="radio" value="" name="cuisine"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="100-300" name="cuisine"/>100-300
                    </label>
                    <label className="radio">
                        <input type="radio" value="301-500" name="cuisine"/>301-500
                    </label>
                    <label className="radio">
                        <input type="radio" value="501-700" name="cuisine"/>501-700
                    </label>
                    <label className="radio">
                        <input type="radio" value="701-1000" name="cuisine"/>701-1000
                    </label>
                    <label className="radio">
                        <input type="radio" value="1001-3000" name="cuisine"/>1001-3000
                    </label>
                </div>
            </>
        )
    }
}

export default CostFilter;