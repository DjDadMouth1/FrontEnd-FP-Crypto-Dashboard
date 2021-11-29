
import React from 'react'


function CoinData({ data }) {
    console.log(data.name)
    return (
       <table className="Table">
           <tr>
                <th>
                    Rank
                    {data.name}
                    
                </th>
                <th>
                    Name
                </th>
                <th>
                    Price
                </th>
                <th>
                    Description
                </th>
                <th>
                    Circulating Supply
                </th>
                <th>
                    Symbol
                </th>
                <th>
                    Number of Exchanges
                </th>
                <th>
                    Number of Markets
                </th>
                <th>
                    Slug
                </th>
                <th>
                    UUID
                </th>
                <th>
                    WebsiteURL
                </th>
            </tr>
            
            COINDATA:
           
       </table>
    )
}

export default CoinData

//<Coin rank = {item.rank} name = {item.name} price = {item.price} description = {item.description} circulatingSupply = {item.circulatingSupply} symbol = {item.symbol} numberOfExchanges = {item.numberOfExchanges} numberOfMarkets = {item.numberOfMarkets} slug = {item.slug} uuid = {item.uuid} websiteUrl = {item.websiteUrl} />
/*{coinData.map(item => (
    <div key={item.id} className="Row">
                        
    </div>
))}*/