const deletePost = async (post_id) => {
    const response = await fetch('/api/posts/${post_id', {
        method: "DELETE",
        headers: { "Content-Type": "application/json"},
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert("Failed to delete the post.");
    }
};

const deletePostHandler = (event) => {
    if (event.target.mathces = (".delete-post")) {
        const post_id = event.target.getAttribute("data-post-id");
    }
};

document.addEventListener("click", deletePostHandler);