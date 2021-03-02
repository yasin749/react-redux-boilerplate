import apiClient from '../apiClient/apiClient';

const postService = {
    fetchPosts: () => (
        apiClient('https://jsonplaceholder.typicode.com/posts')
    ),
}
export default postService;
