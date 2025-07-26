<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FormController extends Controller
{
    public function show(){
        return Inertia::render('Form'); // Ensure 'Form' matches the exact name and path of your frontend component, e.g., 'Form' or 'Forms/Form'
    }
    public function submit(Request $request)
    {
        // Validate the incoming request data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
        ]);

        // You can process the form data here (e.g., save to the database)

        // Return an Inertia response, sending success message or data
        return redirect('/form-success')->with([
            'name' => $validated['name'],
            'email' => $validated['email'],
        ]);
    }
    
}
