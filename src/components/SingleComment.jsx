import { Button, ListGroup } from 'react-bootstrap'

const SingleComment = ({ comment }) => {
  const deleteComment = async (id) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + id,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZjRkOGUwZGQxZDAwMTgyZDE3MTUiLCJpYXQiOjE3MDQ3MTk1NzYsImV4cCI6MTcwNTkyOTE3Nn0.Vh-RK1DiN7_aGG6BMW_sK8GICNX8fcEVgfGlwz6IAs0',
          },
        }
      )
      if (response.ok) {
        alert('Comment was deleted successfully!')
      } else {
        alert('Error - comment was NOT deleted!')
      }
    } catch (error) {
      alert('Error - comment was NOT deleted!')
    }
  }

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ml-2"
        onClick={() => deleteComment(comment._id)}
      >
        Delete
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment
