use youtubeBD;

create collection usuariosyt;

db.usuariosyt.insertMany([



/////1.	insertar documentos: generar la sentencia para insertar 30 documentos en la colección     
{
_id: 1,
nombre: "Juan Perez",
email: "juan77@gmail.com",
canal: {nombreCanal: "XxxJuanGamerxxX", suscriptores: 15},
videos: [
{titulo: "Mi primer video", visitas: 2, likes: 1, duracion: "2:30",
comentarios: [{usuario:"Pedro", mensaje:"Buen video!", likesComentario:25}]}
]
},

{
_id: 2,
nombre: "james donaldson,",
email: "mrbeast@outlook.com",
canal: {nombreCanal: "MrBeast", suscriptores: 400000000},
videos: [
{titulo:"PUSE A 100 HOMELESS A PELEAR POR 500 MIL DOLARES!!!", visitas:150000000, likes:8000000, duracion:"20:15",
comentarios:[{usuario:"Ana", mensaje:"Increíble video", likesComentario:500},
    {usuario:"Luisxd", mensaje:"revivio el cine", likesComentario:300}]}
]
},

{
_id: 3,
nombre: "Maria Soto",
email: "maria@gmail.com",
canal: {nombreCanal:"CocinaFacil", suscriptores:85000},
videos:[
{titulo:"Receta de pizza casera", visitas:450000, likes:23000, duracion:"12:40",
comentarios:[{usuario:"Carlos", mensaje:"La receta funciona", likesComentario:300}]}
]
},

{
_id:4,
nombre:"Pedro Gonzalez",
email:"pewdiepie@hotmail.com",
canal:{nombreCanal:"PewDiePie", suscriptores:111000000},
videos:[{titulo:"nueva temporada de fortnite", visitas:9000000, likes:500000, duracion:"18:20",
comentarios:[{usuario:"Jose",mensaje:"Muy entretenido",likesComentario:120},
    {usuario:"sigmaboy",mensaje:"like por la llama",likesComentario:10}]}
]
},

{
_id:5,
nombre:"Sofia Torres",
email:"sofivlogs@gmail.com",
canal:{nombreCanal:"SofiaVlogs",suscriptores:12000},
videos:[{titulo:"Mi viaje a Chile",visitas:35000,likes:2500,duracion:"14:10",
comentarios:[{usuario:"Daniel",mensaje:"Hermoso lugar",likesComentario:50}]}
]
},

{
_id:6,
nombre:"Ruben Dlobas",
email:"elrubiusomg@gmail.com",
canal:{nombreCanal:"ElRubius",suscriptores:40000000},
videos:[{titulo:"epic vlog 3",visitas:7000000,likes:600000,duracion:"15:00",
comentarios:[{usuario:"Mario1213",mensaje:"Que recuerdos",likesComentario:400}]}
]
},

{
_id:7,
nombre:"Camila Diaz",
email:"camila@gmail.com",
canal:{nombreCanal:"AprendeProgramando",suscriptores:95000},
videos:[{titulo:"Curso MongoDB básico",visitas:150000,likes:9000,duracion:"30:00",
comentarios:[{usuario:"Luis",mensaje:"Muy explicado",likesComentario:200}]}
]
},

{
_id:8,
nombre:"Andres Silva",
email:"andres@gmail.com",
canal:{nombreCanal:"PintandoIdeas",suscriptores:25000},
videos:[{titulo:"Dibujo paso a paso",visitas:80000,likes:6000,duracion:"16:25",
comentarios:[{usuario:"Laura",mensaje:"Me encanto",likesComentario:80}]}
]
},

{
_id:9,
nombre:"Valentina Rojas",
email:"vale@gmail.com",
canal:{nombreCanal:"TikTakChile",suscriptores:540000},
videos:[{titulo:"Experimentos faciles",visitas:1200000,likes:45000,duracion:"09:50",
comentarios:[{usuario:"Pedro",mensaje:"Buen experimento",likesComentario:150}]}
]
},

{
_id:10,
nombre:"Felipe Soto",
email:"felipe@gmail.com",
canal:{nombreCanal:"TechWorld",suscriptores:300000},
videos:[{titulo:"Review de computadores",visitas:500000,likes:20000,duracion:"15:45",
comentarios:[{usuario:"Ana",mensaje:"Me ayudo mucho",likesComentario:100}]}
]
}
])
            