export default function(values) {
  const { participants } = values;
  let errors = { participants: [] };
  for (let index in participants) {
    if (!participants[index].name) {
      if (!errors.participants[index]) errors.participants[index] = {}
      errors.participants[index].name = 'Il faut un nom';
    }
    if (!participants[index].mail) {
      if (!errors.participants[index]) errors.participants[index] = {}
      errors.participants[index].mail = 'Il faut un mail';
    } else if (!/^.+@.+\..+$/.test(participants[index].mail)) {
      if (!errors.participants[index]) errors.participants[index] = {}
      errors.participants[index].mail = 'E-mail non valide';
    }
  }
  return errors;
}