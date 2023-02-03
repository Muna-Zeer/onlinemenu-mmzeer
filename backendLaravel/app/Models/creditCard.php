<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class creditCard extends Model
{
    use HasFactory;
    protected $table='credit_cards';
    protected $fillable=['DateRecipt','timeRecipt','BillNo'
,'firstName','lastName','verificationCode'];
public function getBill(){
    return this->hasOne('App\Models\Bill');
}

}
