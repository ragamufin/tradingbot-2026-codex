* So the idea is to be a certain ratio in the market, say 50-50 asset to stables
  * This ratio could be dynamic based on some factor such as if we are above or below a 200 MA or better yet, depending on the direction of the pnl of the strategy
* We rebalance whenever the price hits any of the 4 lines of the bollinger bands
  * We can experiment with only buying if below the middle line and only selling if above or vice versa
* We only sell positions that are in profit
  * Should test also not doing this
* Lastly we need to test using the bottom of the bands as 0 so that the ratio doesn't make our positions so small
  * We can test having some upper limit as well in order to further increase how much we put on each trade
  * Instead of making the top side causing us to go completely to stables it could say have a max of 70% stables. In this way we are playing the range of the bands, i.e. mean reversion but still opening ourselves up for upward trends
  * Likewise the same can be done to the downside, have a max of 70% asset
* We can couple this with other strategies such as my short the futures strategy where we could use leverage by having everything in the asset, short half in order to make the stable side of the pot and then short and close the appropriate amount as the lines are hit
  * We gain some premium from the contango on the futures

So I'm trying to code this on TradingView. Since we can't do partial exits I need to break up the orders into many smaller ones. Below, let's try to figure out the algo for this as well as the overall logic of the strategy in general ->
* Firgure out the smallest amount to place on an order based on the commission and min tick size
* Place as many orders to buy the 50% as necessary, leaving 50% in cash
* Place sell orders on the upper lines
  * Recalculate on each tick
  * Only sell from orders that are in profit and have gains > commission
* Place buy orders on the lower lines
  * Maybe only buy the middle and upper lines if we have orders that closed above it or vice versa. Otherwise we can say only buy the lower 2 lines