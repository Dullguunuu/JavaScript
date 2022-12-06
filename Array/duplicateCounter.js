let n = 12341;
let count = 0;


for( i = 0; i < n.length; i++)
{
    for( j = i + 1 ; j < n.length; j++)
    if (n[i] == n[j])
    count++;
    console.log(n[i] + ":", count)
}