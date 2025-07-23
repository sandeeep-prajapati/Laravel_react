<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PageController extends Controller
{
    public function example()
    {
        return Inertia::render('Example', [
            'title' => 'Welcome to Inertia.js with React!',
            'description' => 'This is an example of passing data from Laravel to React.',
            'user' => [
                'name' => 'John Doe',
                'email' => 'john.doe@example.com',
            ],
        ]);
    }
}