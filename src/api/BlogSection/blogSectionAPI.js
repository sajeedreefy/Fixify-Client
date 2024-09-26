import axiosInstance from "../axiosInstance";


// all blog post fetching
export const fetchBlogPostData = async () => {
    try {
        const blogPostData = [];
        const response = await axiosInstance.get('Blog Post?fields=["*"]&filters=[["published","=","1"]]');
        
        const blogPostPromises = response.data.data.map(each => 
            axiosInstance.get(`Blog Post/${each.name}`).then(res => res.data.data)
        );
        
        const resolvedBlogPosts = await Promise.all(blogPostPromises);
        blogPostData.push(...resolvedBlogPosts);
        return blogPostData;
    } catch (error) {
        console.error("Error fetching Blog Post Data", error);
        throw error;
    }
};



// single blog post fetching
export const fetchSingleBlogPostData = async(name)=>{
    try {
        const response = await axiosInstance.get(`Blog Post/${name}`)
        return response.data.data
    } catch (error) {
        console.error("Error fetching single blog post data", error)
    }
}


// single blog post comment fetching
export const fetchingSingleBlogPostComment = async(name) => {
    try {
        const response = await axiosInstance.get(`Comment?filters=[["reference_doctype", "=", "Blog Post"], ["reference_name", "=", "{${name}}"]]`)
    } catch (error) {
        console.error("Error fetching single blog post comments: ", error)
    }
}
