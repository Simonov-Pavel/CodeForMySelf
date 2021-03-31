<?php


namespace ishop;


class ErrorHandler
{
    public function __construct()
    {
        if (DEBAG) {
            error_reporting(-1);
        } else {
            error_reporting(0);
        }
        set_exception_handler([$this, 'exceptionHandler']);
    }

    public function exceptionHandler($e)
    {
        $this->logErrors($e->getMessage(), $e->getFile(), $e->getLine());
        $this->displayError('Исключение', $e->getMessage(), $e->getFile(), $e->getLine(), $e->getCode());
    }

    protected function logErrors($message = '', $file = '', $line = '')
    {
        error_log("[" . date('Y-m-d H:i:s') . "] Текст ошибки:{$message} | Файл:{$file} | Строка:{$line}\n==================================\n", 3, ROOT . '/tmp/errors.log');
    }

    protected function displayError($errno, $errstr, $errfile, $errline, $responce = 404)
    {
        http_response_code($responce);
        if ($responce == 404 && !DEBAG) {
            require WWW . '/errors/404.php';
            die;
        }
        if (DEBAG) {
            require WWW . '/errors/dev.php';
        } else {
            require WWW . '/errors/prod.php';
        }
        die;
    }
}