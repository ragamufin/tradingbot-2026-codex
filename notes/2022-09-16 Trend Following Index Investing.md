The idea here is to do index investing when bullish 
* When markets were bullish, index investing was all the rage. This makes sense because you basically rebalance into strong stuff while the whole market rises. Now that the market is bearish, index investing has fallen out of vogue. Perhaps using a trend following strategy where we do index investing and rebalancing when bullish, we could make much profits
* bullish could be determined by some smoothing indicator that checks if the greater majority of the market is floating up. Not bullish if not, meaning we don't mark "bearish" or "choppy", just bullish or not
* What to do when not bullish?
  * nothing
  * shorting the index of weakest stuff
  * shorting the weakest and longing the strongest so that we play the spread and as things go back to bullish we close shorts and keep the longs. With this we would always be open to gaining from the strongest assets, even when at the bottom
* Staying in cash and conservatively market making
* Put option while continuing the strategy. With this we'd still have the strongest, even at bottom and so make the $ back we lost and then some, maybe even beating the premium paid for the option or even getting paid by the option and making $ or beating the market. Using a put option means we don't have to worry too much about the unlimited upside risk of shorting as we would be long only
* Have to clear my mind and perhaps think, what works best in non-bullish markets? However, perhaps biding time with some strategy while continuing the investing makes sense since you'd be catching the strongest stuff from the bottom

Created mockup of zairyu card natively in iOS and android that works with Line OCR. Other tweaks and fixes for 


### Code plan
* Get daily data for all assets
* Update MA's for each asset vs $
* * Figure out based on positions and capital, how many positions to allow
* Each day, take only the assets that:
  * Has an existing position
  * Meets a certain volume threshold
* Sort by ones that are in bull mode against usd
* Sort amongst the bullish ones by whether or not they are bullish against each other
* Of the available positions, allocate to the ones in the list that do not already have a position
* De-allocate from any that are no longer in the list
* If list is full and any of the other assets in the list are bullish against ones in the list, swap them out
