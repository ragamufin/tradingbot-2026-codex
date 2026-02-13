https://www.youtube.com/watch?v=e8geZBKG28U
* Listening to Jean Francois on episode 453: The Art of Scalping on Desire To Trade podcast
* He has this idea of working losing trades into profit
* Doesn't always work but maybe there's an edge in not just thinking binary loss / profit, R:R and win rate
* Instead, when the switch goes off that this trade is unlikely to go your way, you enter into management mode
* You may already be in a losing position, however you may be in a winning position. Normally this switch would then mean take profits. However, is it any different when in a losing position. You could scale out just as you might when taking profits
* The idea of management mode is to actually have a strategy for making sure you can float drawdown on that losing trade and have funds available to then work a strategy specifically for these kinds of positions to give yourself a shot or two or three to turn it into break even or profit. Obviously there also needs to be a threshold by which you call it quits
* Watching the video you see he's flipped the usual 1:x R:R and instead risks losing a larger amount in order to make a much smaller amount. He has a stop way off but his take profit very close. Hence a higher win-rate. When he loses though, he can lose big. So position sizing is key. However, his "management" way also means he's probably not just continually loading up as it goes against him. He loads up, closes parts in profit, reloads, rinse and repeat. Systematizing something like this would have so much room to play, test and improve
* If you think about it, this is why we have profit targets, to secure profits
* What is a profit target but the fact that at that point you'll be winning and you think it's enough and don't want to give it back? 
* In a bull market, longs tend to be the ones who lose the most and likewise in a bear market, the shorters
* There are nasty counter-trend moves alla time and that's why trend following and just trading is difficult. The market rarely moves in straight lines. The market moves in waves
* How many times have you guessed right (or wrong) and seen a massive move come to be then almost always it immediately pulls back and by a lot?
* It's what drives the urge to call tops and bottoms
* It's what makes trading so difficult, these waves and the chop, chop in time, chop in distance, over and over with very little in the way of clear consistency where you look at a price action series and say on this condition do this and on that condition do that and then have a 99% win-rate with a 1% max drawdown
* You end up instead just working trade-offs. It's all about the trade-offs
* So, lean into the probabilities. It is **unlikely** to go in a straight line. You don't need to cut your losses in that exact moment
* Stops are just a form of position sizing
* Can you fashion a strategy in order to be statistically in line with the market based on the following:
  * It chops most of the time
  * Losing trades **often** become winning trades and vice versa. After all, we don't buy and then go immediately into profit and make a bee-line to profit target, get out and the market immediately then goes down. Hell nah
  * Stop hunts, once completed, are often great trades to then go in exactly the direction of the trades that got hunted
  * Position size with or without stops but in a manner that allows for trades that are deemed offsides to not sink the ship
  * Take advantage of the fact that even when you win, you lose, that a move against you still goes in waves and will give you a better exit often. Again, not always but often
* Based on all the above here are some things I know right now based on my current main strategy for trading the market
  * There is usually a better exit from the times I get out
  * There is likely a means to take profit throughout the winners that still allows for capturing trends but giving back less of them
  * It doesn't have to be a complex strategy, in fact, I doubt any super complex gathering of stats and the like is going to be feasible let alone be worth the effort
  * Re-balancing seems to somehow feel "hot" when I try to think through this. Interesting right? Instead of a trade being win/loss and run/cut, a simple re-balancing to lump losses with winners and winners with losers and then managing that curve, that seems difficult but not impossible. Lots of thought and testing would be needed but if it works, the resulting algo would be actually be a simple one. Furthermore, it's one that lends itself very much to algorithmic trading as opposed to discretionary
  * My hedging strategy that doesn't take losses was an attempt at this idea. In the end though, hedging is the same as taking losses and buying anyway and this strategy's "edge" if there was one was about how it tries to keep its size and carry losers until it can turn them into profit
  * What I've learned from demo trading on Deribit also supports this. 
    * I've seen that it's not swinging for the fences that gets you mad gainz. Rather, it's incremental taking of trades that seem too out of sync with the market over and over again
    * They add up and every now and then one of them wins big when big moves come
    * It's messy
    * The market most often gives you the most meaty trades counter-trend. While everyone is panicking to get out or in, the other way gets real cheap. They inevitably are getting out at the wrong time. Isn't that the very thesis here. Those contracts they rushed to sell/buy on the expensive/cheap make mad money over and over. To the point now where in that account, you think less about what's the trend, where are we going, what's my bias but instead wow, you're selling that for that price!?? I'll take it, doesn't cost me shit to own that and I'm totally ok losing that amount of money. Yet, these very trades are the ones that have buttered the bread of that account ya?
  * It's the downturn in the market that gets folks. We know this quite well that 50% down now means you need 100% gain to get back to where you were. The same applies across the board. If however you can carry the size for a while longer and take smaller losses instead of larger ones in the heat of the move, I bet that
    * You'd have lots of what would have been losers go to break-even or win
    * You'd have a better R:R
    * You'd have a much greater win-rate
    * You'd have a smoother pnl curve (upward yea?)

### Next steps
* Think through the above, remember, be in line with the way the market behaves
* Don't be too binary and discrete. Instead be flexible, fractional, taking off, adding, over time  trying to bend your positions to be in line with whatever the market is doing
* This might be a candidate for AI, however we wouldn't reach for that right away. The basics of the strategy need to worked out and tested. AI would only come later to see if we can't offload the complexity and performance while eeking out better gainz and smaller losses
* With the current trend following strategy, a simple idea is instead of partitioning funds across each "position". Always balance across the portfolio. I'm doing that for buys but what if you do it for sells as well? That means if you have 1h, 4h and 1d sol streams and one says sell, you sell only up to as much as 1/3rd of the sol versus all of that specific position. If it ends up that you aren't selling that entire position then you'd consider the remainder as part of the other two positions. Then test that and see what it tells you. 
  * Also test multi-asset so if you are doing 1h, 4h, 1d btc, sol and eth then when one gives a sell signal, calculate what the new state of the portfolio should be based on how many are in and out and how much $ is in each. Then sell accordingly:
    * Keep any of that sol that needs to be in the other sol positions, consider them to actually be apart of those positions
    * Sell into btc and eth what should be re-balanced to them. You may have to go through $ first
    * Make sure to accurately capture average cost, pnl, net_profit etc. with this rebalancing on sell



