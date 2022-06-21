s = "siren"
t = "resinn"


def validate_anagram(s, t):
    s.split()
    t.split()
    matches = []
    for i in range(0, len(s)):
        t[i] in s and matches.append(t[i])
    "".join(s)
    "".join(t)

    if len(matches) == len(s):
        return True
    else:
        return False

print(validate_anagram(s, t))