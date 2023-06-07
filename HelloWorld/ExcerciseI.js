function getmyyear(age)
{
return 2023 - age;
}

function greeting(name,age)
{
   const yearborn = getmyyear(age);
   const message = "My name is " + name + " and was born in " + yearborn + ".";
   return message;
}

