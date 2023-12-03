import { useSelector } from "react-redux"

function Post({post, loading}) {
    return <div>
        {
            loading ? <p>Cargando...</p> : (
                <div>
                    <h2>{post.id}</h2>
                    <h2>{post.title}</h2>
                </div>                
            )
        }
    </div>
}

export default Post;

