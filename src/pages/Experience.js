import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
    <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2014-2021"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Escuela Jose Manuel Estrada, Buenos Aires, Argentina
        </h3>
        <p>Egresado de Escuela Secundaria</p>
      </VerticalTimelineElement>  <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2021-2022 (4 Meses)"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
        Plataforma 5 Coding Bootcamp
        </h3>
        <p>Egresado de academia de Programacion en el cual estudie/trabaje mas de 800 horas.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date=""
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          AirCommerce (Ecommerce de Zapatillas)
        </h3>
        <p>
    Proyecto en el cual participe junto a otros 3 integrantes.
    Yo me encargue de desarrollar la parte del Backend haciendo el AUTH, y a su vez la seguridad de los usuarios/Rutas.
    Se utilizo metodologia scrum y  La estructura de carpeta tipo fichero.
        </p>
      </VerticalTimelineElement> <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2022-2022 (4 Sprints)"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
        Poyecto Profesional para Hogarth
        </h3>
        <p>      Practica Profesional con 5 integrantes, en el cual usamos metodologia agiles, al igual que patrones de diseños.
          Proyecto en el cual teniamos que realizar una ABM que se conecte a una Landing Page de un revista juvenil, y las publicaciones creadas en la dicha ABM, tenian que verse reflejadas en la Landing.</p>
      </VerticalTimelineElement> <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2022-2022"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
        Network Broadcast</h3>
        <p>Front End para Network Broadcast. Me encargo del UI, de un nuevo proyecto que se esta realizando, al igual que las consultas a una API privada externa que se utiliza, y tambien desarrollando un backend para utilizarlo como middleware entre la API y el Front. </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
  );
}

export default Experience;
