console.log("Hellow World!\n-------\n");


// Exercise 1 Section
for(let i =1;i <=100;i++)
{
  if (i%2!==0) {
    console.log(i);}
}


// Exercise 2 Section

for (let i=1;i<=100;i++){
    if (i%3==0 && i%5!==0){
        console.log(i, "FIZZ");
    } else if (i%5==0 && i%3!==0){
        console.log(i, "BUZZ");
    } else if (i%3==0 && i%5==0){
        console.log(i, "FIZZBUZZ");
    }
}


// Exercise 3 Section

//Ex1 with a while loop
let i = 1;
while (i<=100){
if (i%2!=0){
    console.log(i);
}
i++;
}

//Ex 2 with a while loop
let i = 1;
while (i<=100){
    if (i%3==0 && i%5!==0){
        console.log("FIZZ");
    } else if (i%5==0 && i%3!==0){
        console.log("BUZZ");
    } else if (i%3==0 && i%5==0){
        console.log("FIZZBUZZ");
    }
    i++;
}

//Exercise 4 Section
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let progressTracker=false;
for (let i=0;i<=n;i++)
{
    if (i==value){
        console.log("Found Value!");
        progressTracker=true;
        break;
    }
}
if (progressTracker = false){
    console.log("Did not find value");
}

//Exercise 5 Section
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 1) + 1); // creates a random number between 1 and 1000
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 1000

for (let i = start;i<=end;i++){
    if (i % fizzDivisor ==0 && i%buzzDivisor !=0){
        console.log("FIZZ");
    } else if (i % fizzDivisor !=0 && i%buzzDivisor ==0){
        console.log("BUZZ");
    } else if (i % fizzDivisor ==0 && i%buzzDivisor ==0){
        console.log("FIZZBUZZ");
    }
}


