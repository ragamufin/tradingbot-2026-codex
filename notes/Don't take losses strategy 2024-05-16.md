### Thesis
* The greater majority of trades would eventually be able to close in profit
* So is there a way to trade opening yourself up to these stat and take advantage of it?
* This strategy idea explores this thesis

### The Strategy
* Position size. Split funds into buckets for an asset. Let's say 10
* Take buy signals with only 1 spot of the buckets, it going to zero is the risk as you will never sell it at a loss so size accordingly
* If sell signal comes but would put at a loss, don't take it. Only take sell signals that are in profit
  * A calculation of pnl of all open positions for that pair can be kept and used to take signals whereby you sell only the portion that would make a profit. So while any 1 trade might not be in profit when a sell signal is given, combined they have a different average cost and a partial close can be in profit
* Have a threshold of distance (and time maybe) that multiple buys cannot be taken within
  * Let's say you buy a price *p* and threshold is *t*%
  * No further buys can be done in the range (*p* - *t*%) < p < (*p* + *t*%)
* Use across pretty much any strategy or combo thereof
### Pros
* Used with any strategy
* High win-rate
* Realized pnl never goes down
* No stops, risk is managed by position sizing
### Cons
* No stops
* small profit per trade
* unrealized pnl all over the place
### Notes
* Might be ideal on strategies that stay in the market such as say ETH/BTC instead of $ because the tide of the market going up might be a bias that saves even losing trades
  * However a coin could underperform for a long time, forever even and those trades may never exit in profit
  * A possible solution to this is to diversify greatly. So if funds are divided into 10 for any pair, have at least 10 pairs, with the understanding that you could be down on 10% of your account if a pair just never comes back
  * If we use pairs vs the dollar then we lose this relative value proposition because we would be flat whenever we sell, possibly missing out on the market. Avoiding certain trades here and there then would make this less profitable. Using volatile pairs functions instead as just a buy and hold but grinding out relative value profits here and there
* Must be back-tested to see if it works at all, the shape of returns / losses, parametrization, etc. This shouldn't be ventured into without full and thorough back-tests to really see if this strategy is appealing. I've often thought of and even tried in some ways similar ideas and I think the best part of testing this would be to put the idea to rest finally. Also, I'm quite sure that building/testing exactly this kind of a strategy would bring up quite a few other ideas and techniques
* Stats can be kept not just on any individual pair level but across the entire portfolio and signals taken/avoided, profit taking, etc. can be decided at a portfolio level
  * For instance, if we are allowed up to 10 trades on a pair and we have 10 pairs then we are splitting our funds into 100 buckets
  * However, managing things over a portfolio level means we may set a portfolio threshold of say 3 whereby we can not have more than 3 open trades in the same range. This range would be price normalized

