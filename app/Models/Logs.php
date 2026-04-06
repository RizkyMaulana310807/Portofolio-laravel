<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Logs extends Model
{
    //
    protected $table = 'system_log';
    protected $fillable = [
        'ip_adress',
        'url_accessed',
        'http_method',
        'user_agent',
        'is_bot',
        'severity_level'
    ];
}
