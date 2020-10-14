import Comment from "./CommentModel";

export async function getComments() {
  const comments = await Comment.find();
  return comments;
}

export async function saveComment(_, { input }) {
  const comment = await Comment.create(input);
  return comment;
}

export async function deleteComments(_, { id }) {
  const del = await Comment.findByIdAndDelete(id);
  return del;
}