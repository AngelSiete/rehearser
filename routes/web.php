<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('/faq', 'faq')->name('faq');
Route::inertia('/login', 'auth/login')->name('login');
Route::post('/login', LoginController::class)->name('login.attempt');