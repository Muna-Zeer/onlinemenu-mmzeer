<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;
    protected $table='departments';
    protected $fillable=['Name'];
     public function getEmployee(){
        return $this->hasMany(Employees::class);
     }
      public function getAdmin(){
        return $this->hasMany(Admin::class);
      }
}
