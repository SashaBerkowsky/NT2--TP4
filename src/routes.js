import Vue from "vue";
import VueRouter from "vue-router";
import Alumnos from "./componentes/Alumnos";
import AlumnoForm from "./componentes/AlumnoForm/AlumnoForm.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Alumnos },
    { path: "/crearAlumno", component: AlumnoForm },
  ],
});
