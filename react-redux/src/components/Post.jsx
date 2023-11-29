import { connect } from "react-redux"

function Post() {
    return <div>
        Post
    </div>
}

function mapStateToProps(state) { //* Hace alusión a getState()
    return {
        post: state.post,
        loading: state.loading,
    }
}   

export default connect(mapStateToProps)(Post);

