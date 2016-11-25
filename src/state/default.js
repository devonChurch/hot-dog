const loginState = {
    isInitialised: false,
    isActive: true,
    name: '',
    badge: ''
};

const createState = {
    isActive: false,
    // isOptionsActive: false,
    color: 'gray',
    topicKey: 0,
    feedbackKey: 0,
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
        color: 'green'
    },
    {
        heading: 'Negative',
        color: 'red'
    },
    {
        heading: 'Ideas',
        color: 'orange'
    },
    {
        heading: 'Thanks',
        color: 'blue'
    }
];

const feedbackState = [
    [
        {
            badge: 'car',
            name: 'John Smith',
            userId: 1479610282826,
            rating: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            isRatingToggled: false,
            isOptionsActive: false,
            lastEdit: 'sat - nov 19 - 11:25am'
        },
        {
            badge: 'heart',
            name: 'Jane Doe',
            userId: 1479544300421,
            rating: 5,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            isRatingToggled: false,
            isOptionsActive: false,
            lastEdit: false
        }
    ],
    [],
    [],
    []
];

export {
    loginState,
    createState,
    thisUserState,
    otherUserState,
    topicState,
    feedbackState
};
