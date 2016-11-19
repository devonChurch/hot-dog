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
        badge: 'cake'
    },
    {
        name: 'Jane Doe',
        badge: 'car'
    },
    {
        name: 'Jane Doe',
        badge: 'umbrella'
    },
    {
        name: 'Jane Doe',
        badge: 'dice'
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
            isOptionsActive: false
        },
        {
            badge: 'cake',
            name: 'Mr Sassuage',
            rating: 5,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            isRatingToggled: false,
            isOptionsActive: false
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
