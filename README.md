This project uses express framework and mongoose library . Mongo Db acts as the database . All the data stored in Mongo Cloud . In models folder , there will be Usermodel.js file where the schema is present . In task controller file , TaskController.js file contains the logic for 6 Api's and there was routes folder , containing UserRoutes.js for routing . Cors also used to allow origin from all IP .

#API'S

1 ) all users - https://mobiliscis-backend.onrender.com/api/users/ .

2 ) Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes” - https://mobiliscis-backend.onrender.com/api/users/api1 .

3 ) Male Users which have phone price greater than 10,000 - https://mobiliscis-backend.onrender.com/api/users/api2 .

4 ) Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name - https://mobiliscis-backend.onrender.com/api/users/api3 .

5 ) Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit - https://mobiliscis-backend.onrender.com/api/users/api4 .

6 ) Show the data of top 10 cities which have the highest number of users and their average income - https://mobiliscis-backend.onrender.com/api/users/api5 .


#ALL USERS

In this api we will be just getting all the records from the database . 

#API 1

Here we fetch data using $and , to get the income lower than $5 and have a car brand "BMW" or "Mercedes".

#API 2

We fetch data using $and to get the required data .

#API 3

In this API used regex expression to find the last_name starting with M .

#API 4

Used $and,$in,$or to get desired output.

#API 5

used aggregate , $group,$limit to get the required output .
