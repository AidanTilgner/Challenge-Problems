/*

You are given an array prices where prices[i] is the price of a given stock on
the ith day.

You want to maximize your profit by choosing a single day to buy one stock and
choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot
achieve any profit, return 0.



Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit =
6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because
you must buy before you sell. 

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

*/

#include <iostream>
#include <vector>

class Stock {
    public: 
        std::vector<int> prices;
        int MaxProfit() 
        {
            std::vector<int> prices = this->prices;
            int profit = 0;
            std::cout << prices.size() << std::endl;

            for(int i = 0; i < prices.size(); i++)
            {
                std::cout << "Cycle One Index: " << i << std::endl;
                std::cout << "Prices size: " << prices.size() << std::endl;
                for (int j = i; j < prices.size(); j++)
                {
                    std::cout << "Cycle Two Index: " << j << std::endl;
                    std::cout << "Prices size: " << (prices.size() - 1) - i << std::endl;
                    if ((prices[j] - prices[i]) > profit) {
                        std::cout << "New Profit!\n";
                        std::cout << "i: " << i << std::endl;
                        std::cout << "j: " << j << std::endl;
                        std::cout << "Buy: " << prices[i] << "\t Sell: " << prices[j] << std::endl; 
                        profit = prices[j] - prices[i];
                        std::cout << "profit: " << profit << std::endl;
                    }
                }
            }  

            return profit;
        }
};

int main ()
{
    Stock stock;

    // Initialize a list in stock
    stock.prices = std::vector<int> {7,6,4,3,5};
    std::cout << stock.MaxProfit() << std::endl;
    // Expected output is 5

    return 0;
}