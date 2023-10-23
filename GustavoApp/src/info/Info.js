import logo from "../img/logo.svg"
import circuit from "../img/circuit.png"
import porsche from "../img/porsche.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(105,183,88)", "rgb(68,89,74)"];

export const info = {
    firstName: "Gustavo",
    lastName: "Oliveira",
    position: "a Software Developer",
    logo: logo,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '❤️',
            text: 'I love Joana'
        },
        {
            emoji: '🇵🇹',
            text: 'From Portugal'
        },
        {
            emoji: "🧑‍💻",
            text: "Tech enthusiast"
        },
        {
            emoji: "🏎️",
            text: "Formula 1 Fan"
        },
        {
            emoji: "💚",
            text: "Sporting CP"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: "Hello! I'm Gustavo. I'm a Software developer with approximately 3 years of professional experience who is passionate about technology and enjoys creating solutions that can have significant impact on people\'s lives.",
    skills:
        {
            proficientWith: ['JavaScript', 'Node.js', 'Vue.js', 'AWS', 'Docker', '.NET', 'React', 'Angular', 'MongoDB'],
            exposedTo: ['C', 'PHP', 'Terraform', 'SQL', 'jQuery']
        }
    ,
    hobbies: [
        {
            label: 'Hanging out with my girlfriend',
            emoji: '👩‍❤️‍👨'
        },
        {
            label: 'Football',
            emoji: '⚽️'
        },
        {
            label: 'Padel',
            emoji: '🎾'
        },
        {
            label: 'Sim Racing & F1',
            emoji: '🏎️'
        },
        {
            label: 'Video Games',
            emoji: '🎮'
        }
    ],
    garage: [
        {
            title: "My Best Lap Times",
            link: "/garage/lapTimes",
            image: circuit,
            alt: 'circuit'
        },
        {
            title: "My Dad's Diecast Cars Collection",
            link: "/garage/lapTimes",
            image: porsche,
            alt: "My Dad's Diecast Cars Collection"
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}