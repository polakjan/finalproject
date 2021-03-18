<?php

namespace App\Http\Controllers;

use App\Models\Entity;
use Illuminate\Http\Request;

class EntityController extends Controller
{
    public function store(Request $request) { 

		//Validate input
		 $this->validate($request, [
			 'name' => 'required|min:0|max:100',
			 'region' => 'required|min:0|max:100',
			 'photo' => 'required|min:0',
			 'description' => 'required|min:0|max:250',
			 'coords' => 'required',
		 ]);
	 
		 // create entity in DB
		 $entity = new Entity;
		 $entity->name = json_encode($request->name);
		 $entity->region =  json_encode($request->region);
		 $entity->photo =  json_encode($request->photo);
		 $entity->description = json_encode($request->description);
		 $entity->coordinates = json_encode($request->coords);
		 $entity->save();
 
		 return [
			 'status' => 'success',
			 'message' => 'Review was successfully saved'
		 ];
	 }
}
