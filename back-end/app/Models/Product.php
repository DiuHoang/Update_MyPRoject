<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table = "products";
    protected $filltable = "name_product, picture, price, discount, description, category_id, vendor_id";
    public function service_category(){
    	return $this->belongsTo("App\Models\ServiceCategory","category_id","id");
    }
}