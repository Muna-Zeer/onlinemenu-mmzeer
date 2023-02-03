<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    use HasFactory;
    protected $table='bills';
    protected $fillable=['dateBill','timeReceived','billAmount','paymentType','customerID'];

public function getCustomer(){
    return $this->belongsTo(Customer::class);
}
}
