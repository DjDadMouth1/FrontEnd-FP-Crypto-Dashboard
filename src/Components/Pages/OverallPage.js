import React from 'react'
import CoinData from '../CoinData';

class OverallPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.coin
        }
    }

    render () {
        return (
            <div id="modalTwo">
                <CoinData data={this.state.item} />
            </div>
        );
    }
    /*
    KEEPING THE ORIGINAL STUFF IN CASE THE NEW STUFF DOESNT WORK
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        var axios = require("axios").default;

        var options = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/coins',
            headers: {
                'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
                'x-rapidapi-key': '744989c25amsh1bcd9639b8a662cp14a242jsneff4a277f4ea'
            }
        };

        axios.request(options).then((response) => {

            this.setState({
                items: response.data.data.coins,
                isLoaded: true
            })
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading currencies...</div>
        }
        else {
            return (
                <div className="Bitcoin">
                    <div className="Container">
                        <CoinData coinData={items} />
                    </div>
                </div>
            )
        }
    }*/
}
export default OverallPage