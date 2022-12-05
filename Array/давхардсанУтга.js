let array = [4, 2, 34, 4, 1, 12, 1, 4];

for (let i = 0; i < array.length; i++)
{
    if (Number(array.indexOf(toString(array[i]))) > 0)
    {
        console.log("давхардсан тоо байна")
    }
}