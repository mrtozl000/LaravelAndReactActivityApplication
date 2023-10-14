<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/home', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::prefix('api/v1')->group(function () {
    Route::get('/activities', [\App\Http\Controllers\ActivityController::class, 'index']);
    Route::post('/join/activity', [\App\Http\Controllers\ActivityController::class, 'store']);
    Route::post('/check-user-in-join-activity', [\App\Http\Controllers\ActivityController::class, 'check']);
});

Route::get('/user-activities', [\App\Http\Controllers\ActivityController::class, 'getUserActivities'])->name('user.activity.list');

Route::get('activity/detail/{id}', [\App\Http\Controllers\ActivityController::class, 'show']);

require __DIR__.'/auth.php';
