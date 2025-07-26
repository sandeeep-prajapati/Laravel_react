<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\FormController;
use Inertia\Inertia;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/products', [ProductController::class, 'index'])->name('products.index');

Route::get('/form', [FormController::class, 'show'])->name('form.show');

Route::post('/submit-form', [FormController::class, 'submit'])->name('form.submit');
Route::get('/form-success', function () {
    return Inertia::render('FormSuccess', [
        'name' => session('name'),
        'email' => session('email')
    ]);
});
