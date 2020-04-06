@extends('layouts.app')

@section('content')
    <h2 style="margin-top: 12px;" class="text-center">Edit Product</h2>
    <br>

    <form action="{{ route('cars.update', $car->id) }}" method="POST" name="update_car">
        {{ csrf_field() }}
        @method('PATCH')

        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <strong>Marque</strong>
                    <input type="text" name="marque" class="form-control" placeholder="Entrez une marque"
                           value="{{ $car->marque }}">
                    <span class="text-danger">{{ $errors->first('marque') }}</span>
                </div>
            </div>
            <div class="col-md-12">
                <button type="submit" class="btn btn-primary">Valider</button>
            </div>
        </div>

    </form>
@endsection
