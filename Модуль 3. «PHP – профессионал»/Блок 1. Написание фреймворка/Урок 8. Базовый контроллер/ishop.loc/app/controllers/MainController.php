<?php


namespace app\controllers;


class MainController extends AppController
{
    public function indexAction()
    {
        debag($this->route);
        echo __METHOD__;
    }
}