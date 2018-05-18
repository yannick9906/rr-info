<?php
    /**
     * Created by PhpStorm.
     * User: yanni
     * Date: 2018-05-17
     * Time: 01:40 AM
     */

    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;

    require '../vendor/autoload.php';

    $app = new \Slim\App;

    $app->get('/user');

    $app->run();