const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const nonEmptyRegex = /^.+$/;
const maxLengthRegex = /^.{1,35}$/;

const containsNumber = /\d/
const lengthRegex = /^.{6,10}$/;



export function validate(inputs){
    const errors = {}

   if (!emailRegex.test(inputs.email)) {
      errors.email = 'Debe ser un correo electrónico valido';
   }
   if (!nonEmptyRegex.test(inputs.email)) {
    errors.email = 'Este campo no puede estar vacío';
 }
 if (!maxLengthRegex.test(inputs.email)) {
    errors.email = 'El nombre de usuario no puede tener más de 35 carácteres';
 }
   if(!inputs.password){
    errors.message = "Se requiere un mensaje"
   }

   if(!containsNumber.test(inputs.password)){
    errors.password = "la contraseña tiene que tener al menos un número"
   }
   if(!lengthRegex.test(inputs.password)){
    errors.password = "la contraseña tiene que tener una longitud entre 6 y 10 caracteres."
   }
   return errors
  }