import { Author, View, FortuneCookie } from '../connectors'

const Query = {
  author(_, args) {
    return Author.find({ where: args })
  },
  allAuthors(_, args) {
    return Author.findAll()
  },
  getFortuneCookie(_, args) {
    return FortuneCookie.getOne()
  }
}

export default Query