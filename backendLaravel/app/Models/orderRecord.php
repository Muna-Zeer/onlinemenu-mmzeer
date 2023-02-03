<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class orderRecord extends Model
{
    use HasFactory;
    protected $table='order_records';
    protected $fillable=['itemID','orderTime','employeeNo','customerID'];
    public function getItem(){
        return $this->hasMany(Item::class);
    }
    public function getCustomer(){
        return $this->belongs(Customer::class);
    }
    public function getEmployee(){
        return $this->belongs(Employees::class);
    }
}
