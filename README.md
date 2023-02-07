# onlinemenu-mmzeer

Food Delivery App - React Frontend & Laravel Backend
---
## Introduction 
This is a Food Delivery App that has a React frontend and a Laravel backend. The app allows users to order food online from different restaurants and receive delivery at their doorstep.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

 ## Prerequisites
Node.js and npm installed on your local machine.
Laravel 9.40.1 and PHP 8.1.10 or higher installed on your local machine.

 ## Installing
Follow these steps to install and run the project on your local machine:

1.	Clone the repository:
```
cd ~/
mkdir onlinemenu-mmzeer
cd onlinemenu-mmzeer
git clone https://github.com/Muna-Zeer/onlinemenu-mmzeer.git
```
2.	Change into the project directory:
```
 cd  onlinemenu-mmzeer.
```
3. Install the React frontend dependencies:
```
 cd reactfrontend
 npm install
```            
4. Start the React frontend:
```
npm start
```
5. Install the Laravel backend dependencies:
```
cd  backendLaravel.
composer install.
```
6. Set up the Laravel environment variables:
```
cp .env.example .env
```
7. Generate an encryption key for Laravel:
```
 php artisan key: generate
```
8. Run the migrations:
```
 php artisan migrate
```
9. Start the Laravel backend:
```
 php artisan serve
```

## Built With:
```
React - The front end framework
Laravel - The backend framework
```
## Author:
Muna &&Manar Zeer-onlineMenu 


       
