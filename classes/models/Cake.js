/**
 * Es un molde (blueprint) para definir varias instancias de una entidad.
 * - Una instancia es un molde inicializado con unos valores específicos.
 * - Una instancia es también un objeto
 *
 * Cake -> Class
 * const bananaCake = new Cake('banana', '30');
 * const chocolateCake = new Cake('chocolate', '10');
 * const chocolateCupCake = new Cake('chocolate', '5');
 */

/**
 * Una clase se define con la palabra reservada class y posteriormente el nombre de la
 * clase en PascalCase.
 *
 * Ejemplos:
 *
 * SeaAnimal
 * Animal
 * UrbanBuilding
 * SeaVehicle
 * Vehicle
 *
 * - Una clase contiene propiedades y atributos
 */
class Cake {
  flavor;
  shape;
  diameter;
  width;
  longitude;
  color;
  fillings;
  height;

  /**
   * El constructor es el método reservado de una clase que construye la instancia
   * con los valores establecidos desde afuera de la clase.
   */
  constructor({
    flavor,
    shape,
    diameter,
    color,
    fillings,
    height = 0,
    width = 0,
    longitude = 0,
  }) {
    this.flavor = flavor;
    this.shape = shape;
    this.diameter = diameter;
    this.color = color;
    this.fillings = fillings;
    this.height = height;
    this.width = width;
    this.longitude = longitude;
  }

  getArea() {
    switch (this.shape) {
      case "rounded":
        return (Math.pow(this.diameter / 2, 2) * Math.PI).toFixed(2);
      case "squared":
        return (this.width * this.longitude).toFixed(2);
      default:
        return 0;
    }
  }

  getFillings() {
    return this.fillings.join(", ");
  }

  getVolume() {
    return (this.getArea() * this.height).toFixed(2);
  }
}
