export default{
    name: "myworks",
    type: "document",
    title: "MyWorks",
    fields: [
        {
            name: "projectname",
            type: "string",
            title: "Name of the project"
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug of the current project",
            options: {
                source: "projectname"
            }
        },
        {
            name: "projectimage",
            type: "image",
            title: "Image of the project"
        },
        {
            name: "smalldescription",
            type: "text",
            title: "SmallDescription of the product"
        },
        {
            name: "content",
            type: "array",
            title: "Content of the product",
            of: [
                {
                    type: "block",
                }
            ]
        },
        {
            name: "projectlink",
            type: "string",
            title: "Project link"
        },
    ]
}