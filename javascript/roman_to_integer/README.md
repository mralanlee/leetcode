# Roman To Integer

This is simply a mapping with some rules.

1. Create a map with integer to value
2. Since values like `IV = 4` require an evaluate of the value previous value in the string. Evaluation of the previous character to see if the current is less than the next.
3. Therefore invert the number (multiple by -1) and then add it to the accumulated total

