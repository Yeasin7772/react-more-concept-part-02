import './Post.css'
export default function Post({ post }) {
    const { title, body, id, userId } = post
    return (
        <div className="post">
            <h3>Title: {title} </h3>
            <p>User id :{userId} </p>
            <p>Post id : {id} </p>
            <p>Description: {body} </p>
        </div>
    )
}