import { connect } from "react-redux"

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

function mapStateToProps(state) { //* Hace alusión a getState()
    return {
        post: state.post,
        loading: state.loading,
    }
}   

export default connect(mapStateToProps)(Post);

