# API para Biblioteca de Musica
  La API está diseñada para añadir Canciones y sus metadatos. Uso de JSON Web Token para autenticacion en métodos Post, Put y Delete.
    
## Informacion para consumir API
Usuarios:
    https://music-api-one-kappa.vercel.app/users

  {
    "userName": "carloselcior",
    "email" : "carloselcior@gmail.com",
    "password" : "carloselcior"
  }

Canciones:
    https://music-api-one-kappa.vercel.app/songs
  
  {
    "titulo": "Cabras",
    "artista": "Little Jesus",
    "album": "Sencillo",
    "genero": "Rock",
    "duracion": "00:03:42",
    "año": 2023,
    "url": "https://www.youtube.com/watch?v=VtiEkP45mG4"
  }

Playlist:
    https://music-api-one-kappa.vercel.app/playlists

  {
    "usuario_email": "admin@gmail.com",
    "nombre": "Playlist de Carlos 2",
    "descripcion": "Las canciones de Carlos",
    "canciones": "Canciones"
  }

## Clonar el Repositorio

Para comenzar a trabajar en este proyecto en tu máquina local, sigue estos pasos:

1. Abre tu terminal.

2. Utiliza el siguiente comando para clonar el repositorio en tu dispositivo:

   ```bash
   git clone https://github.com/CarloselCIOR/music-api


## Instala dependencias del proyecto

    npm install


## Ejecuta el proyecto

    npm run start