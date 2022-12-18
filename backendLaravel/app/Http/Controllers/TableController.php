<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Table;
class TableController extends Controller
{
    //
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $result=response()->json(Table::latest()->get());
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
      
        $validatedData =   $request->validate([
            'date'=>'required',
            'phone'=>'required',
            'email'=>'required',
            'Name'=>'required|min:2',
            'comments'=>'required',
            

        ]);
     
         
  
          $project = Table::create([
            'date' => $validatedData['date'],
            'phone' => $validatedData['phone'],
            'email' => $validatedData['email'],
            'name' => $validatedData['name'],
           
            'comments' => $validatedData['comments'],
       
          ]);
          dd($response->json());
          return response()->json('Table booked!');
        }
    
public function login(Request $request){
    $order=new Table();
    $order->Hour=$request->Hour;
    $order->numPeople=$request->numPeople;
    $order->date=$request->date;
    $order->phone=$request->phone;
    $order->comments=$request->comments;
    $order->email=$request->email;
    $order->name=$request->name;
    $order->save();
    dd($order);
    return $order;
    // return response()->json([
    //     'status'=>200,
    //     'message'=>'booked table successfully',
    // ]);
    // return response()->json([$request->all()]);
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
