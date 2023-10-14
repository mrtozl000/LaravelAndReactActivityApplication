<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ActivitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker=Faker::create();
        for($i=0;$i<14;$i++){
            $title=$faker->sentence(6);
            $category=$faker->sentence(2);
            DB::table('activity')->insert([
                'id'=>rand(1,1000),
                'title'=>$title,
                'category'=>$category,
                'image'=>$faker->imageUrl(800, 400, 'cats', true),
                'content'=>$faker->paragraph(6),
                'slug'=>Str::slug($title),
                'created_at'=>$faker->dateTime('now'),
                'updated_at'=>now()
            ]);
        }
    }
}
