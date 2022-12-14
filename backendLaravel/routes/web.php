<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\AddressController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/addCustomers',[CustomerController::class,'getCustomer']);

Route::get('/addAddress/{id}',[CustomerController::class,'getAddress']);
Route::get('/getAddAddress',[CustomerController::class,'getAddressByCustomer']);
Route::get('/customers/store/address', [CustomerController::class,'store_Address']);
Route::get('/customers/store/customer', [CustomerController::class,'store_Customer']);
Route::get('customers', 'App\Http\Controllers\CustomerController@index');

Route::get('/addresses',[CustomerController::class,'getCustomers']);

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
Route::view('/{path?}', 'app');

