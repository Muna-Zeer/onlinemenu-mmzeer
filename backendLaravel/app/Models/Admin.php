<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;
    protected $table='admins';
    protected $fillable=['password','firstName','lastName','phone','DepID'];
public function getDep(){
    return $this->belongsTo(Admin::class);
}
}
