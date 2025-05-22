const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'P.P. Savani University',
                degree: 'MCA, Master of Computer Application',
                detail: "Master's Degree in Master of Computer Application from P.P. Savani University, Surat.",
                year: '2023-2025'
            },
            {
                id: 1,
                title: 'Veer Narmad South Gujarat University',
                degree: 'BCA, Bachelor of Computer Application',
                detail: "Completed Bachelor Computer Application from Veer Narmad South Gujarat University, Surat.",
                year: '2020-2023'
            },
            {
                id: 2,
                title: 'XII Academy',
                degree: 'HSC, Commerce Subjects',
                detail: "Completed HSC in Commerce subjects from Samarpan Techno School, Surat.",
                year: '2018-2019'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'JMM Technologies',
                role: 'Frontend Developer',
                url: 'https://jmm.ltd/',
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '02/2023 - Present',
                location: 'Surat, Gujrat'
            },
            {
                id: 2,
                title: 'HauzaTech',
                role: 'Internee',
                url: 'no website',
                desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
                year: '02/2023 - Present',
                location: 'Peshawar, Pakistan'
            },
            {
                id: 3,
                title: 'Encoder Bytes',
                role: 'PHP Developer',
                url: 'https://www.encoderbytes.com/',
                desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
                year: '09/2020 - 02/2021',
                location: 'Peshawar, Pakistan'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
