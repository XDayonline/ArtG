@extends('layouts.app')

@section('content')
    <a href="{{ route('cars.create') }}" class="btn btn-success mb-2">Ajouter</a>
    <br>
    <div class="row">
        <div class="col-12">
            <table class="table table-bordered" id="laravel_crud">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Marque</th>
                    <td colspan="2">Action</td>
                </tr>
                </thead>
                <tbody>
                @foreach($cars as $car)
                    <tr>
                        <td>{{ $car->id }}</td>
                        <td>{{ $car->marque }}</td>
                        <td><a href="{{ route('cars.edit',$car->id)}}" class="btn btn-primary">Modifier</a></td>
                        <td>
                            <form action="{{ route('cars.destroy', $car->id)}}" method="post">
                                {{ csrf_field() }}
                                @method('DELETE')
                                <button class="btn btn-danger" type="submit">Supprimer</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
            {!! $cars->links() !!}
        </div>
    </div>
@endsection
