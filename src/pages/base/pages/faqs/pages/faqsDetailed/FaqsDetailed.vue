<script setup lang="ts">
	import FaqDetails from './components/FaqDetails.vue';
	import FaqComment from './components/FaqComment.vue';
  import {useRoute} from "vue-router";

  const route = useRoute();
  const faqsId = route.params["faqs_id"] as string;  

	const faqData1 = {
		id: "1",
		date_time: "Today, 03:48 PM",
		title: "¿Tiempo límite para el pago de la matrícula?  ¿Que consecuencias tiene si no se paga a tiempo?",
		content: "Quería saber si hay un tiempo límite para pagar la matrícula de la universidad cuando se el pago es por plazos. En caso de que" +
        "no se pague a tiempo, ¿que consecuencias tiene?",
		comments: ["2", "3"]
	}
  const faqData2 = {
    id: "2",
    date_time: "Yesterday, 11:48 PM",
    title: "¿Es posible cambiar la fecha de los examenes si una mayoría de alumnos lo solicita?",
    content: "Quería saber si es posible cambiar la fecha de los examenes si una mayoría de alumnos lo solicita. ¿Se puede hacer una votación para cambiar la fecha de los examenes?",
    comments: ["3"]
  }

  const faqData3 = {
    id: "3",
    date_time: "Yesterday, 10:01 PM",
    title: "¿Cuál es el criterio que se siguen para gestionar las solicitudes de cambio de grupo?",
    content: "Durante el periodo de cambio de grupo se realizan una gran cantidad de solicitudes y hay grupos en los que no caben tantos alumnos, ¿cuál es el criterio que se sigue para priorizar quienes entran?",
    comments: ["4"]
  }
  const faqData4 = {
    id: "4",
    date_time: "Yesterday, 11:48 PM",
    title: "¿Cuanta cantidad de convocatorias tengo para aprobar una asignatura?",
    content: "¿Cuantas convocatorias tengo para aprobar una asignatura? ¿Se puede solicitar una convocatoria especial si no se ha aprobado en las convocatorias normales? ¿Qué sucede si pierdo todas mis oportunidades?",
    comments: ["5"]
  }
  const faqData5 = {
    id: "5",
    date_time: "Yesterday, 11:48 PM",
    title: "Hay asignaturas con asistencia obligatoria donde no se aceptan justificantes médicos. ¿Es esto legal?",
    content: "Quería saber si es legal que haya asignaturas con un porcentaje de asistencia obligatoria tan alto donde no se aceptan justificantes médicos. ¿No debería haber una forma de justificar la falta de asistencia? ¿Qué se puede hacer en estos casos?",
    comments: ["6"]
  }
  const faqData6 = {
    id: "6",
    date_time: "Yesterday, 11:48 PM",
    title: "Algunos profesores tardan tanto en corregir los exámenes que no hay tiempo a preparar los siguientes.",
    content: "Es muy común que algunos profesores tarden tanto en corregir los exámenes que no hay tiempo de saber como enfocar los siguientes. ¿Está permitido que hagan esto?",
    comments: ["7"]
  }

	const faqCommentData1 = {
		id: "1",
		isOfficial: true,
        author: "Jose Peña Seco",
        likes: ["4", "3"],
        marks: ["2", "3"],
        content: "Los plazos de pagos de la matrícula tienen como fecha límite alrededor del mes de mayo, administración te avisa con tiempo de la fecha límite exacta. Si no se paga a tiempo se te cobrarán intereses por demora y se te bloqueará la matrícula hasta que se pague.",
        date_time: "1 hour ago",
	}

	const faqCommentData2 = {
		id: "2",
		isOfficial: true,
        author: "Alfredo Ruiz",
        likes: ["3", "4"],
        marks: ["2", "3"],
        content: "Importante tener en cuenta que mientras se tenga la matrícula bloqueada no se le considerará estudiante de la universidad.",
        date_time: "30 minutes ago",
	}

  const faqCommentData3 = {
    id: "3",
    isOfficial: true,
    author: "Sara González",
    likes: ["3"],
    marks: ["2"],
    content: "Los exámenes de convocatorias no se pueden cambiar, los parciales o exámenes que pone el propio profesor durante la evaluación continua es posible cambiarlos si el profesor lo permite.",
    date_time: "30 minutes ago",
  }

  const faqCommentData4 = {
    id: "3",
    isOfficial: true,
    author: "Sara González",
    likes: ["3"],
    marks: ["2"],
    content: "El criterio que se sigue para gestionar las solicitudes de cambio de grupo es el siguiente: se prioriza a los alumnos que tienen solapamiento de asignaturas y también por orden de fecha de la solicitud.",
    date_time: "30 minutes ago",
  }
  const faqCommentData5 = {
    id: "3",
    isOfficial: true,
    author: "Sara González",
    likes: ["3"],
    marks: ["2"],
    content: "Una asignatura tiene 6 convocatorias, en estas se incluyen todas las convocatorias ordinarias, extraordinarias y especiales que el estudiante haga, por último, hay una séptima convocatoria extra. Si se pierden todas las oportunidades el estudiante es expulsado del grado. ",
    date_time: "25 minutes ago",
  }
  const faqCommentData6 = {
    id: "3",
    isOfficial: true,
    author: "Sara González",
    likes: ["3"],
    marks: ["2"],
    content: "Por normativa de la universidad el justificante médico solo es aceptado si la cita/urgencia ha sucedido durante el tiempo de la clase faltada.",
    date_time: "21 minutes ago",
  }
  const faqCommentData7 = {
    id: "3",
    isOfficial: true,
    author: "Jose Peña Seco",
    likes: ["3"],
    marks: ["2"],
    content: "Los profesores tienen una fecha límite para la corrección de los exámenes de convocatoria, para el resto de pruebas, test o exámenes no hay una norma de fecha límite.",
    date_time: "17 minutes ago",
  }


  const goBack = () => {
    window.history.back();
  };
</script>

<template>
  <div v-if="faqsId === '1'">
    <div class="flex flex-row">
      <button @click="goBack" class="flex items-center justify-center h-10 w-10 rounded-full bg-[#F5F5F5] hover:bg-gray-200 focus:outline-none  -translate-x-7">
        <b-icon-chevron-left class="text-[#828282] text-bg scale-[120%] -translate-x-0.5"/>
      </button>
      <FaqDetails :faq="faqData1"/>
    </div>
    <FaqComment :comment="faqCommentData1"/>
    <FaqComment :comment="faqCommentData2"/>
  </div>


  <div v-if="faqsId === '2'">
    <div class="flex flex-row">
      <button @click="goBack" class="flex items-center justify-center h-10 w-10 rounded-full bg-[#F5F5F5] hover:bg-gray-200 focus:outline-none  -translate-x-7">
        <b-icon-chevron-left class="text-[#828282] text-bg scale-[120%] -translate-x-0.5"/>
      </button>
      <FaqDetails :faq="faqData2"/>
    </div>
    <FaqComment :comment="faqCommentData3"/>
  </div>

  <div v-if="faqsId === '3'">
    <div class="flex flex-row">
      <button @click="goBack" class="flex items-center justify-center h-10 w-10 rounded-full bg-[#F5F5F5] hover:bg-gray-200 focus:outline-none  -translate-x-7">
        <b-icon-chevron-left class="text-[#828282] text-bg scale-[120%] -translate-x-0.5"/>
      </button>
      <FaqDetails :faq="faqData3"/>
    </div>
    <FaqComment :comment="faqCommentData4"/>
  </div>

  <div v-if="faqsId === '4'">
    <div class="flex flex-row">
      <button @click="goBack" class="flex items-center justify-center h-10 w-10 rounded-full bg-[#F5F5F5] hover:bg-gray-200 focus:outline-none  -translate-x-7">
        <b-icon-chevron-left class="text-[#828282] text-bg scale-[120%] -translate-x-0.5"/>
      </button>
      <FaqDetails :faq="faqData4"/>
    </div>
    <FaqComment :comment="faqCommentData5"/>
  </div>

  <div v-if="faqsId === '5'">
    <div class="flex flex-row">
      <button @click="goBack" class="flex items-center justify-center h-10 w-10 rounded-full bg-[#F5F5F5] hover:bg-gray-200 focus:outline-none  -translate-x-7">
        <b-icon-chevron-left class="text-[#828282] text-bg scale-[120%] -translate-x-0.5"/>
      </button>
      <FaqDetails :faq="faqData5"/>
    </div>
    <FaqComment :comment="faqCommentData6"/>
  </div>

  <div v-if="faqsId === '6'">
    <div class="flex flex-row">
      <button @click="goBack" class="flex items-center justify-center h-10 w-10 rounded-full bg-[#F5F5F5] hover:bg-gray-200 focus:outline-none  -translate-x-7">
        <b-icon-chevron-left class="text-[#828282] text-bg scale-[120%] -translate-x-0.5"/>
      </button>
      <FaqDetails :faq="faqData6"/>
    </div>
    <FaqComment :comment="faqCommentData7"/>
  </div>
</template>


<style scoped>
</style>