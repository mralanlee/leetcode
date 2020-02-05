# Valid Parentheses

Initial take was not a great attempt.
It seemed easy to just check for cases like "()" or "()[]{}"
I initially created a map and looped over it and checked for either at the end of the string or next to it.

However, this didn't work well for "([{}])" type of cases.

Writeup in comments is a little bit more of a better explanation of how it should work
