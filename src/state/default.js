const loginState = {
    isActive: true,
    isInitialised: false,
    name: '',
    badge: 'cake',
    id: false
};

const createState = {
    isActive: false,
    // isOptionsActive: false,
    color: 'gray',
    topicKey: 0,
    feedbackKey: 0,
    text: ''
};

const collaboratorState = [
    {
        name: 'John Smith',
        badge: 'car',
        id: 1479610282826
    },
    {
        name: 'Jane Doe',
        badge: 'heart',
        id: 1479544300421
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
    collaboratorState,
    topicState,
    feedbackState
};
