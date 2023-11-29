import React from 'react';
import Style from './About.module.scss';
import Terminal from "../../components/Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import Certification from './Certification';


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{ color: info.baseColor }}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{ color: info.baseColor }}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{ color: info.baseColor }}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{ color: info.baseColor }}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{ color: info.baseColor }}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()} />
            <Terminal text={skillsText()} />
            <Terminal text={miscText()} />

            <Certification dangerouslySetInnerHTML={{
                __html: '<a href="https://www.testdome.com/certificates/22f31215754d450da85e5b1ee2eb5020" class="testdome-certificate-stamp gold"><span class="testdome-certificate-name">Gustavo Oliveira</span><span class="testdome-certificate-test-name">React</span><span class="testdome-certificate-card-logo">TestDome<br />Certificate</span></a><script>var stylesheet = "https://www.testdome.com/content/source/stylesheets/embed.css",link = document.createElement("link");link.href = stylesheet,link.type = "text/css",link.rel = "st  ylesheet",link.media = "screen,print",document.getElementsByTagName("head")[0].appendChild(link);</script>'
            }}>

            </Certification>
        </Box>
    )
}