<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Persona extends Model
{
    use HasFactory;
    protected $fillable=[
        'apellidos',
        'nombres',
        'nivel',
        'materia',
        'cursos',
        'categoria',
        'evaluacionDocente',
        'escuelaNormalSuperior',
        'rangoEvaluacion',
        'planDeTrabajo',
        'formacionAcademica',
        'cursosDeActualizacion',
        'antiguedadEnElColegio',
        'carnetDeIdentidad',
        'celular',
        'telefono',
        'fechaDeNacimiento',
        'tipoDeSangre',
        'estadoCivil',
        'genero',
        'departamento',
        'idiomas',
        'tipo',
        'pais',
        'provincia',
        'especialidad'
    ];
}
