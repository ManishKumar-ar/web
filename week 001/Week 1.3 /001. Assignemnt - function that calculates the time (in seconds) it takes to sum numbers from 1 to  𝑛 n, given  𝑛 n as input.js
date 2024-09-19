function calculateSumTime(n) {
    let startTime = Date.now();  // Start time

    // Sum from 1 to n
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    let endTime = Date.now();  // End time
    let timeTaken = (endTime - startTime) / 1000; // Time in seconds

    console.log(`Sum from 1 to ${n}: ${sum}`);
    console.log(`Time taken to calculate: ${timeTaken} seconds`);
}


calculateSumTime(100);         // Sum from 1 to 100
calculateSumTime(1000000);     // Sum from 1 to 1,000,000
calculateSumTime(100000000);   // Sum from 1 to 100,000,000



//ouput
///// n = 100 ////////  
Sum from 1 to 100: 5050           
Time taken to calculate: 0.001 seconds


//ouput
///// n = 1000000 ////////  
Sum from 1 to 1000000: 500000500000
Time taken to calculate: 0.005 seconds


//ouput
///// n = 100000000 ////////  
Sum from 1 to 100000000: 5000000050000000
Time taken to calculate: X seconds (varies based on the machine)


