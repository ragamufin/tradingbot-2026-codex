* Starting fresh set the brick price and the direction
* Whenever we move x% in the same direction or 2*x% in the counter direction set the new brick flag
* if not new brick or brick in the same direction then do nothing otherwise
* check if one of the positions is in profit. Account for trading fees
  * in profit then close the side in profit, set avg price to zero, adjust the avg price for the other direction if any to account for the profit made
  * if not in profit and no position on the other side then open an equal size position. Set avg price for that position