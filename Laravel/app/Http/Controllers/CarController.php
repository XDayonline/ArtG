<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Car; // connects to the model
use App\Http\Resources\Car as CarResource; // connects to the resource file
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller as Controller;

class CarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $cars = Car::all();
        return $this->sendResponse(CarResource::collection($cars), 'Cars retrieved successfully.');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Http\Response|\Illuminate\View\View
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'marque' => 'required',
        ]);
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }
        $car = Car::create($input);
        return $this->sendResponse(new CarResource($car), 'Car created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function show($id)
    {
        $car = Car::find($id);

        if (is_null($car)) {
            return $this->sendError('Car not found.');
        }

        return $this->sendResponse(new CarResource($car), 'Car retrieved successfully.');
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
     * @param \Illuminate\Http\Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $car = Car::find($id);
        $car->marque = $request->input('marque');
        $car->save();

        return $this->sendResponse(new CarResource($car), 'Car updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $car = Car::findOrFail($id);
        $car->delete();

        return $this->sendResponse([], 'Car deleted successfully.');
    }
}
