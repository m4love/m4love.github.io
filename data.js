var categories = ["Marketing","Data Analytics","Product Development","Teamwork","Legal","Other"]
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
        "Logo": "https://res.cloudinary.com/crunchbase-production/image/upload/v1399569442/bvwlhoswhk9hysd5iwwm.png",
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
        "Logo": "http://bedrocksf.com/wp-content/uploads/2015/06/Screen-Shot-2015-06-21-at-4.52.45-PM.png",
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
        "Logo": "https://pbs.twimg.com/profile_images/378800000666231761/f563760ed91f886a9c82009049c54faf_400x400.png",
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
        "Logo": "https://trademarkfactory.ca/img/mediakit/trademark-factory-logo-black.png",
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
        "Logo": "http://entreholic.com/wp-content/uploads/2016/10/Clerky-Logo.png",
        "Description": "Clerky handles all your startups legal paperwork needs as it grows, ranging from fundraising to hiring."
    },
    {
        "Category": "Teamwork",
        "Name": "Asana",
        "Tags": [
            "Communications",
            " Teamwork"
        ],
        "Short Description": "Task Management Tool",
        "Link": "https://www.asana.com/",
        "Pricing": "Free (for upto 15 members), Premium ($9.99 per member per month billed annually)",
        "Recommendation": "",
        "Logo": "https://s-media-cache-ak0.pinimg.com/originals/4f/06/b4/4f06b4d2d794773743348411bec46855.png",
        "Description": "Asana puts team tasks & conversations together, so you can get more done and rely less on email. Their mission is to empower humanity to do great things. They\u2019ve re-imagined how work gets done through a fast and versatile web application that connects everyone with what\u2019s going on, their shared priorities, and who owns each part of the effort. Asana is free for teams up to 15 people with unlimited projects and tasks."
    },
    {
        "Category": "Other",
        "Name": "Shopify",
        "Tags": [
            ""
        ],
        "Short Description": "E-commerce platform.",
        "Link": "https://www.shopify.com/",
        "Pricing": "Free Trial($0.00 per month), Basic ($29.00 per month) for starting a new business, Shopify ($79.00 per month) for growing business, Advanced Shopify ($299 per month) for large business",
        "Recommendation": "",
        "Logo": "https://cdn.shopify.com/assets2/press/brand/glyph-sample-square-large-323e1b438838e7286ebf64f8909b19752154e4af958e3df512322797829a24a7.png",
        "Description": "Shopify is a commerce platform that allows anyone to easily sell online, in-store, and everywhere in between. Shopify offers a professional online storefront, a payment solution to accept credit cards, and the Shopify POS application to power retail sales"
    },
    {
        "Category": "Marketing",
        "Name": "Searchmetrics",
        "Tags": [
            "Data & Analytics",
            " Market Intellgience & Research"
        ],
        "Short Description": "Market Analysis Tool (SEO tool)",
        "Link": "http://www.searchmetrics.com/",
        "Pricing": "Essentials($69 per month), Essential Pro($149 per month), Suite(Price on request)",
        "Recommendation": "",
        "Logo": "http://www.searchmetrics.com/wp-content/themes/sm/img/sm-logo-lg.png",
        "Description": "Searchmetrics provides an interactive SEO platform that offers a holistic consulting approach to helping companies develop and execute intelligent, long term digital marketing and content strategies."
    },
    {
        "Category": "Teamwork",
        "Name": "Ryver",
        "Tags": [
            "Team Building",
            " Communications"
        ],
        "Short Description": "Project management and team communication tool.",
        "Link": "https://ryver.com/",
        "Pricing": "Free",
        "Recommendation": "",
        "Logo": "https://10664-presscdn-0-2-pagely.netdna-ssl.com/wp-content/uploads/2017/01/ryver-logo.png",
        "Description": "Ryver allows to perform all team communications in one place. It supports chats, posts and files. It even allows users who use email to perfrom communications directly from email. It supports Web, Mac/Windows desktops, Android/iOS/Microsoft."
    },
    {
        "Category": "Marketing",
        "Name": "HelpScout",
        "Tags": [
            "User Retention",
            " Data & Analytics"
        ],
        "Short Description": "Tool for customer support and management.",
        "Link": "https://www.helpscout.net/",
        "Pricing": "On Annual Billing: Basic($8 per user per month), Standard($15 per user per month), Plus($27 per user per month). On Monthly Billing: Basic($12 per user per month), Standard($20 per user per month), Plus($27 per user per month)",
        "Recommendation": "",
        "Logo": "https://lh3.googleusercontent.com/Y5Pc4zSx1YgBSkbMfd9EeEwU6nhxQ-dTzk4980MCYzRUrMMTIU6ubJlYXQxLi3arIRE2=w300",
        "Description": "Help Scout allows you to deliver great email support and get setup in minutes without any of the typical help desk complexities.It allows shared email inbox for managing tickets. It allows team performance reports on conversation, productivity, and happiness."
    },
    {
        "Category": "Teamwork",
        "Name": "G Suite",
        "Tags": [
            "Communications",
            " Productivity"
        ],
        "Short Description": "Internal infrastructure tools.",
        "Link": "https://gsuite.google.com/",
        "Pricing": "Flexible Plan(No commitment): G Suite ($5 per user per month), G Suite Business($10 per user per month). Annual Plan(1 full year service commitment): G Suite($4.17 per user license per month)",
        "Recommendation": "",
        "Logo": "https://gsuite.google.com/setup/assets/images/misc/logo-350x215.png",
        "Description": "G Suite (formerly Google Apps for Work) comprises Gmail, Hangouts, Calendar, Google+ for communication; Drive for storage; Docs, Sheets, Slides, Forms and Sites for collaboration. It allows professional email with Gmail with your domain name."
    },
    {
        "Category": "Data Analytics",
        "Name": "New Relic",
        "Tags": [
            "Data & Analytics"
        ],
        "Short Description": "Performance analytics tool",
        "Link": "https://newrelic.com/",
        "Pricing": "Cost is calculated on amount of (CPU Cores + GB RAM) * hours used. The cost differs from Cloud-based options and Self-hosted environments.",
        "Recommendation": "",
        "Logo": "https://newrelic.com/assets/newrelic/source/NewRelic-logo-bug-086cb1887d4a4dfc9801a38bb338f176.svg",
        "Description": "New Relic monitors app performance down to specific lines of code show how each component is connected. It gives alerts about potential Full-stack problems before they blow up."
    },
    {
        "Category": "Marketing",
        "Name": "Moz",
        "Tags": [
            "Marketing"
        ],
        "Short Description": "SEO tools",
        "Link": "https://moz.com/",
        "Pricing": "Moz Local: Essential($99 per listing per year,), Professional($179 per listing per year), Premium($249 per listing per year). Moz Pro: Standard($99 per month), Medium($149 per month), Large($249 per month), Premium($599 per month) [20% saving on yearly subscription]",
        "Recommendation": "",
        "Logo": "https://dc8hdnsmzapvm.cloudfront.net/assets/images/about/brand/moz-blue-thumbnail.jpg?2a3c877",
        "Description": "Moz provides the complete SEO toolset. It provides SEO metrics including Page Authority and Domain Authority. It also deciphers "
    },
    {
        "Category": "Product Development",
        "Name": "Optimizely",
        "Tags": [
            "Optimization",
            " Personalization"
        ],
        "Short Description": "Experience optimization platform",
        "Link": "https://www.optimizely.com/",
        "Pricing": "Premiumn Pay as You Go ($49 per 1000 monthly unique visitors). Other plans require contact with sales.",
        "Recommendation": "",
        "Logo": "https://d36spl5w3z9i0o.cloudfront.net/files/o/p/optimizely_docebosaas_com/assets/img/original/eb9b1ba1b852e6f7f7a391bb076dd6deab4f08fc.png",
        "Description": "Optimizely enables businesses to experiment deeply into their technology stack and broadly across the entire customer experience. It enables A/B and multivariate testing for users to enhance their websites & mobile apps."
    },
    {
        "Category": "Data Analytics",
        "Name": "Google Analytics",
        "Tags": [
            "Data & Analytics"
        ],
        "Short Description": "Web analytics service",
        "Link": "https://analytics.google.com/analytics/web/provision/?authuser=0#provision/SignUp/",
        "Pricing": "Free; Google Analytics 360($12,500 per month)",
        "Recommendation": "",
        "Logo": "https://developers.google.com/analytics/images/terms/logo_lockup_analytics_icon_vertical_black_2x.png",
        "Description": "Google analytics tracks and reports website traffic. Using AdWords, users can now review online campaigns by tracking landing page quality and conversions (goals)."
    },
    {
        "Category": "Other",
        "Name": "botkeeper",
        "Tags": [
            "Accounting"
        ],
        "Short Description": "Bookkeeping tool",
        "Link": "https://www.botkeeper.com/",
        "Pricing": "Simple($250 per month), Grow($500 per month), Scale($800 per month)",
        "Recommendation": "",
        "Logo": "https://www.botkeeper.com/wp-content/uploads/2015/07/Logo-Botkeeper-Transparent1-e1438003524552.png",
        "Description": "Botkeeper provides a powerful combination of skilled accountants and automated data entry through use of machine learning and AI."
    },
    {
        "Category": "Other",
        "Name": "Evernote",
        "Tags": [
            "Productivity"
        ],
        "Short Description": "Notetaking app",
        "Link": "https://evernote.com/",
        "Pricing": "Basic(Free), Plus($34.00 per year), Premium($69.99 per year)",
        "Recommendation": "",
        "Logo": "https://evernote.com/media/img/logos/evernote_logo_center_4c-lrg.png",
        "Description": "Evernote is a cross-platform, fremium app designed for note taking, organizing, and archiving."
    },
    {
        "Category": "Other",
        "Name": "Square",
        "Tags": [
            "Payment"
        ],
        "Short Description": "Credit Card Prcoessing tool",
        "Link": "https://squareup.com/",
        "Pricing": "2.75% Per Transaction; 3.5% + 15 cents per Keyed-in transaction",
        "Recommendation": "",
        "Logo": "https://public-web-production-f.squarecdn.com/assets/pages/press/downloads/square.01-53fec4249b83cfa1fa474e6a9b3afa94.jpg",
        "Description": "Square's complete register service is a full point of sale with tools for every part of running a business, from accepting credit cards and tracking sales and inventory to small-business financing."
    }
];
