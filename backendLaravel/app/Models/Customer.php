<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    protected $table='customers';

    protected $fillable=['firstName','lastName','phone'];
    public function getCart(){
        return $this->belongs(Customer::class);
    }
     public function getOrder(){
        return $this->hasMany(orderRecord::class);
     }
     public function getBill(){
        return $this->hasMany(Bill::class);
     }
   //   public function getAddress(){
   //      return $this->hasMany(Address::class);
   //   }
   public function address(){
      return $this->hasMany('App\Models\Address');
  }
   // public function customer(){
   //    return $this->belongsTo('App\Models\Customer','customerID','id');

   // }
}
