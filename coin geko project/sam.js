
const bitcoin=async()=>{
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${JSON.parse(sessionStorage.getItem("coinId"))}`);
    const result = response.json();
    console.log(result);
    result.then(res=>{
        console.log(res);

 console.log(res.market_cap_rank
    )
        console.log(res.image.small)
        console.log(res.name)
       console.log(res.symbol)
      
    
       
       console.log(res.market_data.low_24h.bmd
        )
       console.log(res.market_data.high_24h.bmd

        )
       console.log(res.market_data.market_cap.bmd)
       console.log(res.market_data.market_cap_change_24h)
       console.log(res.market_data.current_price.bmd )
       console.log(res.market_data.market_cap_change_24h_in_currency.bmd )
      
       console.log(res.description.en)

       document.getElementById("title").innerHTML=res.market_cap_rank
       document.getElementById("img").innerHTML=`<img src="${res.image.small}" "height="50",width="50" style="border-radius: 50%;" />`
       document.getElementById("name").innerHTML=res.name+"-"
       document.getElementById("sy").innerHTML=res.symbol
       document.getElementById("cprice").innerHTML="$"+res.market_data.current_price.bmd
       document.getElementById("low").innerHTML="$"+res.market_data.low_24h.bmd
       document.getElementById("high").innerHTML="$"+res.market_data.high_24h.bmd
       document.getElementById("mkcap").innerHTML="$"+res.market_data.market_cap.bmd
       document.getElementById("des").innerHTML=res.description.en
       document.getElementById("mkchange").innerHTML="$"+res.market_data.market_cap_change_24h_in_currency.bmd 




    })}
bitcoin();

const b=new Date
document.getElementById("live").innerHTML=new Date



