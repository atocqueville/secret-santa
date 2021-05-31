export default function(values) {
  const { restrictions } = values;
  const MAX_FORBIDDEN = restrictions.length - 2; // HIMSELF + 1 open
  let errors = { restrictions: [] };
  restrictions.forEach((person, index) => {
    if (person.forbidden.length > MAX_FORBIDDEN) {
      errors.restrictions[index] = {};
      errors.restrictions[index].forbidden = "Trop d'interdictions";
    }
  })
  return errors;
}