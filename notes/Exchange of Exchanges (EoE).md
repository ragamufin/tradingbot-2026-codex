* This idea is basically that users would sign up to our system in a secure way. Security is of the utmost importance here.
* They would then enter their api and secret keys for the various exchanges they are on.
* Our system would then provide an exchange platform where by they would see their balances on each exchange in an intuitive fashion and allowing them to sell / buy from other users, across all the exchanges that the users are on.
* If user a puts an order to buy 100 coin x in btc.
  * He specifies which exchanges he wants the purchased coins on.
  * The amount they can buy will be determined by the balances they have of btc on each exchange they registered their api key for that have a btc / coin x pairing.
  * Their order would show up in the collective order book and matched against users selling coin x.
  * Where the prices match, a check is done by the various users who are in the batch of coin x being sold to see which ones are on mutual exchanges with the buyer.
  * From each seller (fifo) their coins are deducted up until the matching amount for the buy is filled.
  * The coins are withdrawn sent to our wallet. Once we receive the coins from both users we then send them to the buyer and seller(s) to the addresses of the exchanges they specified in their orders.
  * Where mutual shared exchanges allow for transfers, a transfer is made instead of a withdrawal and deposit