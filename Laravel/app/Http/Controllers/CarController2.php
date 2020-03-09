<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Car; // connects to the model
use App\Http\Resources\Car as CarResource; // connects to the resource file
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller as Controller;

class CarController extends Controller
{

    public function index()
    {
        return view('cars.index', [
            'cars' => Car::all(),
        ]);
    }


    public function create()
    {
        return view('cars.create');
    }


    public function store(Request $request)
    {
        $request->validate([
            'marque' => 'required',
        ]);

        $car = Car::create($request->only([

        ]));

        return redirect()->route('cars.index');
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
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
     * @param int $id
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
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $car = Car::findOrFail($id);
        $car->delete();

        return $this->sendResponse([], 'Car deleted successfully.');
    }
}
