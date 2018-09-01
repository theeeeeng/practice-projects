export const people = [
    {
        id: 0,
        name: 'kei',
        age: 26,
        gender: 'female'
    },
    {
        id: 1,
        name: 'hyunju',
        age: 26,
        gender: 'female'
    },
    {
        id: 2,
        name: 'theeeeeng',
        age: 26,
        gender: 'female'
    }
];

export const getById = id => {
    const filteredPerson = people.filter(person => id === person.id );
    return filteredPerson[0];
}