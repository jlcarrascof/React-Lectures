import { useSelector } from "react-redux"

function Post() {

    const { post, loading } = useSelector(state => ({post: state.post, loading: state.loading}));

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

