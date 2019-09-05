func removeVowels(S string) string {
	vowels := map[string]bool{
		"a": true,
		"e": true,
		"i": true,
		"o": true,
		"u": true,
	}

	var result string

	for _, char := range S {
		value := string(char)
		if !vowels[value] {
			result += value
		}
	}

	return result
}
