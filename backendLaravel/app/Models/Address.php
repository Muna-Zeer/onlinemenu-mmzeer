<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;
    protected $table='addresses';
    protected $fillable=['city','customerID','firstName','lastName'];
// public function getCustomer(){
//     return $this->belongsTo(Customer::class);
// }
// public function address(){
//     return $this->hasMany('App\Models\Address');
// }
public function customer(){
    return $this->belongsTo('App\Models\Customer','customerID','id');

 }
}