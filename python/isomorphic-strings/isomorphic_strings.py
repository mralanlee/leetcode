class Solution(object):
    def isIsomorphic(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        dict = {}

        if len(s) != len(t):
            return False

        for i in range(0, len(s)):

            if not s[i] in dict:
            dict[s[i]] = t[i]
            else:
            if dict[s[i]] != t[i]:
                return False

        return len(set(dict.values())) == len(dict.values())
