let coinId;
const bitcoin = async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc');
    const result = response.json();
    console.log(result);
    result.then(res => {
        console.log(res);
        res.forEach(element => {

            // console.log(element.id)
            document.getElementById("id").innerHTML += `<tr>
            <td class="tdnum" >${element.market_cap_rank}</td>
            <td ><img src="${element.image}" width="20" height="20" /> <a type="button"  value="${element.id}" id="coin" onclick="getData('${element.id}')" />${element.id}${"   -"}${element.symbol}</td>
            <td>$${element.current_price}</td>
            <td>$${element.high_24h}</td>
            <td>$${element.low_24h}</td>
            <td>$${element.price_change_24h}</td>
            <td>${element.market_cap_change_24h}</td>
            <td>${element.market_cap_change_percentage_24h}</td>
            
          </tr>`;

        });
    })


}
bitcoin();

const getData = (coin) => {
    console.log("LLLLLLLLLLLLLLLL"+coin)

    sessionStorage.setItem("coinId",JSON.stringify(coin))
    window.location.href="./sam.html"
}
const a=new Date
document.getElementById("live").innerHTML=new Date







