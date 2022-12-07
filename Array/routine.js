let activities = [
["Ажил", "идэх", "ярилцах", "Тоглох", "Унтах"],
[10, 1, 2, 3 , 8],
[]
]

console.table(activities)

for (i = 0; i < activities[1].length; i++)
{
    activities[2][i]=Math.ceil((activities[1][i] * 100)/24) + '%';
}

console.table(activities)

