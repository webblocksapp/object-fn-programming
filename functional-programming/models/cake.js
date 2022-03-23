/**
 * Con programación funcional un molde puede ser definido
 * a través de una función. Este debe escribirse en camelCase.
 *
 * Ejemplos:
 *
 * seaAnimal
 * animal
 * urbanBuilding
 * seaVehicle
 * vehicle
 */

const cake = ({
  flavor,
  shape,
  diameter,
  color,
  fillings,
  height = 0,
  width = 0,
  longitude = 0,
}) => {
  const getArea = () => {
    switch (shape) {
      case "rounded":
        return (Math.pow(diameter / 2, 2) * Math.PI).toFixed(2);
      case "squared":
        return (width * longitude).toFixed(2);
      default:
        return 0;
    }
  };

  const getFillings = () => {
    return fillings.join(", ");
  };

  const getVolume = () => {
    return (getArea() * height).toFixed(2);
  };

  return {
    flavor,
    shape,
    diameter,
    color,
    fillings,
    height,
    width,
    longitude,
    getArea,
    getFillings,
    getVolume,
  };
};
