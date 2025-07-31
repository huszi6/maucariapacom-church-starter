// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch: "main",
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "staff",
        label: "Staff",
        path: "src/content/staff",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
            description: "e.g., Senior Pastor, Deaconess"
          },
          {
            type: "string",
            name: "email",
            label: "Email",
            ui: {
              validate: (value) => {
                if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                  return "Please enter a valid email address";
                }
              }
            }
          },
          {
            type: "string",
            name: "phone",
            label: "Phone"
          },
          {
            type: "string",
            name: "bio",
            label: "Bio",
            description: "Short bio in frontmatter",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
            description: "Order in which staff member appears"
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            description: "Hide from public view"
          }
        ]
      },
      {
        name: "events",
        label: "Events",
        path: "src/content/events",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Event Start Date",
            required: true
          },
          {
            type: "datetime",
            name: "endDate",
            label: "Event End Date"
          },
          {
            type: "string",
            name: "time",
            label: "Time",
            description: "e.g., 09:00 AM - 11:00 AM"
          },
          {
            type: "string",
            name: "location",
            label: "Location",
            required: true
          },
          {
            type: "image",
            name: "image",
            label: "Event Image",
            required: true
          },
          {
            type: "string",
            name: "summary",
            label: "Summary",
            required: true,
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          },
          {
            type: "string",
            name: "registrationLink",
            label: "Registration Link",
            ui: {
              validate: (value) => {
                if (value && !/^https?:\/\/.+/.test(value)) {
                  return "Please enter a valid URL";
                }
              }
            }
          },
          {
            type: "boolean",
            name: "registrationRequired",
            label: "Registration Required"
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            description: "Hide from public view"
          }
        ]
      },
      {
        name: "sermons",
        label: "Sermons",
        path: "src/content/sermons",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            description: "Auto-generated if not provided"
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "string",
            name: "speaker",
            label: "Speaker",
            required: true
          },
          {
            type: "string",
            name: "series",
            label: "Series"
          },
          {
            type: "string",
            name: "scripture",
            label: "Scripture"
          },
          {
            type: "string",
            name: "audioUrl",
            label: "Audio URL",
            ui: {
              validate: (value) => {
                if (value && !/^https?:\/\/.+/.test(value)) {
                  return "Please enter a valid URL";
                }
              }
            }
          },
          {
            type: "string",
            name: "videoUrl",
            label: "Video URL",
            ui: {
              validate: (value) => {
                if (value && !/^https?:\/\/.+/.test(value)) {
                  return "Please enter a valid URL";
                }
              }
            }
          },
          {
            type: "image",
            name: "image",
            label: "Thumbnail Image"
          },
          {
            type: "string",
            name: "summary",
            label: "Summary",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            description: "Hide from public view"
          }
        ]
      },
      {
        name: "ministries",
        label: "Ministries",
        path: "src/content/ministries",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true
          },
          {
            type: "image",
            name: "logo",
            label: "Logo"
          },
          {
            type: "string",
            name: "summary",
            label: "Summary",
            required: true,
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "coordinator",
            label: "Coordinator"
          },
          {
            type: "string",
            name: "contact",
            label: "Contact",
            description: "Email or text"
          },
          {
            type: "string",
            name: "schedule",
            label: "Schedule"
          },
          {
            type: "number",
            name: "order",
            label: "Display Order"
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            description: "Hide from public view"
          }
        ]
      },
      {
        name: "blog",
        label: "Blog",
        path: "src/content/blog",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            description: "Auto-generated if not provided"
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Publication Date",
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            description: "Short description for previews",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            description: "Defaults to 'Church Staff'"
          },
          {
            type: "object",
            name: "image",
            label: "Featured Image",
            fields: [
              {
                type: "image",
                name: "url",
                label: "Image",
                required: true
              },
              {
                type: "string",
                name: "alt",
                label: "Alt Text",
                required: true
              }
            ]
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            description: "Defaults to 'general'"
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            description: "Hide from public view"
          }
        ]
      },
      {
        name: "siteInfo",
        label: "Site Information",
        path: "src/content/siteInfo",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
            description: "For identifying the content block"
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
