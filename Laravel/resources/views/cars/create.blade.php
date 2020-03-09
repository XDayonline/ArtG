@extends('layouts.app')

@section('content')
    <div class="row">
        <div class="col-sm-8 offset-sm-2">
            <h1 class="display-3">Add a contact</h1>
            <div>
{{--                @if ($errors ?? ''->any())--}}
{{--                    <div class="alert alert-danger">--}}
{{--                        <ul>--}}
{{--                            @foreach ($errors ?? ''->all() as $error)--}}
{{--                                <li>{{ $error }}</li>--}}
{{--                            @endforeach--}}
{{--                        </ul>--}}
{{--                    </div><br />--}}
{{--                @endif--}}
                <form method="post" action="{{ route('cars.store') }}">
                    @csrf
                    <div class="form-group">
                        <label for="first_name">Modèle:</label>
                        <input type="text" class="form-control" name="first_name"/>
                    </div>

                    <div class="form-group">
                        <label for="last_name">Marque:</label>
                        <input type="text" class="form-control" name="last_name"/>
                    </div>

                    <div class="form-group">
                        <label for="email">Prix:</label>
                        <input type="text" class="form-control" name="price"/>
                    </div>
                    <div class="form-group">
                        <label for="city">Description:</label>
                        <input type="text" class="form-control" name="description"/>
                    </div>
                    <div class="form-group">
                        <label for="country">Images:</label>
                        <input type="text" class="form-control" name="images"/>
                    </div>
                    <div class="form-group">
                        <label for="job_title">Puissance:</label>
                        <input type="text" class="form-control" name="power"/>
                    </div>
                    <div class="form-group">
                        <label for="job_title">Année:</label>
                        <input type="text" class="form-control" name="year"/>
                    </div>
                    <div class="form-group">
                        <label for="job_title">Nombres de places:</label>
                        <input type="text" class="form-control" name="seats"/>
                    </div>
                    <div class="form-group">
                        <label for="job_title">Volume du coffre:</label>
                        <input type="text" class="form-control" name="boot_volume"/>
                    </div>
                    <div class="form-group">
                        <label for="job_title">Consommation moyenne:</label>
                        <input type="text" class="form-control" name="average_consommation"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Ajouter une voiture</button>
                </form>
            </div>
        </div>
    </div>
@endsection
