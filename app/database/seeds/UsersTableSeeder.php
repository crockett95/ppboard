<?php

// Composer: "fzaninotto/faker": "v1.4.0"
use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder {

    public function run()
    {
        $user = new User;
        $user->username = 'admin';
        $user->email = 'crockett95@gmail.com';
        $user->password = 'password@1';
        $user->password_confirmation = 'password@1';
        $user->confirmation_code = md5(uniqid(mt_rand(), true));

        if(! $user->save()) {
            Log::info('Unable to create user '.$user->username, (array)$user->errors());
        } else {
            Log::info('Created user "'.$user->username.'" <'.$user->email.'>');
        }

        $faker = Faker::create();

        foreach(range(1, 10) as $index)
        {
            $password = $faker->bothify('????????##');
            User::create([
                'username'  => $faker->userName,
                'email'     => $faker->email,
                'password'  => $password,
                'password_confirmation' => $password,
                'confirmation_code'     => md5(uniqid(mt_rand(), true))
            ]);
        }
    }

}
