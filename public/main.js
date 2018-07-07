// APIs
var apiURL = 'https://blockchain.info/ticker';
var apiURL2 = 'https://api.coinmarketcap.com/v2/ticker/';
let buy = document.getElementById('buy')
let sell = document.getElementsByClassName('fa-dollar-sign')

buy.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('works')
  var cash = parseFloat(document.getElementById('cash').value)
  var currency = document.getElementById('currency').value
  // API for foreign currency to BTC
  $.ajax({
    url: apiURL,
    success: function(res){
      console.log(res);
      // Takes the value from the property 'buy' and stores it in the buyPrice variable
      var buyPrice = res[currency].buy
      // Takes the value from the property 'sell' and stores it in the sellPrice variable
      var sellPrice = res['USD'].sell
      // Calls on the bitcoin function, passes 'funds', 'buyPrice', 'sellPrice' as parameters
      bitcoin(cash, buyPrice, sellPrice);
    },
    error: function(er){
      console.log(er);
    },
  });
});
// Function that passes 'funds', 'buyPrice', 'sellPrice' as parameters
function bitcoin(funds, buyPrice, sellPrice){
  var coin = document.getElementById('coin').value
  // Converts any of the currency selections into bitcoin
  var btcValue = funds / buyPrice
  // Converst Bitcoin back into USD cash value
  var cash = btcValue * sellPrice
  // Calls on the options function/2nd API, passes the arguement cash
  options(cash, coin)
};

function options(usd, cc){
  console.log('work')
  $.ajax({
    url: apiURL2,
    success: function(r){
      console.log(r)
      let name = r.data[cc].name
      let symbol = r.data[cc].symbol
      let total = usd / r.data[cc].quotes.USD.price
      transfer(name, symbol, total)
    },
    error: function(err){
      console.log(err)
    },
  });
}

function transfer(name, symbol, total){
  fetch('wallet',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': name,
      'symbol': symbol,
      'total': total
    })
  }).then(function (response) {
    window.location.reload()
  })
}

Array.from(sell).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const symbol = this.parentNode.parentNode.childNodes[3].innerText
    fetch('wallet', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'symbol': symbol
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
