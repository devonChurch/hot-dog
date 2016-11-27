const loginState = {
    isInitialised: false,
    isActive: true,
    name: '',
    badge: ''
};

const createState = {
    isActive: false,
    color: 'gray',
    topicId: false,
    feedbackId: false,
    text: ''
};

const thisUserState = {
    isOptionsActive: false,
    name: false,
    badge: false,
    userId: false
};

const otherUserState = [
    {
        name: 'John Smith',
        badge: 'car',
        userId: 1479610282826
    },
    {
        name: 'Jane Doe',
        badge: 'heart',
        userId: 1479544300421
    }
];

const topicState = [
    {
        heading: 'Positive',
        color: 'green',
        userId: 1479610282826,
        topicId: 1473610282823
    },
    {
        heading: 'Negative',
        color: 'red',
        userId: 1479610282826,
        topicId: 147544300551
    },
    {
        heading: 'Ideas',
        color: 'orange',
        userId: 1479544300421,
        topicId: 1474610582825
    },
    {
        heading: 'Thanks',
        color: 'blue',
        userId: 1479544300421,
        topicId: 1469546306266
    }
];

const feedbackState = [
    {
        badge: 'car',
        name: 'John Smith',
        color: 'green',
        userId: 1479610282826,
        topicId: 1473610282823,
        feedbackId: 137510262863,
        rating: [
            1479610282826,
            1479544300421
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        isOptionsActive: false,
        lastEdit: 'sat - nov 19 - 11:25am'
    },
    {
        badge: 'heart',
        name: 'Jane Doe',
        color: 'green',
        userId: 1479544300421,
        topicId: 1473610282823,
        feedbackId: 1474640242843,
        rating: [],
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        isOptionsActive: false,
        lastEdit: false
    }
];

export {
    loginState,
    createState,
    thisUserState,
    otherUserState,
    topicState,
    feedbackState
};
