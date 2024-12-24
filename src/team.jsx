import React, { useState } from 'react';
import './team.css';

class Person {
    constructor(name, position, bio, image, email, index) {
        this.name = name; //string
        this.position = position; //string
        this.bio = bio; //string
        this.image = image; //string (URL)
        this.email = email; //string (email)
        this.index = index; //integer
    }
}

function Team() {
    const prasanna = new Person(
        'Prasanna Krishnan',
        'Supreme Leader',
        'I am the lab head and I do cool stuff.',
        '/psk-pfp.jpeg',
        'prasanna.krishnan@gmail.com',
        0
    );
    const mukti = new Person(
        'Mukti',
        'Graduate Student',
        'I want fish.',
        'logo192.png',
        'mukti@gmail.com',
        1
    );
    const uma = new Person(
        'Uma',
        'Undergraduate Student',
        'I am a student and I do cool stuff.',
        'logo192.png',
        'uma@gmail.com',
        2
    );
    const meera = new Person(
        'Meera',
        'High School Student',
        'Hahahahahaha',
        'logo192.png',
        'meera@gmail.com',
        3
    );

    const originalMembers = [prasanna, mukti, uma, meera];

    const [teamMembers, setTeamMembers] = useState(originalMembers);
    const [expandedMember, setExpandedMember] = useState(null);
    const [currentIndexfromOriginal, setCurrentIndexfromOriginal] = useState(null);

    const toggleExpanded = (index) => {
        if (expandedMember === index) {
            // Collapse the current member and restore original order
            setExpandedMember(null);
            setTeamMembers(originalMembers);
            console.log("Current state of teamMembers");
            console.log(teamMembers);
        } else {
            console.log("index clicked in teamMembers array");
            console.log(index);

            console.log("Current state of teamMembers");
            console.log(teamMembers);

            //set the unique index of the clicked member
            setCurrentIndexfromOriginal(teamMembers[index].email);
            console.log("Current index from original");
            console.log(currentIndexfromOriginal);


            // Expand the clicked member and move them to the front
            console.log("Original members");
            console.log(originalMembers);
            //first we want to set things back to their original state
            setExpandedMember(null);
            setTeamMembers(originalMembers);




            const reorderedMembers = [
                originalMembers[index],
                ...originalMembers.slice(0, index),
                ...originalMembers.slice(index + 1),
            ];

            setTeamMembers(reorderedMembers);
            setExpandedMember(0);

            console.log("Reordered members");
            console.log(reorderedMembers);
        }
    };

    return (
        <div className="page-container">
            <h1>Meet the Team</h1>
            <p>Learn more about the talented scientists and students driving our research forward.</p>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div
                        className={`team-member ${
                            expandedMember === index ? 'expanded' : ''
                        }`}
                        key={index}
                        onClick={() => toggleExpanded(index)}
                    >
                        <img src={member.image} alt={member.name} className="team-image" />
                        <h2>{member.name}</h2>
                        <p className="position">{member.position}</p>
                        <p className="bio">
                            {expandedMember === index
                                ? member.bio + ' (Expanded bio can have more details here.)'
                                : member.bio}
                        </p>
                        <a href={`mailto:${member.email}`} className="email-link">Email</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;
