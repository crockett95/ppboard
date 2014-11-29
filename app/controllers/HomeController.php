<?php

class HomeController extends BaseController {

    /*
    |--------------------------------------------------------------------------
    | Default Home Controller
    |--------------------------------------------------------------------------
    |
    | You may wish to use controllers instead of, or in addition to, Closure
    | based routes. That's great! Here is an example controller method to
    | get you started. To route to this controller, just add the route:
    |
    |   Route::get('/', 'HomeController@showWelcome');
    |
    */

    public function showWelcome()
    {
        return View::make('hello');

        // if (OAuth::hasAccessToken('Projectplace')) {
        //     $response = json_decode(OAuth::useProvider('Projectplace')->request('/user/me/projects.json'));

        //     return Response::json($response);
        // } elseif (OAuth::hasAccessInput()) {
        //     $response = json_decode(OAuth::useProvider('Projectplace')->fromInput()->request('/user/me/projects.json'));

        //     return Response::json($response);
        // } else {
        //     return OAuth::authorizationRedirect('Projectplace');
        // }
    }

}
