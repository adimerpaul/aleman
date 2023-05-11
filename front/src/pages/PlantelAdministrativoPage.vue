<template>
  <q-page class="q-pa-sm fondo-letra"
          style="background-image: url('fondo.jpg'); background-size: cover; background-position: center center;">
<!--    <iframe id="docpdf" src="" frameborder="0" style="width: 100%;height: 100vh"></iframe>-->
    <div class="row">
      <div class="col-12">
        <q-btn color="green-10" label="Imprimir Administrativo" icon="print" @click="imprimir()" no-caps />
      </div>
    </div>
    <q-table :loading="loading" dense title="Plantel Administrativo" :rows="personas" :filter="filter" :columns="columns" :rows-per-page-options="[0]">
      <template v-slot:top-right>
        <q-btn color="primary" label="Agregar" icon="o_add_circle_outline" @click="personaClick" no-caps />
        <q-btn flat round dense icon="refresh" @click="personasGet" />
        <q-input outlined dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn dense flat round icon="edit" @click="personaClickEditar(props.row)" />
          <q-btn dense flat round icon="visibility" @click="personaClickVer(props.row)" />
          <q-btn dense flat round icon="delete" @click="personaClickDelete(props.row)" />
<!--          <q-btn dense flat round icon="picture_as_pdf" @click="personaClickPdf(props.row)" />-->
        </q-td>
      </template>
      <template v-slot:body-cell-nivel="props">
        <q-td :props="props">
          <q-chip :color="props.row.nivel=='Inicial'?'green':props.row.nivel=='Primaria'?'blue':'red'" dense text-color="white" :label="props.row.nivel" />
        </q-td>
      </template>
    </q-table>
<!--    <pre>{{personas}}</pre>-->
    <q-dialog v-model="dialog">
      <q-card class="" style="width: 700px;max-width: 90vh">
        <q-card-section class="q-pt-xs">
            <div class="row items-center">
              <div class="col text-subtitle2">
                {{personaOption=='crear'?'Crear':personaOption=='editar'?'Editar':'Ver'}}
                Persona</div>
              <div class="col text-right">
                <q-btn flat round dense icon="close" @click="dialog = false" />
              </div>
            </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-form @submit="personaSubmit">
            <div class="row">
            <div class="col-12 col-md-3">
              <q-input :readonly="personaOption=='ver'" outlined dense v-model="persona.apellidos" label="Apellidos"  />
            </div>
            <div class="col-12 col-md-3">
              <q-input :readonly="personaOption=='ver'" outlined dense v-model="persona.nombres" label="Nombre" />
            </div>
            <div class="col-12 col-md-3">
              <q-input :readonly="personaOption=='ver'" outlined dense v-model="persona.especialidad" label="Especialidad" />
            </div>
            <div class="col-12 col-md-3">
              <q-input :readonly="personaOption=='ver'" outlined dense v-model="persona.formacionAcademica" label="Formacion Academica" />
            </div>
            <div class="col-12 col-md-3">
              <q-input :readonly="personaOption=='ver'" outlined dense v-model="persona.cursosDeActualizacion" label="Cursos de Actualizacion" />
            </div>
            <div class="col-12 col-md-3">
              <q-input :readonly="personaOption=='ver'" outlined dense v-model="persona.antiguedadEnElColegio" label="Antiguedad en el Colegio" />
            </div>
            <div class="col-12 col-md-3">
              <q-input :readonly="personaOption=='ver'" outlined dense v-model="persona.carnetDeIdentidad" label="Carnet de Identidad" />
            </div>
            <div class="col-12 col-md-3">
              <q-input :readonly="personaOption=='ver'" outlined dense v-model="persona.celular" label="Celular" />
            </div>
            <div class="col-12 col-md-3">
              <q-input :readonly="personaOption=='ver'" outlined dense v-model="persona.telefono" label="Telefono" />
            </div>
            <div class="col-12 col-md-3">
              <q-input type="date" :readonly="personaOption=='ver'" outlined dense v-model="persona.fechaDeNacimiento" label="Fecha de Nacimiento" />
            </div>
            <div class="col-12 col-md-3">
              <q-select :readonly="personaOption=='ver'" outlined dense v-model="persona.tipoDeSangre" :options="['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']" label="Tipo de Sangre" />
            </div>
            <div class="col-12 col-md-3">
              <q-select :readonly="personaOption=='ver'" outlined dense v-model="persona.estadoCivil" :options="['Soltero', 'Casado', 'Divorciado', 'Viudo']" label="Estado Civil" />
            </div>
            <div class="col-12 col-md-3">
              <q-select :readonly="personaOption=='ver'" outlined dense v-model="persona.genero" :options="['Masculino', 'Femenino']" label="Genero" />
            </div>
            <div class="col-12 col-md-3">
              <q-input :readonly="personaOption=='ver'" outlined dense v-model="persona.pais" label="Pais" />
            </div>
            <div class="col-12 col-md-3">
              <q-select :readonly="personaOption=='ver'" outlined dense v-model="persona.departamento" :options="['La Paz', 'Cochabamba', 'Santa Cruz', 'Oruro', 'Potosi', 'Chuquisaca', 'Tarija', 'Beni', 'Pando','Otros']" label="Departamento" />
            </div>
              <div class="col-12 col-md-3">
                <q-input :readonly="personaOption=='ver'" outlined dense v-model="persona.provincia" label="Provincia" />
              </div>
            <div class="col-12 col-md-3">
              <q-input :readonly="personaOption=='ver'" outlined dense v-model="persona.idiomas" label="Idiomas" />
            </div>
            </div>
            <q-card-actions align="right" v-if="personaOption!='ver'">
              <q-btn :loading="loading" flat label="Cancelar" v-close-popup />
              <q-btn :loading="loading" color="primary" type="submit" :label="personaOption=='crear' ? 'Crear' : 'Actualizar'" />
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
<!--    <pre>{{ personas }}</pre>-->
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { jsPDF } from 'jspdf'
// import $ from 'jquery'
import { date } from 'quasar'
export default defineComponent({
  name: 'plantelAdministrativoPage',
  data () {
    return {
      loading: false,
      columns: [
        { name: 'actions', label: 'Acciones', field: 'actions', align: 'left', sortable: true },
        { name: 'nombres', label: 'Nombres', field: 'nombres', align: 'left', sortable: true },
        { name: 'apellidos', label: 'Apellido', field: 'apellidos', align: 'left', sortable: true },
        // { name: 'nivel', label: 'Nivel', field: 'nivel', align: 'left', sortable: true },
        // { name: 'materia', label: 'Materia', field: 'materia', align: 'left', sortable: true },
        // { name: 'cursos', label: 'Curso', field: 'cursos', align: 'left', sortable: true },
        // { name: 'categoria', label: 'Categoria', field: 'categoria', align: 'left', sortable: true }
        // { name: 'evaluacionDocente', label: 'Evaluacion Docente', field: 'evaluacionDocente', align: 'left', sortable: true },
        // { name: 'escuelaNormalSuperior', label: 'Escuela Normal Superior', field: 'escuelaNormalSuperior', align: 'left', sortable: true },
        // { name: 'rangoEvaluacion', label: 'Rango Evaluacion', field: 'rangoEvaluacion', align: 'left', sortable: true },
        // { name: 'planDeTrabajo', label: 'Plan de Trabajo', field: 'planDeTrabajo', align: 'left', sortable: true },
        { name: 'especialidad', label: 'Especialidad', field: 'especialidad', align: 'left', sortable: true },
        { name: 'formacionAcademica', label: 'Formacion Academica', field: 'formacionAcademica', align: 'left', sortable: true },
        // { name: 'cursosDeActualizacion', label: 'Cursos de Actualizacion', field: 'cursosDeActualizacion', align: 'left', sortable: true },
        // { name: 'antiguedadEnElColegio', label: 'Antiguedad en el Colegio', field: 'antiguedadEnElColegio', align: 'left', sortable: true },
        { name: 'carnetDeIdentidad', label: 'Carnet de Identidad', field: 'carnetDeIdentidad', align: 'left', sortable: true }
      ],
      personas: [],
      persona: {},
      filter: '',
      dialog: false,
      personaOption: 'crear'
    }
  },
  created () {
    this.personasGet()
  },
  mounted () {
    // this.printInicial()
  },
  methods: {
    imprimir () {
      // eslint-disable-next-line new-cap
      const doc = new jsPDF()
      doc.setFontSize(16)
      doc.setFont('calibri', 'bold')
      doc.text('PLANTEL ADMINISTRATIVO', 100, 20, 'center')
      doc.setFont('calibri', 'normal')
      doc.setFontSize(12)
      // doc.text('FILTRO: INICIAL', 15, 25)
      doc.rect(10, 28, 190, 10)
      doc.line(50, 28, 50, 38)
      doc.line(90, 28, 90, 38)
      doc.line(130, 28, 130, 38)
      doc.line(170, 28, 170, 38)
      doc.setFont('calibri', 'bold')
      doc.text('APELIDOS', 30, 33, 'center')
      doc.text('NOMBRES', 70, 33, 'center')
      doc.text('ESPECIALIDAD', 110, 33, 'center')
      doc.text('CARNET DE IDENTIDAD', 150, 32, { maxWidth: 40, align: 'center' })
      doc.text('FECHA DE NACIMIENTO', 185, 32, { maxWidth: 40, align: 'center' })
      doc.setFont('calibri', 'normal')
      doc.setFontSize(11)
      // const personas = this.personas.filter(persona => persona.nivel === type)
      let contador = 0
      this.personas.forEach((persona, index) => {
        doc.text(persona.apellidos == null ? '' : persona.apellidos
          , 30, 42 + (contador * 10), { maxWidth: 40, align: 'center' })
        doc.text(persona.nombres == null ? '' : persona.nombres
          , 70, 42 + (contador * 10), { maxWidth: 40, align: 'center' })
        doc.text(persona.especialidad == null ? '' : persona.especialidad
          , 110, 42 + (contador * 10), { maxWidth: 40, align: 'center' })
        doc.text(persona.carnetDeIdentidad == null ? '' : persona.carnetDeIdentidad
          , 150, 45 + (contador * 10), { maxWidth: 40, align: 'center' })
        doc.text(persona.fechaDeNacimiento == null ? '' : persona.fechaDeNacimiento
          , 185, 45 + (contador * 10), { maxWidth: 40, align: 'center' })
        doc.rect(10, 38 + (contador * 10), 40, 10)
        doc.rect(50, 38 + (contador * 10), 40, 10)
        doc.rect(90, 38 + (contador * 10), 40, 10)
        doc.rect(130, 38 + (contador * 10), 40, 10)
        doc.rect(170, 38 + (contador * 10), 30, 10)
        contador++
        if ((index + 1) % 22 === 0) {
          contador = 0
          doc.addPage()
        }
      })
      doc.save('Plantel Administrativo' + date.formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss') + '.pdf')
      // $('#docpdf').attr('src', doc.output('datauristring'))
    },
    personaSubmit () {
      if (this.personaOption === 'crear') {
        this.loading = true
        this.persona.tipo = 'administrativo'
        this.$axios.post('personas', this.persona).then(() => {
          this.personasGet()
          this.dialog = false
        }).catch((error) => {
          console.log(error)
        }).finally(() => {
          // this.loading = false
        })
      } else if (this.personaOption === 'editar') {
        this.loading = true
        this.persona.tipo = 'administrativo'
        this.$axios.put('personas/' + this.persona.id, this.persona).then(() => {
          this.personasGet()
          this.dialog = false
        }).catch((error) => {
          console.log(error)
        }).finally(() => {
          // this.loading = false
        })
      }
    },
    personaClick () {
      this.personaOption = 'crear'
      this.dialog = true
      this.persona = {}
    },
    personaClickPdf () {
      // eslint-disable-next-line new-cap
      const doc = new jsPDF()
      doc.text('Hello world!', 10, 10)
      doc.save('a4.pdf')
    },
    personaClickDelete (persona) {
      this.$q.dialog({
        title: 'Confirmar',
        message: '¿Esta seguro de eliminar a ' + persona.nombres + ' ' + persona.apellidos + '?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.loading = true
        this.$axios.delete('personas/' + persona.id).then(() => {
          this.personasGet()
        }).catch((error) => {
          console.log(error)
        }).finally(() => {
          // this.loading = false
        })
      })
    },
    personaClickVer (persona) {
      this.personaOption = 'ver'
      this.persona = persona
      this.dialog = true
    },
    personaClickEditar (persona) {
      this.personaOption = 'editar'
      this.persona = {
        id: persona.id,
        apellidos: persona.apellidos,
        nombres: persona.nombres,
        especialidad: persona.especialidad,
        formacionAcademica: persona.formacionAcademica,
        cursosDeActualizacion: persona.cursosDeActualizacion,
        antiguedadEnElColegio: persona.antiguedadEnElColegio,
        carnetDeIdentidad: persona.carnetDeIdentidad,
        celular: persona.celular,
        telefono: persona.telefono,
        fechaDeNacimiento: persona.fechaDeNacimiento,
        tipoDeSangre: persona.tipoDeSangre,
        estadoCivil: persona.estadoCivil,
        genero: persona.genero,
        pais: persona.pais,
        departamento: persona.departamento,
        provincia: persona.provincia,
        idiomas: persona.idiomas
      }
      this.dialog = true
    },
    async personasGet () {
      this.loading = true
      this.personas = []
      this.$axios.get('personas').then((response) => {
        response.data.forEach((persona) => {
          if (persona.tipo === 'administrativo') {
            this.personas.push(persona)
          }
        })
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        this.loading = false
      })
    }
  }
})
</script>
