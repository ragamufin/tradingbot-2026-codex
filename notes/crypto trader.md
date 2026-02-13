Kind of a bot you can setup on your smartphone, web or desktop.
- [ ] Ability to create stop limit orders on exchanges such as binance and kucoin
- [ ] stop-loss orders
- [ ] easy interface devoid of trader info simplifying the process of setting up orders
- [ ] Ability to make several orders at once having one or all executed based on certain conditions

For instance if XRP falls to $1.30 then buy. If BNB reaches $23 then sell. Have whichever occurs first happen but discard the other
- [ ] Chain trades, for instance tell it to:

Sell XRB if price reaches +$15
then
Buy XRB if price drops below -$5 market price at time of activation
- [ ] Ability to repeat trades
- [ ] Smart way to specify price for trading by using +/- amount or percentage
- [ ] Interface could be like IFTTT:

[action]  [crypto] [condition(s)…] [then / else]
**action:** BUY / SELL
**crypto:** the cryptocurrency the action should be taken on
**condition:** Optional. Can add multiple. [operator] [value]
**price direction:** Price is >= or <=
**value:** fixed price **or** #/% relative to current price
**then:** Optional. Add another trade to be activated after the current one has successfully executed.
Example:
[BUY] [XRB] [if price <= $15]
then
[SELL] [XRB] [if price >= 90% OR if price <= 10%]

- [ ] how to do trailing stop? How do we specify the +/- #/% to trail by keeping in mind that the price may barely cross our limit and come back before the limit by the trailing stop resulting in a price not as good as the one desired

### bittrex-sell-aid
github.com/Speedy765/crypto-helper-tools/tree/master/sell_aid_script
Tracks your current profit/loss in % based on a single buy order on a single coin. In this % the fee is already calculated and your amount of coins is checked for the current dump price in the orderbook

### zenbot
github.com/DeviaVir/zenbot
A command-line cryptocurrency trading bot using Node.js and MongoDB.
* Fully-automated technical-analysis-based trading approach
* Full support for GDAX, Poloniex, Kraken, Bittrex, Quadriga, Gemini, Bitfinex, CEX.IO and Bitstamp, work on further exchange support is ongoing.
* Plugin architecture for implementing exchange support, or writing new strategies
* Simulator for Backtesting strategies against historical data
* "Paper" trading mode, operates on a simulated balance while watching the live market
* Configurable sell stops, buy stops, and (trailing) profit stops
* Flexible sampling period and trade frequency - averages 1-2 trades_day with 1h period, 15-50_day with 5m period