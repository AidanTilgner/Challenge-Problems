#include <iostream>
#include <string>
#include <vector>

bool validate_anagram (std::string s, std::string t)
{
    std::vector<char> matches;
    for (int i : s) 
    {
        char letter = t[i];
        s.find(letter) && matches.push_back(letter);
    }
}