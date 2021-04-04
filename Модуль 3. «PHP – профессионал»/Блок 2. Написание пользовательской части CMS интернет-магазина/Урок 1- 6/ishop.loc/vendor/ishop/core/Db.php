<?php


namespace ishop;

use RedBeanPHP\R;


class Db
{
    use TSingleton;

    protected function __construct()
    {
        $db = require_once CONF . '/config_db.php';
        R::setup($db['dns'], $db['user'], $db['pass']);
        if (!R::testConnection()) {
            throw new \Exception("No connect", 500);
        }
        R::freeze(true);
        if(DEBAG){
            R::debug(true,1);
        }
    }
}