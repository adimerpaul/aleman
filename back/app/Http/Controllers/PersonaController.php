<?php

namespace App\Http\Controllers;

use App\Models\Persona;
use App\Http\Requests\StorePersonaRequest;
use App\Http\Requests\UpdatePersonaRequest;

class PersonaController extends Controller{
    public function index(){
        return Persona::orderBy('apellidos')->get();
    }
    public function show(Persona $persona){ return $persona; }
    public function store(StorePersonaRequest $request){ return Persona::create($request->all()); }
    public function update(UpdatePersonaRequest $request, Persona $persona){ return $persona->update($request->all()); }
    public function destroy(Persona $persona){ return $persona->delete(); }
}
