@extends('layouts.app')

@section('content')
    <div class="row">
        @foreach($cars as $car)
            {{$car->marque}}
        @endforeach
    </div>
@endsection
