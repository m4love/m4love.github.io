var categories = ["Marketing", "Other", "Teamwork", "Product Development", "Legal"];
var services = [
    {
        "Category": "Marketing",
        "Name": "MailChimp",
        "Tags": [
            "Marketing",
            " Advertising",
            " User Retention"
        ],
        "Short Description": "Email marketing software.",
        "Link": "http://mailchimp.com/",
        "Pricing": "New Business (Free), Growing Business ($10 per month), Pro Marketer (additional $199 per month)",
        "Recommendation": "For any company that wants to customize and send automated emails to their audience.",
        "Logo": "https://static.mailchimp.com/web/brand-assets/mc_freddie_color_web.png",
        "Description": "MailChimp allows you to easily customize the way you send automated emails to most effectively market to your audience."
    },
    {
        "Category": "Teamwork",
        "Name": "Basecamp",
        "Tags": [
            "Productivity",
            " Communications",
            " Teamwork"
        ],
        "Short Description": "Project management tool.",
        "Link": "https://basecamp.com/",
        "Pricing": "$99 per month, $1100 per year",
        "Recommendation": "Recommended if you have multiple projects at the same time and prefer to centralize team communications.",
        "Logo": "https://37signals.com/images/basecamp-logo.png",
        "Description": "Basecamp organizes all of your company's projects, communications, and resources in a centralized location."
    },
    {
        "Category": "Teamwork",
        "Name": "Trello",
        "Tags": [
            "Productivity",
            " Communications",
            " Teamwork"
        ],
        "Short Description": "Project management tool.",
        "Link": "https://trello.com/",
        "Pricing": "Free, Business Class ($9.99 per month), Enterprise ($20.83 per month)",
        "Recommendation": "Recommended if you prefer a visual-focused and user-friendly project management tool that is akin to using online whiteboards.",
        "Logo": "http://seeklogo.com/images/T/trello-logo-CE7B690E34-seeklogo.com.png",
        "Description": "Trello's drag-and-drop interface allows you to easily organize and manage your company's projects"
    },
    {
        "Category": "Teamwork",
        "Name": "Slack",
        "Tags": [
            "Communications",
            " Teamwork"
        ],
        "Short Description": "Internal communications app.",
        "Link": "https://slack.com/ ",
        "Pricing": "Free, Standard ($6.67 per month), Plus ($12.50 per month)",
        "Recommendation": "For any company that wants to organize internal communications for improved team collaboration.",
        "Logo": "https://hivyapp.com/public/img/testimonials/slack.png",
        "Description": "Slack organizes your internal communications through project-specific channels."
    },
    {
        "Category": "Product Development",
        "Name": "UserVoice",
        "Tags": [
            "User Retention",
            " Market Research"
        ],
        "Short Description": "Product feedback tool.",
        "Link": "https://www.uservoice.com/",
        "Pricing": "Varies.",
        "Recommendation": "",
        "Logo": "https://cdn.worldvectorlogo.com/logos/uservoice.svg",
        "Description": "UserVoice \"transforms product feedback into intelligent data to drive product strategy.\""
    },
    {
        "Category": "Legal",
        "Name": "Rocket Lawyer",
        "Tags": [
            "Legal"
        ],
        "Short Description": "Automated legal documents service and easy access to lawyers.",
        "Link": "https://www.rocketlawyer.com/",
        "Pricing": "Premium ($39.95 per month), Accelerate ($49.95 per month)",
        "Recommendation": "",
        "Logo": "",
        "Description": "Rocklet Lawyer helps you easily create legal documents for your company and get legal advice from a lawyer."
    },
    {
        "Category": "Legal",
        "Name": "Startup Documents",
        "Tags": [
            "Legal"
        ],
        "Short Description": "Legal documents management and storage service.",
        "Link": "https://www.startupdocuments.com/",
        "Pricing": "Varies. Starts at $99 for a Terms of Service document and reaches up to form a California LLC.",
        "Recommendation": "",
        "Logo": "",
        "Description": "Startup Documents generates and stores your company's documents during your early stages."
    },
    {
        "Category": "Legal",
        "Name": "Termsfeed",
        "Tags": [
            "Legal"
        ],
        "Short Description": "Automated legal documents service.",
        "Link": "https://termsfeed.com/",
        "Pricing": "Varies. Starts at $0 for general agreements and additional fees for additional clauses.",
        "Recommendation": "",
        "Logo": "",
        "Description": "Termsfeed generates Terms of Service and Privacy Policies agreements."
    },
    {
        "Category": "Legal",
        "Name": "Trademark Factory",
        "Tags": [
            "Legal"
        ],
        "Short Description": "Trademark registration service.",
        "Link": "https://trademarkfactory.ca/",
        "Pricing": "I Feel Lucky ($1,495), All-Inclusive ($2,495), Ultimate ($5,995)",
        "Recommendation": "",
        "Logo": "",
        "Description": "Trademark Factory registers your company's trademark to help you protect your intellectual property."
    },
    {
        "Category": "Legal",
        "Name": "Clerky",
        "Tags": [
            "Legal"
        ],
        "Short Description": "Automated legal documents service.",
        "Link": "https://www.clerky.com/",
        "Pricing": "Formation (starts at $99), Fundraising (starts at $99 for 6 months), Hiring (starts at $19 per month), ",
        "Recommendation": "",
        "Logo": "",
        "Description": "Clerky handles all your startups legal paperwork needs as it grows, ranging from fundraising to hiring."
    },
    {
        "Category": "Other",
        "Name": "Asana",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    },
    {
        "Category": "Other",
        "Name": "Shopify",
        "Tags": [
            ""
        ],
        "Short Description": "E-commerce platform.",
        "Link": "https://www.shopify.com/",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    },
    {
        "Category": "Other",
        "Name": "Searchmetrics",
        "Tags": [
            "Data & Analytics",
            " Market Intellgience & Research"
        ],
        "Short Description": "",
        "Link": "http://www.searchmetrics.com/",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": "Market analysis tool."
    },
    {
        "Category": "Other",
        "Name": "Ryver",
        "Tags": [
            "Team Building"
        ],
        "Short Description": "",
        "Link": "https://ryver.com/",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": "Project management and team communication tool."
    },
    {
        "Category": "Other",
        "Name": "HelpScout",
        "Tags": [
            "User Retention",
            " Data & Analytics"
        ],
        "Short Description": "",
        "Link": "https://www.helpscout.net/",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": "Tool for customer support and management."
    },
    {
        "Category": "Other",
        "Name": "Google Apps for Work",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "https://gsuite.google.com/",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": "Internal infrastructure tools."
    },
    {
        "Category": "Other",
        "Name": "Asana",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "https://asana.com/",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": "Project management tool."
    },
    {
        "Category": "Other",
        "Name": "New Relic",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "https://newrelic.com/",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    },
    {
        "Category": "Other",
        "Name": "Moz",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "https://moz.com/",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    },
    {
        "Category": "Other",
        "Name": "Optimizely",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "https://www.optimizely.com/",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    },
    {
        "Category": "Other",
        "Name": "Google Analytics",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "https://analytics.google.com/analytics/web/provision/?authuser=0#provision/SignUp/",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    },
    {
        "Category": "Other",
        "Name": "botkeeper",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "https://www.botkeeper.com/",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    },
    {
        "Category": "Other",
        "Name": "Evernote",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "https://evernote.com/",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    },
    {
        "Category": "Other",
        "Name": "Zenefits",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "https://www.zenefits.com/",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    },
    {
        "Category": "Other",
        "Name": "Square",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "https://squareup.com/",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    },
    {
        "Category": "Other",
        "Name": "Buffer",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "https://buffer.com/",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    },
    {
        "Category": "Other",
        "Name": "Rescue Time",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "https://www.rescuetime.com/",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    },
    {
        "Category": "Other",
        "Name": "Autosend",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    },
    {
        "Category": "Other",
        "Name": "OptiMonk",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    },
    {
        "Category": "Other",
        "Name": "SimilarTech",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    },
    {
        "Category": "Other",
        "Name": "Upsight",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    },
    {
        "Category": "Other",
        "Name": "UserTesting",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    },
    {
        "Category": "Other",
        "Name": "LeadPages",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    },
    {
        "Category": "Other",
        "Name": "Heap",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    },
    {
        "Category": "Other",
        "Name": "OptinMonster",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    },
    {
        "Category": "Other",
        "Name": "Mixpanel",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    },
    {
        "Category": "Other",
        "Name": "Artisan",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    },
    {
        "Category": "Other",
        "Name": "DocuSign",
        "Tags": [
            ""
        ],
        "Short Description": "",
        "Link": "",
        "Pricing": "",
        "Recommendation": "",
        "Logo": "",
        "Description": ""
    }
];
