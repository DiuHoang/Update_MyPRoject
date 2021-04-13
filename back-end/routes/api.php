<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\AuthenController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
// Service Page
Route::get('/product1', [ServiceController::class, 'getAllCategory1']);
Route::get('/product2', [ServiceController::class, 'getAllCategory2']);
Route::get('/product3', [ServiceController::class, 'getAllCategory3']);
Route::get('/product4', [ServiceController::class, 'getAllCategory4']);

// Nha hang - Cua hang
Route::get('/nhahang', [OrderController::class, 'getAllVendors']);
Route::get('/nhahang/detail/{id}', [OrderController::class, 'detailVendor']);
Route::get('/nhahang/detailProductVendor/{id}', [OrderController::class, 'detailProductVendor']);

// Order
Route::get('/product/detail/{id}', [OrderController::class, 'getProductDetail']);
Route::post('/product/orderlist', [OrderController::class, 'postOrderList']);

// Cart
Route::get('/cart', [OrderController::class, 'getCart']);
Route::get('/totalProduct', [OrderController::class, 'getTotalProduct']);
Route::get('/totalPrice', [OrderController::class, 'getTotalPrice']);
Route::delete('/cart/{id}', [OrderController::class, 'destroy']);

// API for Vendor
Route::get('/bill', [VendorController::class, 'getBarOrderChart']);

//CRUD Vendor
Route::get('showProVendor', [VendorController::class, 'getProductToUpdate']);
Route::post('addProVendor', [VendorController::class, 'store']);
Route::post('updateProVendor', [VendorController::class, 'update']);
Route::delete('deleteProVendor', [VendorController::class, 'destroy']);

// Test CRUD Vendor
Route::get('showProVendor', [VendorController::class, 'index1']);
Route::post('addProVendor', [VendorController::class, 'store1']);
Route::post('updateProVendor', [VendorController::class, 'update1']);
Route::delete('deleteProVendor', [VendorController::class, 'destroy1']);

// Authen
Route::get('getUser',[AuthenController::class,'getAccount']);
Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', [AuthenController::class, 'login']);
    Route::post('register', [AuthenController::class, 'register']);

    Route::group([
        'middleware' => 'auth:api'
    ], function () {
        Route::get('logout', [AuthenController::class, 'logout']);
        Route::get('user', [AuthenController::class, 'user']);
    });
});
