const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'P.P. Savani University',
                degree: 'MCA, Master of Computer Application',
                detail: "Completed Master's Degree in Master of Computer Applications (MCA) from P.P. Savani University, Surat, with a CGPA of 8.24.",
                year: '2023-2025'
            },
            {
                id: 1,
                title: 'Veer Narmad South Gujarat University',
                degree: 'BCA, Bachelor of Computer Application',
                detail: "Completed a Bachelor of Computer Applications from Veer Narmad South Gujarat University, Surat, with a 7.5 CGPA.",
                year: '2020-2023'
            },
            {
                id: 2,
                title: 'XII Academy',
                degree: 'HSC, Commerce Subjects',
                detail: "Completed Higher Secondary Certificate (HSC) in Commerce from Samarpan Techno School, Surat, with 75%.",
                year: '2018-2019'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Kombee Technologies',
                role: 'Frontend Developer',
                url: 'https://www.kombee.com/',
                desc: 'Software Engineer | Frontend Development | Specialized in ReactJS, NextJS & JavaScript and TypeScript | Seeking Full-Time Software Engineer Opportunity | HTML5, CSS, Bootstrap, TailwindCSS, Radix UI, | Result-Oriented | Worked on multiple projects | Dedicated to delivering high-quality code and exceptional user experiences.',
                year: '01/2025 - Present',
                location: 'Surat, Gujrat'
            },
            // {
            //     id: 2,
            //     title: 'HauzaTech',
            //     role: 'Internee',
            //     url: 'no website',
            //     desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
            //     year: '02/2023 - Present',
            //     location: 'Peshawar, Pakistan'
            // },
            // {
            //     id: 3,
            //     title: 'Encoder Bytes',
            //     role: 'PHP Developer',
            //     url: 'https://www.encoderbytes.com/',
            //     desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
            //     year: '09/2020 - 02/2021',
            //     location: 'Peshawar, Pakistan'
            // },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
