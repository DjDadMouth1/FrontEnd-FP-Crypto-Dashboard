import React from 'react';
import Coin from '../Coin/Coin';


class Dashboard extends React.Component {
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
            console.log(response.data.data.coins);

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
                <div className = 'MainDashboard'>
                    
                    <ul>
                        {items.map(item => (
                            <div key={item.id}>
                                <Coin name = {item.name} price = {item.price}/>
                            </div>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default Dashboard;