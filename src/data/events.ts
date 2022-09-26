import { EventDetails } from './types';

const markdownDesc = `

&nbsp;

As we moved from web pages to web applications, building highly performant, responsive, personalized web applications are more complex than ever. Large web applications are painful to build, debug and test.  
&nbsp;

&nbsp;

Component driven development will help you to alleviate some of the pain by helping you to breakdown complex UI into multiple low level components and gives you the ability to build, test the components in isolation and compose them together to bring the full-fledged page / application. Along this journey, you will be able to identify common components which can be reused within or across multiple applications.

&nbsp;

In this Live Coding session, you will be building and testing UI components together with me and we will compose these components together to build high level pages of our application. We will be using React, Storybook in this coding session.

&nbsp;

Participants are encouraged to bring their laptop for this live coding session. If you can't bring your laptop then it is ok as well, you can still watch us code and get most out of this session.

&nbsp;

**Speaker:**

**Noorul Ameen, Frontend Development Lead, Credit Suisse**

&nbsp;

The event is free and meant to offer TechTalks community members with opportunities to learn and network. Light refreshments will be served.
`;

export const cdd: EventDetails = {
    title: 'Component Driven (UI) Development using React, Storybook',
    date: 'Tuesday, September 27, 2022',
    description: markdownDesc,
    attendees: [
        {
            name: 'Noorul',
            desc: 'Software Engineer',
            role: 'Speaker',
        },
        {
            name: 'Ritesh',
            desc: 'Software Engineer',
            role: 'Organizer',
        },
        {
            name: 'James',
            desc: 'Software Engineer',
            role: 'Member',
        },
        {
            name: 'Kevin',
            desc: 'Designer',
            role: 'Member',
        },
    ],
};
