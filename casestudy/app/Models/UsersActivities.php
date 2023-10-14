<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsersActivities extends Model
{
    use HasFactory;

    protected $table = 'users_activities';
    protected $fillable = ['user_id','activity_id'];

}
