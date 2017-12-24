import { first_name, last_name, title, sentences } from 'casual'

const mocks = {
  String: () => 'It works!',
  Query: () => ({
    author: (root, args) => {
      return { firstName: args.firstName, lastName: args.lastName }
    },
  }),
  Author: () => ({ firstName: () => first_name, lastName: () => last_name }),
  Post: () => ({ title: title, text: sentences(3)})
}

export default mocks