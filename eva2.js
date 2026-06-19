use youtubeBD;

db.createCollection("usuariosyt");

/////1.	insertar documentos: generar la sentencia para insertar 30 documentos en la colección 
db.usuariosyt.insertMany([
{
_id: 1,
nombre: "Juan Perez",
email: "juan77@gmail.com",
canal: {nombreCanal: "XxxJuanGamerxxX", suscriptores: 15},
videos: [
{titulo: "Mi primer video", visitas: 2, likes: 1, duracion: "2:30",
comentarios: [{usuario:"Pedro", mensaje:"Buen video!", likesComentario:0}]}
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
    {usuario:"Luisxd", mensaje:"revivio el cine", likesComentario:300}]},
    {titulo:"GASTÉ 1 MILLÓN DE DÓLARES EN UN TORNEO DE STREAMERS", visitas:200000000, likes:10000000, duracion:"25:30",
        comentarios:[{usuario:"Luisxd", mensaje:"KE LOKO", likesComentario:800}]}
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
},

{
_id:11,
nombre:"German Garmendia",
email:"german@gmail.com",
canal:{nombreCanal:"HolaSoyGerman",suscriptores:45000000},
videos:[
{titulo:"Las cosas obvias de la vida",visitas:120000000,likes:5000000,duracion:"07:30",
comentarios:[{usuario:"Pedro",mensaje:"Un clásico de YouTube",likesComentario:900}]}
]
},

{
_id:12,
nombre:"Luis Arturo Villar Sudek",
email:"luisito@gmail.com",
canal:{nombreCanal:"Luisito Comunica",suscriptores:45000000},
videos:[{titulo:"Visitando un país desconocido",visitas:25000000,likes:900000,duracion:"25:40",
comentarios:[{usuario:"Ana",mensaje:"Me encanta conocer lugares con tus videos",likesComentario:350}]}
]
},

{
_id:13,
nombre:"Raúl Álvarez Genes",
email:"auron@gmail.com",
canal:{nombreCanal:"AuronPlay",suscriptores:30000000},
videos:[{titulo:"Reaccionando a videos virales",visitas:15000000,likes:700000,duracion:"18:20",
comentarios:[{usuario:"Luis",mensaje:"Muy divertido",likesComentario:220}]}
]
},

{
_id:14,
nombre:"German Garmendia",
email:"germanjuega@gmail.com",
canal:{nombreCanal:"JuegaGerman",suscriptores:50000000},
videos:[{titulo:"Jugando videojuegos de terror",visitas:40000000,likes:2000000,duracion:"20:15",
comentarios:[{usuario:"Sofia",mensaje:"Me dio mucho miedo",likesComentario:500}]}
]
},

{
_id:15,
nombre:"Mariand Castrejón Castañeda",
email:"yuya@gmail.com",
canal:{nombreCanal:"Yuya",suscriptores:25000000},
videos:[{titulo:"Rutina de maquillaje fácil",visitas:18000000,likes:800000,duracion:"12:45",
comentarios:[{usuario:"Maria",mensaje:"Muy buenos consejos",likesComentario:150}]}
]
},

{
_id:16,
nombre:"Dross Rotzank",
email:"dross@gmail.com",
canal:{nombreCanal:"DrossRotzank",suscriptores:22000000},
videos:[{titulo:"Historias de terror reales",visitas:30000000,likes:1200000,duracion:"35:10",
comentarios:[{usuario:"Diego",mensaje:"Excelente narración",likesComentario:600}]}
]
},

{
_id:17,
nombre:"Samuel de Luque",
email:"vegetta@gmail.com",
canal:{nombreCanal:"VEGETTA777",suscriptores:35000000},
videos:[{titulo:"Minecraft extremo",visitas:50000000,likes:2500000,duracion:"28:30",
comentarios:[{usuario:"Carlos",mensaje:"Gran aventura",likesComentario:800}]}
]
},

{
_id:18,
nombre:"Kimberly Loaiza",
email:"kimberly@gmail.com",
canal:{nombreCanal:"Kimberly Loaiza",suscriptores:45000000},
videos:[{titulo:"Nuevo vlog familiar",visitas:20000000,likes:1000000,duracion:"15:35",
comentarios:[{usuario:"Valentina",mensaje:"Muy entretenido",likesComentario:300}]}
]
},

{
_id:19,
nombre:"David Cánovas Martínez",
email:"grefg@gmail.com",
canal:{nombreCanal:"TheGrefg",suscriptores:19000000},
videos:[{titulo:"Evento de Fortnite",visitas:10000000,likes:600000,duracion:"22:50",
comentarios:[{usuario:"Mateo",mensaje:"La mejor partida",likesComentario:250}]}
]
},

{
_id:20,
nombre:"Sergio Moles Montes",
email:"nexxuz@gmail.com",
canal:{nombreCanal:"NexxuzHD",suscriptores:6000000},
videos:[{titulo:"Supervivencia en Minecraft",visitas:8000000,likes:400000,duracion:"30:25",
comentarios:[{usuario:"Pablo67",mensaje:"Buen episodio",likesComentario:100}]}
]
},

{
_id:22,
nombre:"Mark Fischbach",
email:"mark@gmail.com",
canal:{nombreCanal:"Markiplier",suscriptores:37000000},
videos:[{titulo:"Jugando juegos de terror",visitas:30000000,likes:1800000,duracion:"25:15",
comentarios:[{usuario:"Pedro",mensaje:"Tus reacciones son las mejores",likesComentario:600}]}
]
},
{
_id:23,
nombre:"Emma Chamberlain",
email:"emma@gmail.com",
canal:{nombreCanal:"EmmaChamberlain",suscriptores:12000000},
videos:[{titulo:"Un día conmigo",visitas:9000000,likes:700000,duracion:"18:25",
comentarios:[{usuario:"Laura",mensaje:"Me encanta su estilo",likesComentario:300}]}
]
},

{
_id:24,
nombre:"Marques Brownlee",
email:"marques@gmail.com",
canal:{nombreCanal:"MKBHD",suscriptores:20000000},
videos:[{titulo:"Review del nuevo smartphone",visitas:7000000,likes:400000,duracion:"12:15",
comentarios:[{usuario:"Diego",mensaje:"Excelente análisis",likesComentario:250}]}
]
},

{
_id:25,
nombre:"Casey Neistat",
email:"casey@gmail.com",
canal:{nombreCanal:"CaseyNeistat",suscriptores:13000000},
videos:[{titulo:"Mi rutina diaria",visitas:15000000,likes:900000,duracion:"10:20",
comentarios:[{usuario:"Sofia",mensaje:"Gran edición",likesComentario:180}]}
]
},

{
_id:26,
nombre:"Zachary Hsieh",
email:"zach@gmail.com",
canal:{nombreCanal:"ZHC",suscriptores:30000000},
videos:[{titulo:"Dibujando cosas gigantes",visitas:25000000,likes:1200000,duracion:"22:00",
comentarios:[{usuario:"Mario",mensaje:"Arte increíble",likesComentario:400}]}
]
},

{
_id:27,
nombre:"KSI",
email:"ksi@gmail.com",
canal:{nombreCanal:"KSI",suscriptores:24000000},
videos:[{titulo:"Nuevo video de entretenimiento",visitas:18000000,likes:1000000,duracion:"14:35",
comentarios:[{usuario:"Luis",mensaje:"Muy buen video",likesComentario:220}]}
]
},

{
_id:28,
nombre:"Ninja",
email:"ninja@gmail.com",
canal:{nombreCanal:"Ninja",suscriptores:23000000},
videos:[{titulo:"Mejores partidas de Fortnite",visitas:12000000,likes:800000,duracion:"25:50",
comentarios:[{usuario:"Andres",mensaje:"Gran jugador",likesComentario:350}]}
]
},

{
_id:29,
nombre:"Lilly Singh",
email:"lilly@gmail.com",
canal:{nombreCanal:"Superwoman",suscriptores:15000000},
videos:[{titulo:"Comedia y sketches",visitas:10000000,likes:600000,duracion:"09:45",
comentarios:[{usuario:"Maria",mensaje:"Muy divertida",likesComentario:200}]}
]
},

{
_id:30,
nombre:"Ryan Higa",
email:"ryaniga@gmail.com",
canal:{nombreCanal:"nigahiga",suscriptores:21000000},
videos:[{titulo:"Parodias famosas",visitas:14000000,likes:750000,duracion:"11:30",
comentarios:[{usuario:"Juan",mensaje:"Extraño estos videos",likesComentario:300}]}
]
}
])







///11.	Listar datos: 
/// a 1 sentencia que implemente $regex , options:’1’
db.usuariosyt.find(
    {nombre:{$regex:"german",$options:"i"}}
)

///b 1 sentencia que implemente $sum
db.usuariosyt.aggregate([
    {$group:{_id:null,totalSuscriptores:{$sum:"$canal.suscriptores"}}}
])

///c 1 sentencia que implemente $avg
db.usuariosyt.aggregate([{
    $group:{_id:null,promediosuscriptores:{$avg:"$canal.suscriptores"}}
}])

///d 1 sentencia que implemente $round
db.usuariosyt.aggregate([
    {$project:{nombre:1,suscriptoresRedondeados:{$round:["$canal.suscriptores",-3]}}}
])

/// e 1 sentencia que implemente $concat
db.usuariosyt.aggregate([
    {$project:{_id:0,nombreEmail:{$concat:["$nombre"," - ","$email"]}}}
])

///f 1 sentencia que implemente agrupación de datos (implementando $sum:1)
//cantidad de usuarios con la misma cantidad de suscriptores
db.usuariosyt.aggregate([
    {$group:{_id:"$canal.suscriptores",cantidadUsuarios:{$sum:1}}},
    {$project:{_id:0,suscriptores:"$_id",cantidadUsuarios:1}}
])

///g	1 sentencia que implemente foreach()
db.usuariosyt.find().forEach(function(usuario)
{print(usuario.nombre + " - " +usuario.canal.nombreCanal)})

///h	1 sentencia que implemente $in
db.usuariosyt.find({"canal.nombreCanal":{$in:[
    "MrBeast",
    "TheGrefg",
    "ElRubius"]}}
)

//i	1 sentencia que implemente $all
db.usuariosyt.find({"videos.comentarios.usuario":{$all:["Pedro"]}})


//j	1 sentencia que implemente $slice
db.usuariosyt.find({_id:2},
    {nombre:1,"videos.comentarios":{$slice:1}}
)

//k	1 sentencia que implemente $unwind
db.usuariosyt.aggregate([{$match:{_id:2}},
    {$unwind:"$videos"},
    {$unwind:"$videos.comentarios"},
    {$project:{_id:0,nombre:1,"videos.comentarios.usuario":1,"videos.comentarios.mensaje":1}}])