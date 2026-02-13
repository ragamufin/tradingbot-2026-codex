So I know that market making is a very profitable somewhat delta-neutral strategy. However the variables of it are overwhelming and in particular knowing when to move orders around, widen spreads etc. is quite difficult and there are lots of complicated algorithms out there for it

Taking a look at CellFi has given me an idea 
 https://cellfi.io/pools
https://docs.cellfi.io/
https://docs.cellfi.io/guide/create-samm-bot

### Strategy
* Use the work of others to define the ranges. So take Friktion, Katana, Psy, etc. where they pick covered call and cash secured put strike prices weekly, gives a weekly range. The Friktion crab strategy range could also be used. I can define the market making range weekly with some upper and lower limit around their strike prices
* Grid trade placing orders within that range
* Spreads must be wide enough so that each closed trade makes more than the fees
* Possibly use CEX as:
  * orders can be moved / canceled with no cost
  * fast 
  * less failed transactions
  * Easier and quicker to integrate with API’s
* An open question is is it necessary to modify the strategy based on volatility, i.e. widen spreads, widen range, etc. when there are larger, faster moves in the market