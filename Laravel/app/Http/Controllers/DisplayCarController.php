<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Car; // connects to the model
use App\Http\Resources\Car as CarResource; // connects to the resource file
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller as Controller;
use Illuminate\Support\Facades\Redirect;

class DisplayCarController extends Controller
{

    public function index()
    {
        $data['cars'] = Car::orderBy('id')->paginate(10);

        return view('cars.list',$data);
    }

    public function create()
    {
        return view('cars.create');
    }

    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'marque' => 'required',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        Car::create($input);

        return Redirect::to('cars')
            ->with('success', 'Product created successfully.');
    }

    public function show(Request $request)
    {

    }

    public function edit($id)
    {
        $where = array('id' => $id);
        $data['car'] = Car::where($where)->first();

        return view('cars.edit', $data);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'marque' => 'required',
        ]);

        $update = ['marque' => $request->marque];
        Car::where('id', $id)->update($update);

        return Redirect::to('cars')
            ->with('success', 'Product updated successfully');
    }

    public function destroy($id)
    {
        $car = Car::findOrFail($id);
        $car->delete();

        return Redirect::to('cars')->with('success', 'Product deleted successfully');
    }

}
