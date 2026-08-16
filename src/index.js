const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Permite recibir JSON
app.use(cors());
app.use(express.json());

// Ruta GET básica
app.get("/", (req, res) => {
  res.json({
    mensaje: "API funcionando correctamente",
  });
});

// Obtener usuarios
app.get("/api/usuarios", (req, res) => {
  const usuarios = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Maria" },
  ];

  res.json(usuarios);
});

// Obtener un usuario por ID
app.get("/api/usuarios/:id", (req, res) => {
  const id = Number(req.params.id);

  res.json({
    id,
    nombre: "Juan",
  });
});

// Crear un usuario
app.post("/api/usuarios", (req, res) => {
  const { nombre } = req.body;

  res.status(201).json({
    mensaje: "Usuario creado",
    usuario: {
      id: 3,
      nombre,
    },
  });
});

app.get("/api/saludo",(req,res)=> {

    const {nombre } = req.query
    res.status(200).json({
        mensjae: "Hola " + nombre 
    })
})

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});