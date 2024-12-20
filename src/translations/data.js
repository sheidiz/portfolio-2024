import WikiNook1 from "../assets/images/wikinook-1.png";
import WikiNook2 from "../assets/images/wikinook-2.png";
import CheLaburo1 from "../assets/images/chelaburo-1.png";
import CheLaburo2 from "../assets/images/chelaburo-2.png";
import Nativo1 from "../assets/images/nativo-1.png";
import Nativo2 from "../assets/images/nativo-2.png";
import Nativo3 from "../assets/images/nativo-3.png";

const translations = {
  en: {
    menu: {
      about: "About me",
      experience: "Experience",
      projects: "Projects",
    },
    title: "Java Full Stack Developer",
    description: [
      "Looking out for my first job as a Developer, where I can contribute with my skills and knowledge in a dynamic workplace.",
      "I enjoy facing new challenges and colaborate on projects that generate a positive impact on people's lives. I'm open to new oportunities and I'm excited in exploring how can I contribute to innovative teams.",
    ],
    education: [
      {
        title: "Bootcamp - Full Stack Java Developer",
        institution: "Coding Dojo",
        description: [
          "An intensive bootcamp that provided training in frontend and backend technologies such as HTML, CSS, Java, Spring, and Java Server Pages.",
        ],
        dates: "April 2024 - August 2024",
      },
      {
        title: "Full Stack Java Developer",
        institution: "EducacionIT",
        description: [
          "Specialized course in the development of full stack applications with Java. It included the creation and development of applications with Java, JDBC, MySQL and React.",
        ],
        dates: "June 2023 - January 2024",
      },
      {
        title: "Associate Degree in Programming",
        institution: "Universidad Tecnológica Nacional",
        description: [
          "An associate degree in computer programming with focus on software programming and application development.",
        ],
        dates: "February 2018 - December 2019",
      },
    ],
    work: [
      {
        title: "Full Stack Developer (Tech Training)",
        company: "Igrowker - Acelerando Juniors IT",
        description: [
          "Participated in a 5-week tech training with Igrowker, collaborating with a cross-functional team (frontend, backend, UX/UI, QA).",
          "Developed an MVP for a digital banking and virtual wallet solution to improve financial access in rural areas.",
          "Contributed to frontend (React, ViteJS, Tailwind) and backend (Java, Spring) development.",
          "Implemented security features, authentication, and encryption.",
          "Worked with GitHub Projects, had weekly meetings, and deployed apps on Railway (backend) and Netlify (frontend).",
        ],
        dates: "September 2024 - October 2024",
      },
      {
        title: "Senior Marketing Automation Analyst",
        company: "Ukelele Growth Company",
        description: [
          "Worked in a team environment where we used agile methodologies.",
          "Analyzed project outcomes to identify areas for improvement and increase operational efficiency.",
          "Developed automated workflows to enhance marketing campaign performance.",
        ],
        dates: "March 2020 - September 2022",
      },
    ],
    projects: [
      {
        title: "Nativo",
        description:
          "Fintech platform that facilitates transactions in rural communities. It allows to make payments using QR codes, request microcredit, and receive/make donations to other Nativo users.",
        images: [Nativo1, Nativo2, Nativo3],
        technologies: [
          "Java",
          "Spring",
          "Spring Security",
          "Spring Email",
          "JWT",
          "JUnit",
          "Swagger",
          "PostgreSQL",
          "React",
          "TypeScript",
          "Tailwind",
          "Zustand",
        ],
        repository: "https://github.com/sheidiz/Nativo-Fintech",
        web: "",
        video: "https://youtu.be/qqw0mvAC-EQ?t=1377",
        figma: "",
      },
      {
        title: "CheLaburo",
        description:
          "Platform for hiring home services in Buenos Aires, Argentina. It allows users to publish and search for available services, connecting those who need services with local providers.",
        images: [CheLaburo1, CheLaburo2],
        technologies: [
          "Java",
          "Spring",
          "Spring JPA",
          "Spring MVC",
          "JSP",
          "JSTL",
          "Tailwind",
          "CSS",
          "JavaScript",
          "Responsive Design",
        ],
        repository: "https://github.com/sheidiz/CodingDojo-Project",
        web: "",
        figma:
          "https://www.figma.com/design/XW6XPeNF3aNehPdoMKTGUn/CheLaburo----Coding-Dojo-Project?t=aU71xOYXfDmADk7H-0",
      },
      {
        title: "WikiNook",
        description:
          "My first React App of the Animal Crossing game, powered by the Nookipedia API. Features filtering, search, and pagination for enhanced user experience.",
        images: [WikiNook1, WikiNook2],
        technologies: [
          "React",
          "JavaScript",
          "Tailwind",
          "Next.js",
          "React Paginate",
          "Framer Motion",
          "Fetch Api",
          "Responsive Design",
        ],
        repository: "https://github.com/sheidiz/wikinook",
        web: "https://wikinook.vercel.app/",
        figma: "",
      },
    ],
  },
  es: {
    menu: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
    },
    title: "Desarrolladora Full Stack Java",
    description: [
      "En búsqueda de mi primer empleo como desarrolladora, donde pueda contribuir con mis habilidades y conocimientos en un entorno laboral dinámico.",
      "Me entusiasma enfrentarme a nuevos desafíos y colaborar en proyectos que generen un impacto positivo. Abierta a nuevas oportunidades, estoy ansiosa por explorar cómo puedo aportar valor a equipos innovadores.",
    ],
    education: [
      {
        title: "Bootcamp - Java Full-Stack Developer",
        institution: "Coding Dojo",
        description: [
          "Formación intensiva en donde profundice en tecnologías frontend y backend como HTML, CSS, JavaScript Java, Spring, Spring JPA y Java Server Pages.",
        ],
        dates: "Abril 2024 - Agosto 2024",
      },
      {
        title: "Java Full-Stack Developer",
        institution: "EducacionIT",
        description: [
          "Curso especializado en el desarrollo de aplicaciones full stack con Java. Incluyó la creación desarrollo de aplicaciones con Java, JDBC, MySQL y React.",
        ],
        dates: "Junio 2023 - Enero 2024",
      },
      {
        title: "Tecnicatura Universitaria en Programación",
        institution: "Universidad Tecnológica Nacional",
        description: [
          "Carrera técnica con un enfoque en la programación de software y el desarrollo de aplicaciones web.",
        ],
        dates: "Febrero 2018 - Diciembre 2019",
      },
    ],
    work: [
      {
        title: "Desarrolladora Full Stack (Tech Training)",
        company: "Igrowker - Acelerando Juniors IT",
        description: [
          "Participé en un entrenamiento técnico de 5 semanas con Igrowker, colaborando con un equipo multidisciplinario (frontend, backend, UX/UI, QA).",
          "Desarrollamos un MVP para una solución de banca digital y billetera virtual para mejorar el acceso financiero en zonas rurales.",
          "Contribuí al desarrollo del frontend (React, ViteJS, Tailwind) y backend (Java, Spring).",
          "Implementé funciones de seguridad, autenticación y cifrado.",
          "Trabaje con GitHub Projects, reuniones semanales y realizamos los despliegues en Railway (backend) y Netlify (frontend).",
        ],
        dates: "Septiembre 2024 - Octubre 2024",
      },
      {
        title: "Analista SR de Automation Marketing",
        company: "Ukelele Growth Company",
        description: [
          "Trabajo en equipo bajo metodologías ágiles.",
          "Desarrollo de estrategias digitales para mejorar la conversión y eficiencia operativa.",
          "Planificación y ejecución de campañas de marketing.",
        ],
        dates: "Marzo 2020 - Septiembre 2022",
      },
    ],
    projects: [
      {
        title: "Nativo",
        description:
          "Plataforma fintech que facilita las transacciones en comunidades rurales. Permite realizar pagos por QR, solicitar microcréditos y dar/recibir donaciones de otros usuarios de Nativo.",
        images: [Nativo1, Nativo2, Nativo3],
        technologies: [
          "Java",
          "Spring",
          "Spring Security",
          "Spring Email",
          "JWT",
          "JUnit",
          "Swagger",
          "PostgreSQL",
          "React",
          "TypeScript",
          "Tailwind",
          "Zustand",
        ],
        repository: "https://github.com/sheidiz/Nativo-Fintech",
        web: "",
        video: "https://youtu.be/qqw0mvAC-EQ?t=1377",
        figma: "",
      },
      {
        title: "CheLaburo",
        description:
          "Plataforma para la contratación de servicios en Buenos Aires, Argentina. Permite a los usuarios publicar y buscar servicios, conectando a quienes necesitan servicios con proveedores locales.",
        images: [CheLaburo1, CheLaburo2],
        technologies: [
          "Java",
          "Spring",
          "Spring JPA",
          "Spring MVC",
          "JSP",
          "JSTL",
          "Tailwind",
          "CSS",
          "JavaScript",
          "Diseño Responsivo",
        ],
        repository: "https://github.com/sheidiz/CodingDojo-Project",
        web: "",
        figma:
          "https://www.figma.com/design/XW6XPeNF3aNehPdoMKTGUn/CheLaburo----Coding-Dojo-Project?t=aU71xOYXfDmADk7H-0",
      },
      {
        title: "WikiNook",
        description:
          "Mi primer aplicación en React sobre el juego Animal Crossing, utilizando la API de Nookipedia. Incluye filtros, búsqueda y paginación para mejorar la experiencia del usuario.",
        images: [WikiNook1, WikiNook2],
        technologies: [
          "React",
          "JavaScript",
          "Tailwind",
          "Next.js",
          "React Paginate",
          "Framer Motion",
          "Api Fetch",
          "Diseño Responsivo",
        ],
        repository: "https://github.com/sheidiz/wikinook",
        web: "https://wikinook.vercel.app/",
        figma: "",
      },
    ],
  },
};

export default translations;
