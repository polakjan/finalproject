<?php

namespace Database\Factories;

use App\Models\Entity;
use Illuminate\Database\Eloquent\Factories\Factory;


class EntityFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Entity::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        // $faker_address = \Faker\Factory::create('cs_CZ');
        // dd($faker_address->region());
        // $random = mt_rand(1, 100);

        return [
            //
            'name' => $this->faker->words(4),
            // 'region' => array($faker_address->region()),
            // 'region' => $this->faker->word(),
            'region' => 'czechia',
            // 'photo' => 'https://picsum.photos/id/' . $random . '/1200/900',
            'description' => $this->faker->paragraph(2),
            'created_at' => $this->faker->dateTimeThisDecade('+0 years'),
            'updated_at' => $this->faker->dateTimeThisDecade('+0 years')
        ];
    }
}
