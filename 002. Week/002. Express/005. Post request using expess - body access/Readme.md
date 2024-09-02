How to make the Post request and get the body of the client

When we make a http request to the server then by default several things are send automatically.
here we write some code in the our body that server can see.

![image](https://github.com/user-attachments/assets/7d0dedf2-ba35-4684-bfdd-4d90ec5c61a4)


Now our server  -
Problem – 
 	the body of an HTTP request is received as a stream of data chunks.
  
 	The concept of data chunks in Node.js relates to how data is received over the network. When a client sends an HTTP request to a server, especially for POST, PUT, or PATCH requests, the data (like JSON, form data, or files) is not necessarily sent all at once.
 	Instead, it's sent as a series of smaller pieces called chunks.
  
 	Since data arrives in chunks, the server needs to assemble these chunks to reconstruct the full body. If your application tried to access the body before all chunks had been received and processed, you'd only get partial data, leading to incomplete or incorrect information being processed.
 	Handling streams and assembling chunks manually adds complexity to your code. You need to write logic to concatenate the chunks together and handle cases where chunks might not arrive as expected.
  
 	If something goes wrong while receiving chunks (e.g., the connection is lost, or the data is malformed), the server needs to handle these errors gracefully. Proper error handling adds additional code complexity.



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


![image](https://github.com/user-attachments/assets/3dc9f40d-2d81-401d-8a92-c7edb3e85e2f)

So we use middlewares to access the body 









Let run the server – 


![image](https://github.com/user-attachments/assets/2a9a2eb5-0179-42fa-932d-cac6900a7e5e)




When the client make a request http to the URL – then
![image](https://github.com/user-attachments/assets/d565124d-aa0b-468a-9ae9-48ddfadf40ac)


So this is the message that the client is got.



Now what the server can see in the body of http – 
![image](https://github.com/user-attachments/assets/2a4b0d3a-2a77-470d-b92e-542e2712be6f)








