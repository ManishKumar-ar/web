function dateMethods() {
  const currentDate = new Date();                                    //Creates a new Date object with the current date and time.
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);                      // Changes the year to 2022.
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  //getTime(): Returns the number of milliseconds that have passed since January 1, 1970 (also called "Unix Epoch Time").
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  
 const newDate = new Date(2023, 8, 15        // Creating a new date
  console.log("New Date:", newDate);
}

// Example Usage for Date Methods
dateMethods();


//output
Current Date: Mon Sep 20 2024 16:14:23 GMT+0530 (India Standard Time)
Date: 20
Month: 9
Year: 2024
Hours: 16
Minutes: 14
Seconds: 23
After setFullYear: Mon Sep 20 2022 16:14:23 GMT+0530 (India Standard Time)
After setMonth: Mon Jun 20 2022 16:14:23 GMT+0530 (India Standard Time)
Time in milliseconds since 1970: 1655724863000
New Date: Sun Sep 15 2023 00:00:00 GMT+0530 (India Standard Time)


























/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
1. const currentDate = new Date();

Purpose: This creates a Date object representing the current date and time.
Output: It reflects the exact moment when the code is executed (e.g., "Mon Sep 20 2024 16:14:23 GMT+0530 (India Standard Time)").
Use Case: Useful for getting the current date and time for logging, timestamps, or any real-time applications.
  
2. const newDate = new Date(2023, 8, 15);

Purpose: This creates a Date object set to a specific date: September 15, 2023.
Note: The month is zero-indexed, meaning 8 corresponds to September (0 = January, 1 = February, ..., 8 = September).
Output: This will be a fixed date, e.g., "Fri Sep 15 2023 00:00:00 GMT+0530 (India Standard Time)".
Use Case: Useful for working with specific historical or future dates, such as deadlines, events, or birthdays.
