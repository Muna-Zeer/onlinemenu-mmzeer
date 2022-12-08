<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
use App\Models\Address;
use Illuminate\Support\Facades\DB;
class CustomerController extends Controller
{
   
   
//    public function getCustomer(){
// $customer=new Customer;
// $customer->firstName="Muna";
// $customer->lastName="zeer";
// $customer->phone="1234567";
// $customer->save();
// return "customer has existence address";
//    }

   public function getCustomers(){
    $posts = DB::select('SELECT * FROM customers');
 
   
  }
  


  public function store_Customer(){
    $posts = DB::select(`SELECT * FROM customers`);
 
    dd($posts);


}



public function store_Address(){

    $customer = Customer::find(1);
// dd($customer);
    $address = new Address;
    $address->customerID = $customer->id;
    $address->firstName="Muna";
    $address->lastName="zeer";
    $address->city="Bethlehem";   
     $address->save();

    $address = new Address;
    $address->customerID = $customer->id;
    $address->firstName="Muna";
    $address->lastName="zeer";
    $address->city="Nebulas";  
       $address->save();

    $address = new Address;
    $address->customerID= $customer->id;
    $address->firstName="Muna";
    $address->lastName="zeer";
    $address->city="Jerusalem";   
      $address->save();

    dd($address);
}
public function getAddressByCustomer(){
    $query = DB::table('customers')->get();
    dd($query );
 }

public function customers(){
    $query = DB::table('customers')->get();
    dd($query );
}
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
  
  // $query = DB::statement(`SELECT addresses.city,addresses.customerID,
        // addresses.firstName,addresses.lastName,
        // customers.firstName,customers.lastName,customers.phone
        // FROM addresses, customers 
        // WHERE  customers.id = addresses.id  `) ->whereNull('addresses.customerID')->first();
       
    //    $result= DB::select(`SELECT addresses.city,addresses.customerID,
    //    addresses.firstName,addresses.lastName,
    //    customers.firstName,customers.lastName,customers.phone
    //    FROM addresses, customers 
    //    WHERE  customers.id = addresses.id  ` );



    // $result=Customer::select('customers.*')
    // ->leftJoin('addresses', 'customers.id', '=', 'addresses.customerID')
    // ->whereNull('addresses.customerID')->first();



        // if($query->num_rows() > 0 ) {
        //     return true;
        //     dd($query );
        // }
        // else {
        //     return false;
        // }
        
        // $query = DB::table('customers')->get();
 $result=response()->json(Customer::latest()->get());
 return $result;

   
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
