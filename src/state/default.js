const loginState = {
    isActive: false,
    name: '',
    badge: 'cake'
};

const createState = {
    isActive: false,
    color: 'gray',
    topicKey: 0,
    feedbackKey: 0,
    text: ''
};

const collaboratorState = [
    {
        name: 'John Smith',
        badge: 'car',
        id: 'xxxxxx'
    },
    {
        name: 'Jane Doe',
        badge: 'heart',
        id: 'xxxxxx'
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
            badge: 'cake',
            name: 'Mr Potato',
            rating: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            isRatingToggled: false,
            isOptionsActive: false,
            lastEdit: 'sat - nov 19 - 11:25am'
        },
        {
            badge: 'cake',
            name: 'Mr Sassuage',
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
