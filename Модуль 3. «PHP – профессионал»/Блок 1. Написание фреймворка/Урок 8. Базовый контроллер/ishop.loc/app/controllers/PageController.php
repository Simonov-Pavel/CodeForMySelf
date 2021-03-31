<?php


namespace app\controllers;


class PageController extends AppController
{
    public function viewAction()
    {
        debag($this->route);
        echo __METHOD__;
    }
}