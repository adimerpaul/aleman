<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('personas', function (Blueprint $table) {
            $table->id();
            $table->string('apellidos')->nullable();
            $table->string('nombres')->nullable();
            $table->string('nivel')->nullable();
            $table->string('materia')->nullable();
            $table->string('cursos')->nullable();
            $table->string('categoria')->nullable();
            $table->string('evaluacionDocente')->nullable();
            $table->string('escuelaNormalSuperior')->nullable();
            $table->string('rangoEvaluacion')->nullable();
            $table->string('planDeTrabajo')->nullable();
            $table->string('formacionAcademica')->nullable();
            $table->string('cursosDeActualizacion')->nullable();
            $table->string('antiguedadEnElColegio')->nullable();
            $table->string('carnetDeIdentidad')->nullable();
            $table->string('celular')->nullable();
            $table->string('telefono')->nullable();
            $table->date('fechaDeNacimiento')->nullable();
            $table->string('tipoDeSangre')->nullable();
            $table->string('estadoCivil')->nullable();
            $table->string('genero')->nullable();
            $table->string('departamento')->nullable();
            $table->string('pais')->nullable();
            $table->string('provincia')->nullable();
            $table->string('idiomas')->nullable();
            $table->string('tipo')->nullable();
            $table->string('especialidad')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('personas');
    }
};
