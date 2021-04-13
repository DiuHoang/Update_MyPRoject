<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('users')->insert([
        	[
                'name'=>'Quan Ho',
                'number'=>'0235984521',
                'email'=>'quanho@gmail.com',
                'password'=>'quanho123',
        	],
        	[
                'name'=>'Tien Nguyen',
                'number'=>'0235984521',
                'email'=>'tiennguyen@gmail.com',
                'password'=>'tiennguyen123',
            ],
        	[
                'name'=>'Diu Hoang',
                'number'=>'0235984521',
                'email'=>'diuhoang@gmail.com',
                'password'=>'diuhoang123',
            ],
        	[
                'name'=>'Trang Tran',
                'number'=>'0235984521',
                'email'=>'trangtran@gmail.com',
                'password'=>'trangtran123',
            ]]);
    }
}
