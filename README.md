# Reflexión sobre React: className, Props y su Definición

## ¿Qué significa className en React?

En React, `className` es el equivalente al atributo `class` de HTML. Se usa en lugar de `class` porque esta palabra está reservada en JavaScript. Al trabajar con JSX (JavaScript XML), necesitamos usar `className` para aplicar clases CSS a los elementos.

## ¿Las props tienen un límite?

No existe un límite técnico definido para la cantidad de props que un componente puede recibir. Sin embargo, desde el punto de vista de buenas prácticas:

- Demasiadas props pueden indicar que el componente tiene demasiada responsabilidad
- Es recomendable dividir componentes muy complejos en otros más pequeños
- Para muchos datos, es mejor agrupar props en objetos

## ¿Quién define las props?

**El componente que recibe las props define** qué propiedades espera y qué tipo de datos necesita.

**El componente padre que usa el componente define** los valores concretos que se pasan a través de las props.

Las props establecen un "contrato" entre el componente padre e hijo, donde el hijo declara qué necesita y el padre proporciona los valores específicos.
