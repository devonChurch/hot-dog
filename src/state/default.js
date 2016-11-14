const state = {

    loginState: {
        isActive: false,
        text: '',
        icon: ''
    },

    createState: {
        isActive: false,
        color: 'gray',
        topicKey: 0,
        feedbackKey: 0,
        text: ''
    },

    userState: [
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
        },
        {
            name: 'Jane Doe',
            badge: 'smile'
        },
        {
            name: 'Jane Doe',
            badge: 'flower'
        },
        {
            name: 'Jane Doe',
            badge: 'heart'
        },
        {
            name: 'Jane Doe',
            badge: 'lightening'
        },
        {
            name: 'Jane Doe',
            badge: 'martini'
        },
        {
            name: 'Jane Doe',
            badge: 'music'
        }
    ],

    topicState: [
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
    ],

    feedbackState: [
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
    ]

};

export default state;
