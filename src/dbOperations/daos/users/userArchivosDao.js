import { ContenedorArchivos } from "../../managers/contenedorArchivos.js";

//crear una subclases de carritos  que trabaje con el contendor Archivos
class UserArchivosDao extends ContenedorArchivos {
  constructor(namefile) {
    //ejecutamos el contructor de clase ContenedorArchivos
    super(namefile);
  }
}

export { UserArchivosDao };
