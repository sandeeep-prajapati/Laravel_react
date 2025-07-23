<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        // Pass data to the Home page
        return Inertia::render('Home', [
            'message' => 'Welcome to the Home Page',
            'user' => [
                'name' => 'John Doe',
                'email' => 'johndoe@example.com',
            ],
        ]);
    }

    public function about()
    {
        // Pass data to the About page
        return Inertia::render('About', [
            'company' => 'Acme Corp.',
            'year' => 2025,
        ]);
    }
}