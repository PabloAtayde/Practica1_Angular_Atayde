export class Persona {
  public nombre: string;
  public apellido: string;
  public sexo: string;
  public edad: string;

  getNombre(nombre){
    this.nombre = nombre;
    return this.nombre
  }
  getApellido(apellido){
    this.apellido = apellido;
    return this.apellido
  }
  getSexo(sexo){
    this.sexo = sexo;
    return this.sexo
  }
  getEdad(edad){
    this.edad = edad;
    return this.edad
  }
}
