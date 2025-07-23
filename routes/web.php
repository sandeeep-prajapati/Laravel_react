<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\FormController;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/submit-form', [FormController::class, 'submit'])->name('form.submit');
Route::get('/home', [FormController::class, 'index'])->name('home');