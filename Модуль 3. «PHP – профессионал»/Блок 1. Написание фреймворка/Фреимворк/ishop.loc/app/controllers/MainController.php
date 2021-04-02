<?php


namespace app\controllers;


use ishop\Cache;
use RedBeanPHP\R;

class MainController extends AppController
{
    public function indexAction()
    {
        $posts = R::findAll('test');
        $post = R::findOne('test', 'id=?', [1]);
        $this->setMeta('Главная страница', 'Описание...', 'Ключевики...');

        $names = ['Andrey', 'Pasha'];
        $cache = Cache::instance();
        //$cache->set('test', $names);
        $cache->delete('test');
        $data = $cache->get('test');
        if(!$data){
            $cache->set('test', $names);

        }
        $data = $cache->get('test');
        debag($data);
        $this->set(compact('names','posts'));
    }
}