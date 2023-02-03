<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employees extends Model
{
    use HasFactory;
    protected $table='employees';
    protected $fillable=['firstName','lastName','gender','phone',
'salary','joinDate','BirthDate','employee-career','DepID'];
public function getOrder(){
    return $this->hasMany(orderRecord::class);
}
 public function getDepartment(){
    return $this->belongsTo(Department::class);
 }
}
