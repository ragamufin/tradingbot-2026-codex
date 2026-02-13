Bennet's Bitcoin Trading Challenge Channel
https://www.youtube.com/watch?v=A83XgUehR6M&ab_channel=BitcoinTradingChallenge

code is at 2:37 (https://youtu.be/A83XgUehR6M?t=157)

```js
// @version=5
// based on https://youtu.be/A83XgUehR6M?t=157
strategy("Bitcoin Trading Challenge - ChatGPT: Counter-Trading GOAT", shorttitle="BFX GOAT", overlay=true)
tradingPair = syminfo.ticker
longSymbol = tradingPair + "LONGS"
shortSymbol = tradingPair + "SHORTS"

longs = request.security(longSymbol, "1", close)
shorts = request.security(shortSymbol, "1", close)

longDelta = longs - longs[1]
shortDelta = shorts - shorts[1]

longCondition = ta.crossover(longDelta, -100) or ta.crossover(shortDelta, 100)
shortCondition = ta.crossover(longDelta, 100) or ta.crossover(shortDelta, -100)

if(longCondition)
    strategy.entry("long", strategy.long)
if(shortCondition)
    // strategy.entry("short", strategy.short)
    strategy.close_all("sell")

```