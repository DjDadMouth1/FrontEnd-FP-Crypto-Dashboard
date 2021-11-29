import React from 'react'
import CoinData from '../CoinData';

class Bitcoin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            item: []
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
            for (let i = 0; i < response.data.data.coins.length; i++) {
                if (response.data.data.coins[i].name == this.state.name) {
                    this.setState({
                        item: response.data.data.coins[i]
                    })
                }
            }
            console.log(this.state.item)
           
        }).catch(function (error) {
            console.log(error);
        });
    }

    render () {
        return (
            <div>
                BITCOIN
                <CoinData data={this.state.item} />
            </div>
        );
    }
    /*constructor(props) {
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
export default Bitcoin