const portfolio = [
    {
        id: 0,
        projectName: "Birla opus Signature-club",
        url: "https://loyaltyuat.birlaopus.com/home",
        image: "projects/birla-opus.png",
        projectDetail: "Developed a scalable loyalty and rewards frontend platform using React 18, TypeScript, and Vite. Built a responsive PWA with secure authentication, dynamic theming, and a comprehensive rewards system to enhance user engagement. Implemented Redux Toolkit for state management, integrated RESTful APIs, and created a reusable UI component library with Tailwind CSS and Shadcn/UI. Collaborated cross-functionally to deliver a production-ready, interactive web experience.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "TypeScript"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "Redux Toolkit"
            },
            {
                tech: "Vite"
            },
            {
                tech: "Shadcn/UI"
            },
            {
                tech: "Backend Laravel"
            },
        ]
    },
    {
        id: 0,
        projectName: "Ecommerce website",
        url: "https://jmmerp.com/",
        image: "projects/ecommerce.png",
        projectDetail: "The Online Laravel Ecommerce System in PHP MySQL is designed for businesses of all sizes, from small to large, across various industries such as fashion, digital, accessories, and more, with Laravel's MVC architecture. It offers a user-friendly admin dashboard, integrated payment gateways like PayPal, Stripe, Razorpay, etc, advanced reporting tools, and a responsive, secure frontend. Key features include SEO-friendly URLs, marketing tools like discount codes and email campaigns, and flexibility for future growth, supported by Laravel's extensive library and community.",
        technologiesUsed: [
            {
                tech: "Laravel"
            },
            {
                tech: "PHP"
            },
            {
                tech: "MySQL"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "Bootstrap"
            },
            {
                tech: "jQuery"
            },
            {
                tech: "Ajax"
            },
        ]
    },
    {
        id: 0,
        projectName: "Food Delivering Website",
        url: "https://jmm.ltd/",
        image: "projects/food-ordering.png",
        projectDetail: "The Complete Restaurant Food Ordering System is a responsive, device-compatible platform with a custom CMS. It offers order, menu, and customer management, SMS alerts, SEO optimization, and a referral system. Key features include a powerful admin panel with multilingual support, detailed reporting, social logins, single-page checkout, loyalty points, multiple payment options, and specialized tools for kitchen and delivery management.",
        technologiesUsed: [
            {
                tech: "PHP"
            },
            {
                tech: "MySql"
            },
            {
                tech: "PDO Installed"
            },
            {
                tech: "Bootstrap"
            },
            {
                tech: "jQuery"
            },
            {
                tech: "Ajax"
            },
        ]
    },
    {
        id: 0,
        projectName: "File Sorting Desktop app",
        url: "https://alsn.app/",
        image: "projects/file-sorting.jpg",
        projectDetail: "This Python Tkinter project efficiently sorts mixed files into categories like images, videos, documents, and audio, creating folders automatically if needed. It quickly processes millions of files within seconds using a simple folder URL input. With its user-friendly interface and fast, reliable performance, it simplifies large-scale file organization.",
        technologiesUsed: [
            {
                tech: "Python"
            },
            {
                tech: "Tkinter"
            },
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
