### Automated Trading - Overview
The idea here is to:
* trade the higher beta coins (ones that move quickly)
* that have high numbers in backtests
* maybe:
  * have metrics and setups that have higher R:R and win rates and scan for those on a basket of assets. Enter when the setups are triggered
  * something like the move weekly probably can be traded all the time
* BTC:
  * BTC seems to move slower but in the end the R:R is as good or even better than seemingly higher beta assets over the same time. Why is that?
    * Checking the same futures for BTC vs SHIT, it seems there are a decent more trades on BTC yet with about the same win rate and drawdown percentage. That doesn’t make any sense
    * Checking further, it seems the higher brick size cause more data to appear on the BTC Futures. When adjusting the start dates to be the same, the SHIT Futures do in fact get a lot more trades and make almost 3x the amount of money
    * So based on that it makes more sense **not** to trade BTC but rather higher beta assets
    * Test lowering the brick size and see how trendy it is, if it can come close or surpass the beta of other assets then it would be worth trading given bitcoins higher liquidity. However the same may apply to other assets as well, lowering their brick sizes may up the profit without any crazy drawdowns. Will need to research further. Also keep in mind the slippage on things like the SHIT Futures
  * Comparing the hedging strategy vs the regular one
    * Below are the numbers for each on BTC September Futures 


* Even though the hedging strategy doesn’t perform as well it:
  * Allows for accumulating the underlying asset by when we are switching long, use as much free cash to take the position and make up the difference with margin
  * Shorts on the other hand would be all margin and cover the entire account causing you to make $ on the downside while preserving the value of the underlying asset. 
  * We could release the long when switching short and so have a hybrid of the two strategies
  * We could sell our stake in the underlying when the hedging strategy only has a short
* All this being said, the hedging strategy is far more complicated and my take on it is that I’m trying to play the market perfectly vs the actual end goal of making $. If the regular strategy just makes more pure unadulterated $$$ then isn’t it best to stick to that. It is after all, way simpler. The desire to have coins for some eventual moonshot is irrational when considering that the regular strategy will catch a significant portion of any such event while also not being hampered when it comes to making money on the downside. 
* **ONLY** coins that have side perks are worth accumulating, for instance - platform coins. For other new hot shit coins, just point the bot at them to milk them while they are super profitable
* It may be that hedging using the regular strategy would produce better results, as they don’t exactly use the same logic. This should be tested as it is an easy test, the only difference between the two is that the regular strategy takes switches if a minimum number of profit bricks is achieved