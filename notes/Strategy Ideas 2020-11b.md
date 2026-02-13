* Adjusting the renko charts to larger brick sizes now gives me the possibility of making larger and more consistent profits
* Diversifying across the indexes ALT, MID, SHIT, DEFI, PRIV, EXCH helps to reduce risk
* Having just read over my notes, while I am tempted to use this as a strategy,  it is clear that the way forward is using volatility + funding in order to achieve a low risk, high reward ( = great R:R) strategy and so I have to quell my greedy emotions and do what makes the most sense. Volatility + funding results in:
  * More macro level trades, larger profits locked in
  * Going for the funding means less in and out, once locked up, I look to add a new spread to the position rather than hustling to preserve the profit of one side of the current spread
  * Being able to sleep and give the market time, since it mostly does nothing, all the while collecting funding.

### Weapons
* Renko smoothes out price noise
* Bollinger bands show:
  * Trend (micro)
  * Volatility
  * Ranges
* MAs show:
  * Trend (macro and micro)
* Hedging some off at profit targets
  * Lock in profits while letting some run, less risk of giving back profits
  * Less need to be right on direction and consequently less stress watching the price going. This reduces the need to hustle for entries and exits, instead we only need to be right a few times
* Expiration gives a natural and periodic point to take profits
* Indexes:
  * Smooth out price noise of individual assets and gives you their overall trend making them less choppy in comparison and thus easier to trade
  * Move differently from each other such that they can 
    * offset losses from each other
    * Enter new trends earlier than each other
    * compound gains from each
    * * compound losses from each other
  * In the throes of larger trends they generally move together, taking turns leading. In bearish trends they usually are quicker to align to the downside than in bullish trends. In larger bullish trends they switch up often such that one turns bearish while the other remains bullish

### Strategy
* Trade btc and the indexes
* Determine the macro market cycle trend
* Use the weapons above to seek entries with the trend
* Enter on the perps vs expiring futures depending on which one consistency gives funding, i.e. long the expiring futures if the perps have shorts consistently paying longs
* At profit targets lock in part of the spread by taking the counter position in the perps or expiring futures
* Take losing exits if given using the weapons above
  * Do we exit if not at profit or lock in the loss  while collecting funding?
* Start a new leg of the spread once a new entry signal is given
* On entry signal only enter with a partial position as it is likely a retrace will give a better area to enter. Add the rest of the position there
* At expiration:
  * If the perp side is still on the side of the current signal:
    * keep it  until new profit target relative to where it is at expiration is hit. Close or hedge at profit target. 
    * Open position if counter signal is given
  * If not on the same side then:
    * immediately pick up an equal futures position
* At expiration, determine the current market cycle and close the perp position if the cycle has changed or funding has reversed trend. Seek to build a new position 
* Figure out the numbers and signals precisely. 
  * The numbers should be such that you do not lose your shirt at any point, especially in black swan events. On the contrary, in general those should be quite profitable. 
  * Do **NOT** trade this based on a general idea. Code it up as best as possible and backtest to see if the idea is correct and profitable. 
  * The strategy should give precise signals and amounts to follow. Do **NOT** stray from this. 
  * Trade the strategy for at least 20 trades
  * Any thought of deviation should be coded and backtested first before trading
  * **As soon as possible** -> AUTOMATE