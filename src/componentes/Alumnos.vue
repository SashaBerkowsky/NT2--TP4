<template>
  <section class="src-componentes-alumnos">
    <div class="jumbotron p-3">
      <h1>Alumnos</h1>
      <hr />

      <button class="btn btn-success mb-3 me-3" @click="getPostsXMLHttp()">
        Traer con XMLHttpRequest
      </button>
      <button class="btn btn-warning mb-3 me-3" @click="getPostsFetch()">
        Traer con Fetch
      </button>
      <button class="btn btn-danger mb-3" @click="getPostsAxios()">
        Traer con Axios
      </button>

      <table class="table">
        <tr class="bg-dark text-white">
          <th>Nombre</th>
          <th>Email</th>
          <th>Telefono</th>
        </tr>

        <tr class="bg-table" v-for="(alumno, index) in alumnos" :key="index">
          <td>{{ alumno.nombre }}</td>
          <td>{{ alumno.email }}</td>
          <td>{{ alumno.telefono }}</td>
        </tr>
      </table>
      <hr />
      <h4 v-if="alumnos.length > 0" class="alert alert-warning">
        Cantidad de alumnos encontrados: {{ alumnos.length }}
      </h4>
      <h4 v-else class="alert alert-warning">En espera</h4>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-alumnos',
    props: [],
    mounted () {

    },
    data () {
      return {
        alumnos:[],
        urlXMLHttp:'https://60ad2d839e2d6b0017459278.mockapi.io/tp4/alumnosXMLHttp',
        urlFetch:'https://60ad2d839e2d6b0017459278.mockapi.io/tp4/alumnosFetch',
        urlAxios:'https://60ad2d839e2d6b0017459278.mockapi.io/tp4/alumnosAxios',
      }
    },
    methods: {
      getPostsXMLHttp(){
        let xhr = new XMLHttpRequest()
        xhr.open('get', this.urlXMLHttp)
        xhr.addEventListener('load',()=>{
          if(xhr.status == 200){
            let respuesta = JSON.parse(xhr.response)
            console.log('XMLHttpRequest', respuesta)
            this.alumnos = respuesta
          } else{
            console.error('Error en GET, STATUS: ', xhr.status)
          }
        })
        xhr.addEventListener('error', (err)=>{
          console.error('Error en XMLHttpRequest: ', err.message)
        })
        xhr.send()
      },
      getPostsFetch(){
        fetch(this.urlFetch)
        .then((datos)=>datos.json())
        .then((respuesta)=>{
          console.log('FETCH',respuesta)
          this.alumnos=respuesta
        }).catch((err)=>{
          console.error("Error en FETCH: ", err.message)
        })
      },
      getPostsAxios(){
        this.axios(this.urlAxios)
        .then( (respuesta) => {
          console.log('AXIOS',respuesta.data)
          this.alumnos = respuesta.data
        })
        .catch((err) => console.error("Error en AXIOS: ", err.message))
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.src-componentes-alumnos {
}
.jumbotron {
  background-color: rgb(149, 214, 181);
}

.bg-table {
  background-color: burlywood !important;
}
</style>
