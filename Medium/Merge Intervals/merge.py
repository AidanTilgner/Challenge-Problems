# TODO: Make this faster

def mergeIntervals (intervals):
    nonOverlapping = intervals.copy()
    prevPass = len(nonOverlapping)
    while True:
        prevPass = len(nonOverlapping)
        for i in range(0, len(nonOverlapping)):
            for j in range(0, len(nonOverlapping)): 
                if j == i:
                    continue
                if(j >= len(nonOverlapping) or i >= len(nonOverlapping)):
                    break
                print("I: ", i, " J: ", j)
                print(nonOverlapping[i], nonOverlapping[j])
                if (nonOverlapping[i][1] >= nonOverlapping[j][0] and nonOverlapping[i][0] <= nonOverlapping[j][1]):
                    new = [
                        nonOverlapping[i][0] if nonOverlapping[i][0] < nonOverlapping[j][0] else nonOverlapping[j][0], 
                        nonOverlapping[j][1] if nonOverlapping[j][1] > nonOverlapping[i][1] else nonOverlapping[i][1]
                    ]
                    print("Worked", new)
                    nonOverlapping[i:i + 1] = [new] 
                    print("removing index: ", j)
                    print("Before: ", nonOverlapping)
                    nonOverlapping[j:j + 1] = []
                    print("After: ", nonOverlapping)
                else: 
                    print("Didn't pass")
        if (len(nonOverlapping) >= prevPass or len(nonOverlapping) == 0):
            break
    return nonOverlapping


print(mergeIntervals([[1, 4], [0, 4]]))