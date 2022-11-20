<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;
    protected $table='items';
    protected $fillable=['ItemName','size','price','ItemImg','Description','menuID'];
    public function getIngredient(){
return $this->hasMany(Ingredient::class);
    }
     public function getOrder(){
        return $this->belongsTo(orderRecord ::class);
     }
     public function getMenu(){
        return $this->belongsTo(menuType::class);
     }
     public function getCart(){
        return $this->belongs(Cart::class);
     }
}
