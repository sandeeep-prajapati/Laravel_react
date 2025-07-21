<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {

        return Inertia::render('SimplePage', [
            'message' => 'Welcome to the Products Page',
        ]);
    }
}
