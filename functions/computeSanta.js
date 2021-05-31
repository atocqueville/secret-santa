export async function handler(event) {
  const participants = JSON.parse(event.body);

  let tableauNoel = [];
  do {
    const idBackup = participants.map(person => person.id);
    tableauNoel = findSanta(participants, idBackup);
  } while (!passTest(tableauNoel))

  tableauNoel.forEach(person => {
    const { name } = participants[person.secretSanta];
    person.giftTo = name;
  })

  tableauNoel.forEach(person => {
    delete person.id
    delete person.forbidden
    delete person.secretSanta
  })
  
  return {
    statusCode: 200,
    body: JSON.stringify(tableauNoel)
  };
}

function passTest(tab) {
  return tab.every(isNotHimself) && tab.every(isNotForbidden);
}

function findSanta(list, idBackup) {
  const tempIds = shuffle(idBackup.slice(0));
  list.map(person => person.secretSanta = tempIds.pop())
  return list;
}

const isNotHimself = (currentValue) => currentValue.id !== currentValue.secretSanta;

const isNotForbidden = (currentValue) => !currentValue.forbidden.includes(currentValue.secretSanta);

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}