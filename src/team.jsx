import React from 'react';
import './team.css';

class Person {
    constructor(name, position, bio, image, email) {
        this.name = name; //string
        this.position = position; //string
        this.bio = bio; //string
        this.image = image; //string (URL)
        this.email = email; //string (email)
    }
}

function Team() {

    const prasanna = new Person(
        'Prasanna Krishnan', 
        'Supreme Leader', 
        'I am the lab head and I do cool stuff.', 
        '/psk-pfp.jpeg', 
        'prasanna.krishnan@gmail.com'
    )
    const mukti = new Person(
        'Mukti', 
        'Graduate Student', 
        'I want fish.', 
        'logo192.png', 
        'mukti@gmail.com'
    )
    const uma = new Person(
        'Uma', 
        'Undergraduate Student', 
        'I am a student and I do cool stuff.', 
        'logo192.png', 
        'uma@gmail.com'
    )
    const meera =  new Person(
        'Meera', 
        'High School Student', 
        'Hahahahahaha', 
        'logo192.png', 
        'meera@gmail.com'
    )

    const teamMembers = [prasanna, mukti, uma, meera];

    return (
        <div className="page-container">
            <h1>Meet the Team</h1>
            <p>Learn more about the talented scientists and students driving our research forward.</p>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div className="team-member" key={index}>
                        <img src={member.image} alt={member.name} className="team-image" />
                        <h2>{member.name}</h2>
                        <p className="position">{member.position}</p>
                        <p className="bio">{member.bio}</p>
                        <a href={`mailto:${member.email}`} className="email-link">Email</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;
