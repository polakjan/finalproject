<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::create([
            'username' => 'martin',
            'role' => 'admin',
            'email' => 'martin@martin.com',
            'password' => 'martin'
        ]);

        User::create([
            'username' => 'michael',
            'role' => 'admin',
            'email' => 'michael@michael.com',
            'password' => 'michael'
        ]);

        User::create([
            'username' => 'sam',
            'role' => 'admin',
            'email' => 'sam@sam.com',
            'password' => 'sam'
        ]);

        User::create([
            'username' => 'andrew',
            'role' => 'admin',
            'email' => 'andrew@andrew.com',
            'password' => 'andrew'
        ]);

        User::factory(100)->create();
    }
}
