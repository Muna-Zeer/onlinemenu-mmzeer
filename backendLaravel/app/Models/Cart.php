<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;
    protected $table='carts';
    protected $fillable=['customerID','itemID','total-price'];
    public function getItem(){
        return $this->hasMany(Item::class);
    }
    public function getCustomer(){
        return $this->hasMany(Cart::class);
    }
}
