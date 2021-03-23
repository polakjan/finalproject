<?php

namespace Database\Factories;

use App\Models\Comment;
use App\Models\Entity;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class CommentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Comment::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        return [
            //
            'user_id' => User::factory(),
            'entity_id' => Entity::factory(),
            'comment' => $this->faker->sentence(3),
            'created_at' => $this->faker->dateTimeThisDecade('+0 years')
        ];
    }
}
