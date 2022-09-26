type Role = 'Member' | 'Organizer' | 'Speaker';

export interface Member {
    name: string;
    desc: string;
    role: Role;
}

export interface EventDetails {
    title: string;
    date: string;
    description: string;
    attendees: Member[];
}
