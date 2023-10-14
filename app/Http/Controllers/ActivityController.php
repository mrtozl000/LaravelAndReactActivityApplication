<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\UsersActivities;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Activity::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $addActivity = UsersActivities::create(
            [
                'user_id' => $request->userId,
                'activity_id' => $request->id
            ]
        );

       if ($addActivity){
           return true;
       }

        return false;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $getActivityDetail =  Activity::find($id);
        return Inertia::render('ActivityDetail', ['DetailData' => $getActivityDetail]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function check(Request $request){
        $findUserInActivity = UsersActivities::where('user_id',$request->userId)->get();

        foreach ($findUserInActivity as $value){
            if ($value['activity_id'] == $request->id){
                return true;
            }
        }
        return false;
    }

    public function getUserActivities(){

        if (!isset(Auth::User()->id)){
            return Inertia::render('home');
        }

        $activities = UsersActivities::leftJoin('activity', 'activity.id','users_activities.activity_id')
            ->select('activity.*','users_activities.created_at as join_date')->where('user_id',Auth::user()->id)->get();

        return Inertia::render('Profile/UserActivities',['activities' =>$activities]);
    }
}
