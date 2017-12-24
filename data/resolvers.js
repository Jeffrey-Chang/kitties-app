import { Author, View, FortuneCookie } from './connectors'
import Query from './resolvers/query'

const resolvers = {
  Query: Query,
  Author: {
    posts(author) {
      return author.getPosts()
    }
  },
  Post: {
    author(post) {
      return post.getAuthor()
    },
    views(post) {
      return View.findOne({ postId: post.id }).then(view => view.views)
    }
  }
}

export default resolvers