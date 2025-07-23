<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        return Inertia::render('Home', [
            'message' => 'Welcome to the Home page!',
        ]);
    }

    public function about()
    {
        return Inertia::render('About', [
            'message' => 'This is the About page.',
        ]);
    }

    public function user($id)
    {
        // Fetch user details from the database
        $user = User::find($id);

        return Inertia::render('User', [
            'user' => $user,
        ]);
    }
}