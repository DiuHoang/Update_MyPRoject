<?php

namespace App\Http\Controllers;
use App\Models\Order;
use App\Models\Users;
use App\Models\Bill;
use App\Models\Product;
use Illuminate\Http\Request;

class VendorController extends Controller
{
    //
    public function getCountOrder(){
        $count_order = Order::all()->count(); 
        return view('dashboard', compact('count_order'));
        // return $count_order;
    } 
    public function getCountCustomer(){
        $count_cus = Users::all()->count();
        return $count_cus;
    }
    public function getCountProfit(){
        $count_profit = ListOrder::all()->sum('total_price');
        return $count_profit;
    }

    // lấy dữ liệu thống kê hàng tháng
    public function getBarOrderChart(){
        $bill= Bill::select(Bill::raw('MONTH(created_at) as month'),Bill::raw('COUNT(id) as sum'))
        ->groupBy('month')->get();
        $order_month=[0,0,0,0,0,0,0,0,0,0,0,0];
        foreach($bill as $bill){
        for($i = 1; $i<=12; $i++){
          if($i == $bill["month"]){
            $order_month[$i-1]=$bill["sum"];
          }
        }
        }
        return $order_month;
    }

    // CRUD Thực đơn trong nhà hàng
    function getProductToUpdate(){
        $product = Product::where('vendor_id', '=', 1)->get();

        return json_encode($product);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  IlluminateHttpRequest  $request
     * @return IlluminateHttpResponse
     */
    public function store(Request $request)
    {
        
        $products = new Product();
        $products->name_product = $request->name_product;
        $products->picture = $request->file("picture");
        $products->price = $request->price;
        $products->discount = $request->discount;
        $products->description = $request->description;
        $products->category_id = $request->category_id;
        $products->vendor_id = 1;
        $products->save();


        // $products = Product::create($request->all());
        return response()->json(['message'=> 'Product created', 
        'products' => $products]);
//         $name = $request->input('name');
//   $content = $request->input('content');
//   $image = $request->file("image")->store("public");
//   $datetime = $request->input('datetime');
//   $category = $request->input('category');

//   $images = new Image();
//   $images->name=$name;
//   $images->content=$content;
//   $images->image=$image;
//   $images->category_id =$category;
//   $images->datetime = $datetime;
//   $images->save();
//   return redirect('/admin/image');
  // $responseData = array("data" => null);
  // return response()->json($responseData, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  AppExpense  $expense
     * @return IlluminateHttpResponse
     */
    public function show(Expense $expense)
    {
        return $products;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  AppExpense  $expense
     * @return IlluminateHttpResponse
     */

    /**
     * Update the specified resource in storage.
     *
     * @param  IlluminateHttpRequest  $request
     * @param  AppExpense  $expense
     * @return IlluminateHttpResponse
     */
    public function update(Request $request, Product $products)
    {
        $request->validate([
            'name_product' => 'required',
            'picture' => 'required',
            'price' => 'required',
            'description' => 'required'
        ]);
        $products->name_product = $request->name_product();
        $products->picture = $request->picture();
        $products->price = $request->price();
        $products->discount = $request->discount();
        $products->description = $request->description();
        $products->save();
        
        return response()->json([
            'message' => 'products updated!',
            'products' => $products
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  AppExpense  $expense
     * @return IlluminateHttpResponse
     */
    public function destroy(Product $products)
    {
        $expense->delete();
        return response()->json([
            'message' => 'products deleted'
        ]);
        
    }


    // -------------------------------------------------TEST-------------------------------------
    public function index1()
    {
        $items = Product::where('vendor_id', '=', 1)->get();    
        return response()->json($items);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create1()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store1(Request $request)
    {
        $item = new Product([
          'name_product' => $request->get('name_product'),
          'picture' => $request->get('picture'),
          'price' => $request->get('price'),
          'discount' => $request->get('discount'),
          'description' => $request->get('description'),
          'category_id' => $request->get('category_id'),
          'vendor_id' => 1,
        ]);
        $item->save();
        return response()->json('Successfully added');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show1($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit1($id)
    {
        $item = Item::find($id);
        return response()->json($item);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update1(Request $request, $id)
    {
        $item = Item::find($id);
        $item->name = $request->get('name');
        $item->price = $request->get('price');
        $item->save();

        return response()->json('Successfully Updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy1($id)
    {
      $item = Item::find($id);
      $item->delete();

      return response()->json('Successfully Deleted');
    }
}