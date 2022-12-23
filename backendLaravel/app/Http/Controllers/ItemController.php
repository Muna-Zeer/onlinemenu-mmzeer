<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Item::select('oldPrice','newPrice','description','ItemImg','size','Qty','crust','id')->get();
    

    }


    public  function selectItem(Request $request){
        $items=DB::table('items')->get();
        $category=$request->query('menuID');
        if($category==null){
           $items;
        }
        else{
            $category=  DB::select('SELECT *  from items where menuID ='.$category); 
            // dd($category);
              return response()->json([
            'status'=> 200,
            'message'=>$category
        ]);
    
        }
        return response()->json([
            'status'=> 200,
            'message'=>'item get Successfully',
        ]);
    
    }

    public function filterSize(Request $request){
        $items=DB::table('items')->get();
        $size=$request->query('size');
        if($size==null){
           $items;
           return response()->json([
            'status'=> 404,
            'message' => 'No menu ID Found',
        ]);
        }
        else{
            $size=   DB::Table('items')
            ->select('*')
            ->where('size', '=', $size)
            ->get();
            // dd($size);
              return response()->json([
            'status'=> 200,
            'message'=>$size
        ]);
    
        }}

        public function filterPrice(Request $request){
            $items=DB::table('items')->get();
            $price=$request->query('newPrice');
            if($price==null){
               $items;
               return response()->json([
                'status'=> 404,
                'message' => 'No menu ID Found',
            ]);
            }
            else{
                $price=   DB::Table('items')
                ->select('*')
                ->where('newPrice', '=', $price)
                ->get();
                // dd($price);
                  return response()->json([
                'status'=> 200,
                'message'=>$price
            ]);
        
            }
        return response()->json([
            'status'=> 200,
            'message'=>'item price get Successfully',
        ]);
    }


    public function filterCrust(Request $request){
        $items=DB::table('items')->get();
        $crust=$request->query('crust');
        if($crust==null){
           $items;
           return response()->json([
            'status'=> 404,
            'message' => 'No menu ID Found',
        ]);
        }
        else{
            $crust=   DB::Table('items')
            ->select('*')
            ->where('crust', '=', $crust)
            ->get();
            // dd($crust);
              return response()->json([
            'status'=> 200,
            'message'=>$crust
        ]);
    
        }
        return response()->json([
            'status'=> 200,
            'message'=>'item crust get Successfully',
        ]);
    }

public function selectMenuType($menuID){
    $res = DB::Table('items')
                ->select('*')
                ->where('menuID', '=', $menuID)
                ->get();
                if($res)
                {
                    return response()->json([
                        'status'=> 200,
                        'item' => $res,
                    ]);
                }
                else
                {
                    return response()->json([
                        'status'=> 404,
                        'message' => 'No menu ID Found',
                    ]);
                }
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
        
        $validator = Validator::make($request->all(),[
          
            'Qty'=>'required|max:191',
         
        ]);

        if($validator->fails())
        {
            return response()->json([
                'status'=> 422,
                'validate_err'=> $validator->messages(),
            ]);
        }
        else
        {
            $item = new Item;
            $item->size = $request->input('size');
            $item->crust = $request->input('crust');
            $item->Qty = $request->input('Qty');
        
            $item->save();

            return response()->json([
                'status'=> 200,
                'message'=>'item Added Successfully',
            ]);
        }

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
        $item = Item::find($id);
        if($item)
        {
            return response()->json([
                'status'=> 200,
                'item' => $item,
            ]);
        }
        else
        {
            return response()->json([
                'status'=> 404,
                'message' => 'No item ID Found',
            ]);
        }

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
      

     
   
     
            $item = Item::find($id);
            if($item)
            {

                $item->Qty = $request->input('Qty');
                $item->size = $request->input('size');
                $item->crust = $request->input('crust');
               
                $item->update();

                return response()->json([
                    'status'=> 200,
                    'message'=>'item Updated Successfully',
                ]);
            }
            else
            {
                return response()->json([
                    'status'=> 404,
                    'message' => 'No item ID Found',
                ]);
            
            }}
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $item = Item::find($id);
        if($item)
        {
            $item->delete();
            return response()->json([
                'status'=> 200,
                'message'=>'item Deleted Successfully',
            ]);
        }
        else
        {
            return response()->json([
                'status'=> 404,
                'message' => 'No item ID Found',
            ]);
        }
    
    }
}
