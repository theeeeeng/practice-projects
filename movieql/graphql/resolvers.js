const kei = {
  name: 'kei',
  age: 26,
  gender: 'female'
};

const resolvers = {
    Query: {
        person: () => kei
    }
}

export default resolvers;