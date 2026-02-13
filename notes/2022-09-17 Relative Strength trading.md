2022-09-17 Relative Strength trading between alt/btc/eth/$

The idea here is to find a decent trend regime filter to say if one asset is overall bullish or bearish against another. With this we trade into that asset if it is also bullish against the base assets
* base assets are btc, eth and the $
* Let's take an example of say sol
  * if sol is bullish against eth and btc and the dollar then we would allocate into sol
  * if sol is bullish against eth but bearish against btc we would allocate to btc **if** btc is bullish against the $. If btc is bearish against the $ then we would stay with the $ since sol > eth, sol < btc, btc < $. It is possible that the regime filters for the various assets could have sol > $ but sol < btc and btc > $. In such a case we would still stay with the $
  * sol < eth > btc, eth > $ then we would allocate to eth
* between alts, let's say sol and avax
  * sol > eth > $, sol > btc > $, avax > eth > $, avax > btc > $, then we decide based on the regime filter of whether sol > avax or avax > sol
* Must also filter by liquidity (resting volume, recent volume)
* This is a simple elegant strategy that just on appearance it is worth codifying and testing the thesis
  * Since you need a smoothed way to measure which asset is stronger than another, it automatically keeps you in the strongest things when there are anything bullish
  * It catches the first movers from bearish to bullish
  * When to rebalance is clear and you always rebalance from weak to stronger
  * You also end up in btc, eth or $ at times
  * The main con is that there may be some chop here and there but overall it seems like the losses would be limited and "smart" bets compared to more complicated strategies
    * Possibly use thresholds to avoid whipsawing between assets
    * Possibly use thresholds of distance for both assets being compared so one or the other has to have had moved outside a threshold of % price change
    * Possibly keep a weighted track record between assets
    * Possibly only rebalance out of an asset if once in, it either falls against the $ OR on a time / distance schedule we rebalance to the current rankings if different
    * Possibly rebalance in chunks instead of all at once
  * It functions as:
    * trend following
    * mean reversion trading
    * relative strength / pairs trading
    * index investing
