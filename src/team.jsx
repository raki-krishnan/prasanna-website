import React, { useState } from 'react';
import './team.css';

class Person {
    constructor(name, position, bio, image, email, array_index) {
        this.name = name; //string
        this.position = position; //string
        this.bio = bio; //string
        this.image = image; //string (URL)
        this.email = email; //string (email)
        this.array_index = array_index; //integer
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

    const toggleExpanded = (index) => {
        const clickedMember = teamMembers[index];

        if (expandedMember === clickedMember.array_index) {
            // Collapse the current member and restore original order
            setExpandedMember(null);
            setTeamMembers(originalMembers);
        } else {
            // Restore original order first
            const reorderedMembers = [
                originalMembers[clickedMember.array_index],
                ...originalMembers.filter((member) => member.array_index !== clickedMember.array_index),
            ];

            setTeamMembers(reorderedMembers);
            setExpandedMember(clickedMember.array_index);
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
                            expandedMember === member.array_index ? 'expanded' : ''
                        }`}
                        key={member.array_index}
                        onClick={() => toggleExpanded(index)}
                    >
                        <img src={member.image} alt={member.name} className="team-image" />
                        <h2>{member.name}</h2>
                        <p className="position">{member.position}</p>
                        <p className="bio">
                            {expandedMember === member.array_index
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
