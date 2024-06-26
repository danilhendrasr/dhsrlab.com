export async function getArticles(): Promise<BlogPost[]> {
  try {
    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            query {
              publication(host: "indentasi.dhsrlab.com") {
                posts(first: 5) {
                  edges {
                    node {
                      url
                      title
                      subtitle
                      coverImage {
                        url
                      }
                      readTimeInMinutes
                      views
                    }
                  }
                }
              }
            }`,
      }),
    });

    const json = await response.json();
    const blogPosts = json.data.publication.posts.edges.map(
      (edge: any) => edge.node
    );

    return blogPosts;
  } catch (e) {
    throw new Error("Failed to fetch articles");
  }
}
