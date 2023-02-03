<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\TableController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\CartController;
use App\Models\Table;
// header('Access-Control-Allow-Origin: *');
// //Access-Control-Allow-Origin: *
// header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE');
// header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Origin, Authorization');
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Route::get('/customer',[CustomerController::class,'allCustomers']);
Route::get('/getAddAddress',[CustomerController::class,'getAddressByCustomer']);
Route::get('/customers', 'App\Http\Controllers\CustomerController@index');
Route::post('/create_Table', 'App\Http\Controllers\TableController@store');
Route::get('/orders', 'App\Http\Controllers\TableController@index');
Route::get('/order', 'App\Http\Controllers\TableController@index');
Route::get('/customers/store/address', [CustomerController::class,'store_Customer']);
Route::get('/allCustomers',[CustomerController::class,'customers']);
// Route::get('/demo-url',  function  (Request $request)  {
//     return response()->json(['Laravel CORS Demo']);
//  });
 Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->customer();
});
Route::post('orders', function(Request $request) {
    $resp = Table::create($request->all());
     return $resp;
  
 });
 Route::get('/allOrder', 'App\Http\Controllers\ItemController@index');
 Route::get('/edit-order/{id}', [ItemController::class, 'edit']);
 Route::get('/select-items/{menuID}', [ItemController::class, 'selectMenuType']);
 Route::put('update-order/{id}', [ItemController::class, 'update']);
 Route::delete('delete-order/{id}', [ItemController::class, 'destroy']);
 Route::get('items/{page?}', 'ItemController@index');
 Route::get('Items/{id}', 'App\Http\Controllers\ItemController@show');
 Route::post('/create_order', 'App\Http\Controllers\ItemController@store');

Route::resource('customers',CustomerController::class);
Route::get('/itemsList','App\Http\Controllers\ItemController@ItemList');
Route::resource('items',ItemController::class);
Route::get('/selectItem', 'App\Http\Controllers\ItemController@selectItem');
Route::get('/selectSize', 'App\Http\Controllers\ItemController@filterSize');
Route::get('/filterCrust', 'App\Http\Controllers\ItemController@filterCrust');
Route::get('/filterPrice', 'App\Http\Controllers\ItemController@filterPrice');
Route::post('cart', 'CartController@store');