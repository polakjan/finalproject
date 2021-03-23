<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\Entity;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(100)->create();
        // Comment::factory(100)->create();
        Entity::factory(25)->create();
    }
}
