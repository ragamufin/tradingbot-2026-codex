### The basic idea
* Most of the time the market chops, however we don't want to miss trends
* So let's say we keep at minimum 33% of the account at all times in the asset. The rest in $
* The $ portion will trade chop, mean reversion style so that at most we will be 66% in asset and 33% in $ at minimum
* Find a decent way to trade chop, it doesn't have to be perfect since we always have some of the asset in reserve so that on the upside we are always exposed even though it may only 33% exposure. With the way crypto runs, it should still be making $ and even in trending price action, the mean reversion / chop part will still be trading and picking up pips here and there. Given that most of the time the market does nothing, this is a simple way to ensure are strategy is focussed mostly on the more abundant opportunity
* The trend trading portion is automatic as a result of the chop trading portion seeing as how we ride or die with the market 66% at most
* The chop trading can take cues from trend stats in order to know where to trade, how often and how wide. Time and distance
* Can also check volatility / momentum as a regime filter to widen orders or avoiding trading altogether. Volatility can be using implied volatility as well or using the weekly ranges from friktion / DOVs
* Can employ:
  * ATR to make things adjust
  * ATR can somehow establish renko-style bricks to establish direction
  * ATR can also determine how wide to make bands. Think in reverse though, when bearish, the lower band is farther away, when bullish, the upper band is farther away. However test both
  * Using the simple MA trend idea, bull/bear could be established by a close on red above the MA and a close on green below. The bands could flow from this MA
  * Could use renko bricks as the base to avoid noise. Come up with a custom ATR then that is calculated by the time it takes to paint a new brick versus how far a regular candle travels for each tick of time
  * BB bands. Closing above would be bullish, sloping upward, etc. Depending on the deviation factor it could serve as the band we trade within, however how would we do the reverse style wherein tighter BB means we widen the trades and wider / trending BB means we tighten?
* Look into whether or not we can do a multiple of the trading fee as a minimum for distance between trades. That way  each profitable closed trade gets a little more than the fee so that we can have bids and offers as close to the price action as possible while still making profit. The idea here is to go for smaller margins but more frequent trades. Seeing crypto go back and forth over and over the short, medium and even long term over the same prices, well, there's gotta be mad $ to be made there no?
* Look into using constant mix as the means of trading chop. With this we would be able to trade within the band (or even down to zero) and also have a reasonable way to take losses
* Look into having a target number of buys and sells per x hours or bricks. The idea here is if we are below the target number of closed trades then we would tighten our spread, if we are above then we would widen them. Would need to give room to not max out trades and we want to make sure trades are being closed so we have to try not to get a bunch of buys and no sells but go for being relatively equal. If this can be done right it could become **the** way to make the strategy "adapt" to price action


### Further considerations
* Incorporate momentum? Here we calculate how fast price is moving relative to history, maybe an oscillator. Widen bids and offers when price is running
* Possibly have a regime filter to lower how much chop trading we are doing and allocate more towards trend. Currently I don't think I need to worry about this until I have more data and can fathom a way to do it. My hypothesis though is that simple trumps complete
* Does this make sense to do in non-cash pairs like say eth/btc?
* Simulate this strategy across multiple assets and possibly multiple time frames
  * Have a weighting criteria to pick say 3 of the assets that make the most R:R from this strategy over some lagging smoothed score calculation
  * When an asset enters the top by score that is not already one of the ones being traded, rebalance to switch to it only if a certain threshold of difference between the two scores has been met
  * Look into differences between a one-time rebalance or say using 3's to rebalance in batches by when new signals are hit, that way we give some time to confirm that we do have a new leader. This of course means that we could be trading more than the targeted amount of assets while we are rebalancing
  * See if it makes sense to do the above also for time frames
  * See if it makes sense to combine or alternate with non-cash pairs like eth/btc. It may be that if you include btc and eth pairs in the set that even if the market is falling, one of these pairs might beat $ pairs by virtue of the fact that it is gaining more of each asset within the choppy price action

### Inputs
* fee
* targetFeeMultiple
* minCashPercent
* minPositionSize
* ATR?
* BB?
* Renko?

### State
* Order
  * id
  * entryPrice
  * amount
  * capital
* initialCapital
* capital
* assetAmount
* assetCapital
* buynhodlAmount
* buynhodlCapital
* numOpenOrders
* openProfit
* openProfitPercent
* netProfit
* netProfitPercent
* equity
* equityPnl
* equityPnlPercent
* realizedPnl
* realizedPnlPercent

### Pseudo-code
* if newly opened or closed trades
  * update order matrix
* update orders
