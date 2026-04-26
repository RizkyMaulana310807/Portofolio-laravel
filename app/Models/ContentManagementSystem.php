<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContentManagementSystem extends Model
{
    protected $table = 'content_management_system';
    protected $fillable = [
        'judul',
        'sub_judul',
        'isi_text',
        'status'
    ];
}
