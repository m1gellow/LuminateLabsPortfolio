export default{
    name: "blog",
    type: "document",
    title: "Blog",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title of the benefits-info"
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug of the info",
            options: {
                source: "title"
            }
        },
        {
            name: "timeOfReading",
            type: "string",
            title: "Time of Reading article"
        },
        {
          name: "topic",
          type: "string",
          title: "Topic of the article"
        },
        {
            name: "titleImage",
            type: "image",
            title: "Title image", 
        },
        {
            name: "smallDescription",
            type: "text",
            title: "Small Description of info"
        },
        {
            name: "content",
            type: "array",
            title: "Content",
            of: [
                {
                    type: 'block'
                }
            ]
        }
    ]
}