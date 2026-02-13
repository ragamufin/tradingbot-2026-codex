### goals
build the thing you find yourself needing
As good as block folio minus the bad = awesome
as informative as coin stats but purtier and less clutter

### features
- [ ] multiple portfolios, not like block folio with one list and not like delta with a main list and a watchlist. No, multiple portfolios
- [ ] Must have really robust way to watch crypto, be able to see how their price changes from WHEN you started watching them
- [ ] like cryptoport, show the 24 hour percent change as well as any percentage change to your holdings in that crypto if you have any
  - [ ] clicking the percent will toggle between percent change and dollar amount change
- [ ] Integrate with the exchange apis so that there is less manual entry
- [ ] scan addresses you specify in order to get your account holdings
- [ ] price alerts, when crypto x goes above price y or below price z
- [ ] multiple currencies
  - [ ] be able to see your entire portfolio in that currency
  - [ ] alerts in different currencies
  - [ ] easily toggle the currency anywhere… coin stats does this nicely but still you have to cycle through each by tapping. Should be a tap then list to choose from with favorites at the top
- [ ] mobile, desktop and web (react-native handles that all anyway with little code repetition)
- [ ] Handle fees smartly, like delta does
- [ ] 24 hour change always displayed but also high/low, market volume, cap
- [ ] show the high_low_volume over a selectable timespan unlike block folio which always just shows the 24 hour change
- [ ] show what part of the world is doing the bulk of trades right now
- [ ] need to be able to know the actual conversion between currencies for the moment a trade was done or let the person specify the price in the currency of their choice
- [ ] Allow them to enter by price per coin or by total paid for the batch
- [ ] smart way to display multiple transactions but grouping them by default so if you bought ICX multiple times you’d see your average price and the percentages based on that but be able to also see them individually
- [ ] like block folio you should be able to pick the exchange to get the price from for individual coins (transactions?)
- [ ] readable candlestick graphs
- [ ] pump and dump notification when a crypto is rising like mad or the contrary
- [ ] market rocket / rise notification when the market overall is rising quickly
- [ ] no sign up required but available if you’d like to sync your changes across devices or participate in the social aspects
- [ ] No subscription fee but rather one set price but ample free features that this isn’t one of them trial or severely crippled apps.
  - [ ] People would rather pay a one-time fee than a monthly subscription for something like this
  - [ ] api should be free because this is our killer feature over the other apps
  - [ ] no ads
- [ ] deduct from btc_eth_bch_ltc_x balance?

### social
- [ ] leaderboard for public profiles. Maybe limit it to coins added by api in portfolios so that users can’t back enter stuff
- [ ] allow people to “follow” others like friends but especially leaders on the leaderboard person so that they get notified when that person makes trades
- [ ] groups?
- [ ] only percentages. So we see the percentage gained in their portfolio, we see what percent of their portfolio each coin holds (pie chart), etc. but never any actual dollar amounts

### other
- [ ] maybe download outside the app store similar to how binance does it to prevent us from being under the thumb of any organization such as Apple or Google.

This would also mean not giving Apple 1/3
Customers would buy the app with crypto
- [ ] currency converter
- [ ] upcoming pre-ICOs/ ICOs / token sales

### issues
- [ ] how to do graphs, maybe canvas? gotta be a few libraries out there.
  - [ ] candlestick, line, volume
- [ ] smart handling of when a exchange is down, maybe make it a feature as a report on whether the exchange is up or not
- [ ] smart handling of data to avoid load on our own servers
- [ ] Where do we draw the line between free and paid version?
  - [ ] dollar cap amount for portfolios using the api
    - [ ] Usually more advanced tech users therefore more likely to need this and understand its benefits
    - [ ] would automatically aggregate your portfolio so there’s no way to really cheat without NOT having an exchange or wallet address automatically added to your portfolio
  - [ ] social should be free as this is also a killer feature distinguishing us from others

### batshit crazy!
- [ ] Have our own ICO and coin to be able to quit our jobs and fund development by releasing a beta with a taste of all the sweetness so people get excited and by our token
- [ ] our coin comes from part of our profits
- [ ] leaders would get staggered amounts of said coin or some shit where we give the coin to the community for some merit on their parts
- [ ] perhaps following a leader means you pay them (in our coin) some tiny amount if you make a trade on their portfolio and it pays off for you. Not sure how we’d enforce that