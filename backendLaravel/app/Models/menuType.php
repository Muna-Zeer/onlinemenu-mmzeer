<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class menuType extends Model
{
    use HasFactory;
    protected $table='menu_types';
    protected $fillable=['category-Type'];
    public function getItem(){
        return $this->hasMany(Item::class);
    }
}
